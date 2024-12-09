import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { AppHeader, BackBtn, Button, CustomIcon, Input, Label, Pressable } from '../../components'
import { COLOR, hp, TEXT_STYLE, wp } from '../../enums/StyleGuide'
import DocumentPicker from 'react-native-document-picker';
import { useDispatch, useSelector } from 'react-redux';
import { setRegistration } from '../../redux/action/Action';
import { FIREBASE_COLLECTIONS, FIREBASE_STORAGE, SCREENS, TABS } from '../../enums/AppEnums';
import { addDocument, uploadDocument } from '../../services/FirebaseMethods';
import { showFlash } from '../../utils/MyUtils';


const DocumentsUploadScreen = ({navigation}) => {

  const registration = useSelector(({ appReducer }) => appReducer.registration);
  const user = useSelector(({ appReducer }) => appReducer.user);
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)

  console.log("registration", registration)


  const [documents, setDocuments] = useState([]);
  const [newDocument, setNewDocument] = useState(''); // Holds document path
  const [newDocName, setNewDocName] = useState('');


  const handleRemoveDocument = (index) => {
    const newDocuments = documents.filter((_, i) => i !== index);
    setDocuments(newDocuments);
  };


  const handleAddDocument = () => {
    if (newDocName && newDocument) { // Check if both name and path are set
      setDocuments((prevDocuments) => [...prevDocuments, { name: newDocName, path: newDocument }]);
      setNewDocument('');
      setNewDocName('');
    }
  };


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

  const handleDone = async()=>{
    try {
      setLoading(true)
      const uploadedDocuments = [];
      for (const doc of documents) {
        const uploadResult = await uploadDocument(FIREBASE_STORAGE.DOCUMENTS, doc?.path, doc?.name, user?.uid);
        if (uploadResult !== 'false') {
          // Add document name and URL to array
          uploadedDocuments.push({ name: doc.name, url: uploadResult });
        } else {
          throw new Error('Document upload failed');
        }
      }

      const appointmentData = {
        ...registration,
        documents: uploadedDocuments,
      }

      await addDocument(FIREBASE_COLLECTIONS.APPOINTMENTS, appointmentData);
      showFlash('Appointment created successfully!');
      dispatch(setRegistration({}))
      setDocuments([])
    
      navigation.navigate(TABS.TAB)
    } catch (error) {
      console.error("Error creating appointment:", error);
      showFlash('Error creating appointment', 'error');
      setLoading(false)
    } finally{
      setLoading(false)
    }
  }

  return (
    <View style={styles.container}>
      <AppHeader
        leftComp={<BackBtn />}
        title={"Upload Documents"}
        style={{ marginBottom: hp(2) }}
      />

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

      {
        documents.length > 0 &&
        <Button
          style={{ marginTop: 'auto', marginBottom: hp(6) }}
          text={"Book Appointment"}
          isLoading={loading}
          onPress={()=>handleDone()}
        />
      }

    </View>
  )
}

export default DocumentsUploadScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "2%",
    backgroundColor: COLOR.white,
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
  documentsList: {
    marginTop: hp(1),
  },
})