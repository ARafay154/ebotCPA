import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { AppHeader, CustomIcon, Label, Logo, Pressable } from '../../components'
import { COLOR, commonStyles, hp, TEXT_STYLE, wp } from '../../enums/StyleGuide'
import { MORE_MENU } from '../../assets/data/DummyData'
import { signOut } from '../../services/FirebaseMethods'
import { setUser } from '../../redux/action/Action'
import { useDispatch } from 'react-redux'
import { SCREENS } from '../../enums/AppEnums'
import { showFlash } from '../../utils/MyUtils'

const MoreScreen = ({ navigation }) => {
const [loading, setLoading] = useState(false)
const dispatch= useDispatch()

  const handleLogout = async () => {
    try {
      setLoading(true)
      await signOut()
      dispatch(setUser(null));
      showFlash("Logout Successfully")
    } catch (error) {
      console.log("Error while logout", error)
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }

  return (
    <View style={styles.container}>
      <AppHeader
        centerComp={<Logo />}
      />

      {
        MORE_MENU.map((item, index) => (
          <Pressable key={index} style={styles.cardContainer} disabled={!item?.enable} onPress={() => navigation.navigate(item?.route, { title: item?.text })}>
            <Label style={styles.cardTitle}>{item?.text}</Label>
            <CustomIcon name={"chevron-forward"} family='Ionicons' size={hp(2.5)} />
          </Pressable>

        ))
      }


      <Pressable style={styles.cardContainer} onPress={()=>navigation.navigate(SCREENS.EDIT_PROFILE)}>
        <Label style={styles.cardTitle}>Edit Profile</Label>
        <CustomIcon name={"edit"} family='Feather' size={hp(2.5)} />
      </Pressable>

      <Pressable style={styles.cardContainer} onPress={handleLogout} >
        <Label style={styles.cardTitle}>Logout</Label>
        <CustomIcon name={"log-out"} family='Feather' size={hp(2.5)} />
      </Pressable>

    </View>
  )
}

export default MoreScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "2%",
    backgroundColor: COLOR.white

  },
  cardContainer: {
    ...commonStyles.justifyView_m05,
    backgroundColor: COLOR.white,
    paddingVertical: hp(2),
    paddingHorizontal: wp(6),
    borderRadius: hp(1.5),
    shadowColor: COLOR.darkBlue,               // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow position (iOS)
    shadowOpacity: 0.8,                // Shadow opacity (iOS)
    shadowRadius: 4,                  // Shadow blur radius (iOS)
    elevation: 3,
    marginVertical: hp(1)
  },
  cardTitle: {
    ...TEXT_STYLE.textBold
  }
})