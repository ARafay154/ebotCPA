import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppHeader, BackBtn, Button, Input, Label, Scrollable } from '../../components'
import { En } from '../../locales/En'
import { COLOR, hp, TEXT_STYLE, wp } from '../../enums/StyleGuide'

const ContactUsScreen = () => {
  return (
    <View style={styles.container}>
      <AppHeader
        leftComp={<BackBtn />}
        title={"Contact Us"}
      />

      <Scrollable containerStyle={{paddingHorizontal:wp(4), flexGrow:1}} >
        <Label style={styles.text}>Please leave contact details</Label>
        <Label style={styles.subtext}>In case you need to be contacted about our service</Label>

        <Input
          inputLabel={En.email}
          leftIconName={"mail"}
          leftIconSize={hp(3)}
          leftIconFamily={"Feather"}
          placeholder={En.writeHere}
        />

        <Input
          inputLabel={En.name}
          leftIconName={"user"}
          leftIconSize={hp(3)}
          leftIconFamily={"Entypo"}
          placeholder={En.writeHere}
        />

        <Input
          inputLabel={En.contactNo}
          leftIconName={"phone"}
          leftIconSize={hp(3)}
          leftIconFamily={"Feather"}
          placeholder={En.writeHere}
        />
        <Input
          inputLabel={"Message"}
          multiline
          lines={5}
          placeholder={En.writeHere}
        />

        <Button 
        text={En.send}
        style={{marginVertical:hp(4)}}
        />
      </Scrollable>


    </View>
  )
}

export default ContactUsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "2%",
    backgroundColor:COLOR.white,
  },
  text:{
    textAlign:'center',
    ...TEXT_STYLE.textSemiBold,
    marginTop:hp(2)
  },
  subtext:{
   
    marginVertical:hp(2)
  }
})