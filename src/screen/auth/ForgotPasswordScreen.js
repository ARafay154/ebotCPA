import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppHeader, BackBtn, Button, Input, Label, Scrollable } from '../../components'
import { En } from '../../locales/En'
import { COLOR, hp, TEXT_STYLE, wp } from '../../enums/StyleGuide'

const ForgotPasswordScreen = () => {
  return (
    <View style={styles.container}>
      <AppHeader
        leftComp={<BackBtn />}
      />

      <Scrollable containerStyle={{ paddingHorizontal: wp(4),paddingTop:hp(4)}}>
        <Label style={styles.title}>{En.forgotPasswordHeading}</Label>
        <Label style={styles.subText}>{En.forgotPasswordSubText}</Label>

        <Input
          inputLabel={En.email}
          placeholder={En.writeHere}
        />

        <Button
          text={En.send}
          style={styles.btnStyle}
        />
      </Scrollable>


    </View>
  )
}

export default ForgotPasswordScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:COLOR.white
   
  },
  title: {
    ...TEXT_STYLE.title,

    marginTop: hp(2)
  },
  subText: {
    ...TEXT_STYLE.textMedium,
    marginVertical: hp(1)
  },
  btnStyle: {
    marginTop: hp(6)
  }
})