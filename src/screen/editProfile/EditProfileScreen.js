import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { COLOR, hp, wp } from '../../enums/StyleGuide'
import { AppHeader, BackBtn, Button, Input, Scrollable } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { FIREBASE_COLLECTIONS, KEYBOARD_TYPE } from '../../enums/AppEnums'
import { getDocumentData, saveData } from '../../services/FirebaseMethods'
import { setUser } from '../../redux/action/Action'
import { showFlash } from '../../utils/MyUtils'
import { En } from '../../locales/En'

const EditProfileScreen = ({navigation}) => {
  const user = useSelector(({ appReducer }) => appReducer.user)
  const [name, setName] = useState(user?.name)
  const [contact, setContact] = useState(user?.contact)
  const [identification, setIdentification] = useState(user?.identification)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)

  const handleEdit = async () => {
    const updatedData = {};

    try {
      setLoading(true)


      if (name !== user?.name) {
        updatedData.name = name;
      }
      if (identification !== user?.identification) {
        updatedData.identification = identification;
      }

      if (contact !== user?.contact) {
        updatedData.contact = contact;
      }

      if (Object.keys(updatedData).length > 0) {
        await saveData(FIREBASE_COLLECTIONS.USERS, user?.uid, updatedData);
        const data = await getDocumentData(FIREBASE_COLLECTIONS.USERS, user?.uid)
        dispatch(setUser(data));
        showFlash("Update Successfully");
      } else {
        showFlash("No changes detected.");
      }
    } catch (error) {
      console.log("error", error)
      setLoading(false)
    } finally {
      setLoading(false)
      navigation.goBack()
    }
  }


  return (
    <View style={styles.container}>
      <AppHeader
        leftComp={<BackBtn />}
        title={"Edit Profile"}
      />

      <Scrollable containerStyle={{flexGrow:1, paddingHorizontal:wp(2), paddingTop:hp(4)}}>

        <Input
          inputLabel={En.name}
          placeholder={En.writeHere}
          value={name}
          onChange={(e) => setName(e)}
        />

        <Input
          inputLabel={En.identificationNumber}
          placeholder={En.writeHere}
          value={identification}
          onChange={(e) => setIdentification(e)}
        />

        <Input
          inputLabel={En.contactNo}
          placeholder={En.writeHere}
          value={contact}
          onChange={(e) => setContact(e)}
          keyboard={KEYBOARD_TYPE.PHONE_PAD}
        />

        <Button
          text={"Edit"}
          onPress={handleEdit}
          isLoading={loading}
          style={{marginTop:hp(6)}}
        />

      </Scrollable>
    </View>
  )
}

export default EditProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "2%",
    backgroundColor: COLOR.white
  }
})