import { FlatList, StyleSheet, Text, View, Linking } from 'react-native';
import React, { useEffect, useState } from 'react';
import { AppHeader, CustomIcon, Label, Pressable } from '../../components';
import { COLOR, hp, TEXT_STYLE, wp } from '../../enums/StyleGuide';
import { useSelector } from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import { FIREBASE_COLLECTIONS, SCREENS } from '../../enums/AppEnums';
import { formatDate } from '../../utils/MyUtils';


const AppointmentsScreen = ({ navigation }) => {
  const user = useSelector(({ appReducer }) => appReducer.user);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    if (user?.uid) {
      const unsubscribe = firestore()
        .collection(FIREBASE_COLLECTIONS.APPOINTMENTS)
        .where('createdBy', '==', user?.uid)
        .orderBy('createdAt', 'desc')
        .onSnapshot(
          (querySnapshot) => {
            if (!querySnapshot.empty) {
              const fetchedAppointments = querySnapshot.docs.map((doc) => ({
                ...doc.data(),
              }));
              setAppointments(fetchedAppointments);
            } else {
              setAppointments([]); // Set to an empty array if no matching documents
            }
          },
          (error) => {
            console.error('Error fetching appointments: ', error);
          }
        );

      return () => unsubscribe();
    }
  }, [user?.uid]);

  const renderAppointment = ({ item }) => {
    return (
      <View style={styles.card}>
        {/* Header Section */}
        <View style={styles.cardHeader}>
          <View style={styles.caseTypeWrapper}>
            <Label style={styles.heading}>Case Type:</Label>
            <Label style={styles.caseType}>{item.caseType}</Label>
          </View>
          <View style={[styles.statusWrapper, { borderRadius: hp(2) }]}>
            <Label style={styles.heading}>Status:</Label>
            <Label style={[styles.status, styles[`status_${item?.status}`]]}>
              {item.status}
            </Label>
          </View>
        </View>

        <View style={[styles.serviceDetailsView]}>
          <Label style={styles.heading}>Requested Date:</Label>
          <Label style={styles.details}>{formatDate(item?.createdAt)}</Label>
        </View>

        {/* Service Details */}
        <View style={[styles.serviceDetailsView]}>
          <Label style={styles.heading}>Service:</Label>
          <Label style={styles.serviceName}>{item.service?.name}</Label>
        </View>

        <View style={[styles.serviceDetailsView]}>
          <Label style={styles.heading}>Details:</Label>
          <Label style={styles.details}>{item.details}</Label>
        </View>



        {/* Documents Section */}
        {item.documents?.length > 0 && (
          <View style={styles.documents}>
            <Label style={styles.documentsLabel}>Documents:</Label>
            {item.documents.map((doc, index) => (
              <Pressable
                key={index}
                onPress={() => navigation.navigate(SCREENS.VIEW_PDF, { doc: doc, docSecure: item?.docSecure })}
                style={styles.documentLink}>
                <CustomIcon name="file-open" family='MaterialIcons' size={hp(2)} />
                <Label style={styles.documentName}>{doc.name}</Label>
              </Pressable>
            ))}
          </View>
        )}

        {/* Amount */}
        <Label style={styles.amount}>{`Amount: ${item.service?.amount}`}</Label>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <AppHeader title="Appointments" />

      <FlatList
        data={appointments}
        ListEmptyComponent={
          appointments.length === 0 && (
            <Label style={styles.nofoundText}>
              Currently, no Appointments found.
            </Label>
          )
        }
        renderItem={renderAppointment}
        keyExtractor={(item, index) => `${item.documentId}-${index}`}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default AppointmentsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "2%",
    backgroundColor: COLOR.white,
  },
  nofoundText: {
    textAlign: 'center',
    marginTop: hp(8),
    ...TEXT_STYLE.textMedium,
  },
  list: {
    paddingBottom: hp(5),
  },
  card: {
    backgroundColor: '#D3D3D3',
    marginVertical: hp(1),
    padding: wp(4),
    borderRadius: 8,
    shadowColor: COLOR.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  caseType: {
    ...TEXT_STYLE.textBold,
    color: COLOR.darkBlue,
  },
  status: {
    paddingHorizontal: wp(2),
    paddingVertical: hp(0.5),
    borderRadius: 4,
    textTransform: 'capitalize',
    ...TEXT_STYLE.textBold,
  },
  status_pending: {
    backgroundColor: '#FFD700', // Yellow
    color: COLOR.darkBlue,
  },
  status_completed: {
    backgroundColor: '#008000', // Green
    color: COLOR.darkBlue,
  },
  status_rejected: {
    backgroundColor: '#FF0000', // Red
    color: COLOR.darkBlue,
  },
  serviceName: {
    ...TEXT_STYLE.textSemiBold,
  },
  details: {
    ...TEXT_STYLE.textSemiBold,
  },
  documents: {
    marginTop: hp(1),
  },
  documentsLabel: {
    fontSize: 14,
    ...TEXT_STYLE.textBold,
    color: COLOR.darkBlue,
    marginBottom: hp(0.5),
  },
  documentLink: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(0.5),
    alignSelf: 'flex-start'
  },
  documentName: {
    fontSize: 13,
    color: COLOR.darkBlue,
    marginLeft: wp(1),
    textDecorationLine: 'underline'
  },
  amount: {
    fontSize: 14,
    ...TEXT_STYLE.textBold,
    marginTop: hp(1),
  },
  caseTypeWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  heading: {
    ...TEXT_STYLE.textSemiBold,
    marginRight: wp(1),
    textDecorationLine:'underline'
  },
  serviceDetailsView: {
    flexDirection: 'row',
    marginTop: hp(1)
  }
});