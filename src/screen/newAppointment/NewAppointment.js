import React, { memo, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native';
import { COLOR, hp, TEXT_STYLE, wp } from '../../enums/StyleGuide';
import { En } from '../../locales/En';
import { AppHeader, BackBtn, Button, CustomIcon, Input, Label, Pressable, Scrollable } from '../../components';
import DocumentPicker from 'react-native-document-picker';
import { isIOS, showFlash } from '../../utils/MyUtils';
import { addDocument, uploadDocument } from '../../services/FirebaseMethods';
import { FIREBASE_COLLECTIONS, FIREBASE_STORAGE, KEYBOARD_TYPE, STATUS } from '../../enums/AppEnums';
import { useSelector } from 'react-redux';


const NewAppointment = (props) => {
  const { service } = props?.route?.params;
  const {navigation} = props
  const [caseType, setCaseType] = useState(null);
  const [documents, setDocuments] = useState([]);
  const [newDocument, setNewDocument] = useState(''); // Holds document path
  const [newDocName, setNewDocName] = useState(''); // Holds document name
  const [details, setDetails] = useState('')
  const user = useSelector(({ appReducer }) => appReducer.user);
  const [loading, setLoading] = useState(false)
  const [passDoc, setPassDoc] = useState('')

  const handleSelectCaseType = (type) => setCaseType(type);

  const handleAddDocument = () => {
    if (newDocName && newDocument) { // Check if both name and path are set
      setDocuments((prevDocuments) => [...prevDocuments, { name: newDocName, path: newDocument }]);
      setNewDocument('');
      setNewDocName('');
    }
  };

  const [tierName, tierAmount] = service?.selectedService?.selectedTier?.split(": ");

  const handleDocument = async () => {
    try {
      const result = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.pdf],
        copyTo: "cachesDirectory",
      });
      console.log("result", result);
      if (result) {
        // Set the file path (uri) into the newDocument state
        setNewDocument(result.fileCopyUri);
      } else {
        setNewDocument('');
      }
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        console.log('User cancelled the document picker');
      } else {
        console.log('DocumentPicker error:', error);
      }
    }
  };

  const handleRemoveDocument = (index) => {
    const newDocuments = documents.filter((_, i) => i !== index);
    setDocuments(newDocuments);
  };


  const handleNewAppointment = async () => {
    if (!caseType) {
      showFlash("Select case type");
      return;
    }
    if (!details) {
      showFlash("Enter case details");
      return;
    }
    if (documents.length === 0) {
      showFlash("Upload documents");
      return;
    }
    if (!passDoc) {
      showFlash("Enter document secure password ");
      return;
    }

    try {
      setLoading(true)
      const uploadedDocuments = [];

      // Loop through each document and upload it
      for (const doc of documents) {
        const uploadResult = await uploadDocument(FIREBASE_STORAGE.DOCUMENTS, doc.path, doc.name, user?.uid);
        if (uploadResult !== 'false') {
          // Add document name and URL to array
          uploadedDocuments.push({ name: doc.name, url: uploadResult });
        } else {
          throw new Error('Document upload failed');
        }
      }

      // Create appointment data
      const appointmentData = {
        caseType,
        details,
        documents: uploadedDocuments,
        status: STATUS.PENDING,
        docSecure:passDoc,
        service: {
          name: service?.selectedService?.serviceName,
          tier: tierName,
          amount: tierAmount,
        },
        createdBy: user?.uid || 'unknown_user' // Handle undefined `user`
      };

      // Save to Firestore
      await addDocument(FIREBASE_COLLECTIONS.APPOINTMENTS, appointmentData);
      showFlash('Appointment created successfully!');

      // Reset form fields after successful save
      setCaseType(null);
      setDocuments([]);
      setDetails('');
      setPassDoc('')
      navigation.goBack()

    } catch (error) {
      console.error("Error creating appointment:", error);
      showFlash('Error creating appointment', 'error');
      setLoading(false)
    } finally {
      setLoading(false)
    }
  };



  return (
    <View style={styles.container}>
      <AppHeader
        leftComp={<BackBtn />}
        title={"New Appointment Request"}
        style={{ width: "100%" }}
      />

      <Scrollable containerStyle={{ flexGrow: 1 }}>
        <View style={styles.serviceCardDetails}>
          <Label style={styles.serviceHeading}>Service: </Label>
          <Label style={styles.serviceValue}>{service?.selectedService?.serviceName}</Label>
        </View>

        <View style={styles.serviceCardDetails}>
          <Label style={styles.serviceHeading}>Tier: </Label>
          <Label style={styles.serviceValue}>{tierName}</Label>
        </View>

        <View style={styles.serviceCardDetails}>
          <Label style={styles.serviceHeading}>Amount: </Label>
          <Label style={styles.serviceValue}>{tierAmount}</Label>
        </View>

        <Label style={styles.caseTypeText}>Case Type</Label>
        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            style={styles.checkbox}
            onPress={() => handleSelectCaseType('Urgent')}
          >
            <View style={[styles.checkboxInner, caseType === 'Urgent' && styles.checked]} />
            <Label style={styles.checkboxLabel}>Urgent</Label>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.checkbox}
            onPress={() => handleSelectCaseType('Normal')}
          >
            <View style={[styles.checkboxInner, caseType === 'Normal' && styles.checked]} />
            <Label style={styles.checkboxLabel}>Normal</Label>
          </TouchableOpacity>
        </View>

        <Label style={styles.extrafeesText}>In case of urgent, there may be extra fees.</Label>

        <Input
          inputLabel="Details"
          placeholder={En.writeHere}
          multiline
          lines={5}
          value={details}
          onChange={(e) => setDetails(e)}
        />

        <Label style={styles.caseTypeText}>Upload Documents</Label>

        <Input
          inputLabel="Document Name"
          placeholder="Enter document name"
          value={newDocName}
          onChange={(text) => setNewDocName(text)}
          iconFamily={"MaterialIcons"}
          iconName={"drive-folder-upload"}
          iconPress={() => handleDocument()}
        />

        <Button
          style={{ width: "80%", marginTop: hp(2), alignSelf: "center" }}
          text="Add Document"
          onPress={handleAddDocument}
        />

        {documents.length > 0 && (
          <View style={styles.documentsList}>
            {documents.map((doc, index) => (
              <View key={index} style={styles.documentItem}>
                <Label style={styles.documentText}>{index + 1}. {doc.name}</Label>
                <Pressable onPress={() => handleRemoveDocument(index)}>
                  <CustomIcon family='AntDesign' name="closesquareo" size={hp(3)} />
                </Pressable>
              </View>
            ))}
          </View>
        )}

        <Input
          inputLabel={"Document Secure Password"}
          placeholder={En.writeHere}
          value={passDoc}
          onChange={(e) => setPassDoc(e)}
          keyboard={KEYBOARD_TYPE.DECIMAL_PAD}
        />

        <Button
          style={{ width: "80%", marginTop: hp(4), alignSelf: "center" }}
          text={En.send}
          onPress={handleNewAppointment}
          isLoading={loading}
        />
      </Scrollable>
    </View>
  );
};

export default NewAppointment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: "2%",
  },
  caseTypeText: {
    marginTop: hp(1),
    alignSelf: 'flex-start',
    ...TEXT_STYLE.textSemiBold,
  },
  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    alignSelf: 'center',
    marginVertical: hp(1),
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxInner: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 4,
    marginRight: 8,
  },
  checked: {
    backgroundColor: COLOR.darkBlue,
  },
  checkboxLabel: {
    ...TEXT_STYLE.textMedium,
  },
  extrafeesText: {
    ...TEXT_STYLE.smallTextSemiBold,
  },
  serviceCardDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp(0.5),
  },
  serviceHeading: {
    ...TEXT_STYLE.textMedium,
  },
  serviceValue: {
    ...TEXT_STYLE.textBold,
    paddingHorizontal: wp(2),
    width: "75%",
  },
  documentsList: {
    marginTop: hp(1),
  },
  documentItem: {
    marginTop: hp(1),
    paddingHorizontal: wp(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  documentText: {
    ...TEXT_STYLE.textMedium,
    color: COLOR.darkBlue,
    marginRight: 10,
  },
});