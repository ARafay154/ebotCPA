import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Button, CustomIcon, Input, Label, Logo, Pressable, Scrollable } from '../../components'
import { COLOR, commonStyles, hp, TEXT_STYLE, wp } from '../../enums/StyleGuide'
import { En } from '../../locales/En'
import {  KEYBOARD_TYPE, SCREENS } from '../../enums/AppEnums'
import { isEmailValid, isStrongPassword, showFlash } from '../../utils/MyUtils'
import { signUp } from '../../services/FirebaseMethods'

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState('')


  const minPasswordLength = 8; // Minimum password length

  const handleRegister = async () => {
    if (!name || !email || !password || !confirmPassword) {
      showFlash(En.allFiledsRequired, 'error')
      return
    }

    // Validate email format
    if (!isEmailValid(email)) {
      showFlash(En.enterValidEmail, 'error')
      return
    }

    // Validate password length
    if (password.length < minPasswordLength) {
      showFlash(`Password must be at least ${minPasswordLength} characters long.`, 'error');
      return;
    }

    if (password !== confirmPassword) {
      showFlash("Password not matched");
      return;
    }

    // Validate password strength
    if (!isStrongPassword(password)) {
      showFlash(En.passwordValidation, 'error')
      return
    }

    try {
      setLoading(true)
      const response = await signUp(name, email, password,)
      if (response) {
        navigation.navigate(SCREENS.LOGIN);
        showFlash('Account created! Please log in.');
      }
    } catch (error) {
      showFlash('Error while creating account', 'error');
      console.log(error)
      setLoading(false)
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Logo />
      <Scrollable bounce={true} containerStyle={styles.scrollContainer}>

        <Input
          inputLabel={En.name}
          placeholder={En.writeHere}
          value={name}
          onChange={(e) => setName(e)}
        />

        <Input
          inputLabel={En.email}
          placeholder={En.writeHere}
          value={email}
          keyboard={KEYBOARD_TYPE.EMAIL}
          onChange={(e) => setEmail(e)}
        />

        <Input
          inputLabel={En.password}
          placeholder={En.writeHere}
          value={password}
          onChange={(e) => setPassword(e)}
          passwordWarnig={"Min 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special (!@#$%^&*)."}
        />

        <Input
          inputLabel={En.confirmPassword}
          placeholder={En.writeHere}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e)}
        />

        <Button
          text={En.signUp}
          style={styles.btnStyle}
          onPress={handleRegister}
          isLoading={loading}
        />

        <View style={styles.noAccountView}>
          <Label>{En.alreadyAccount}</Label>
          <Pressable onPress={() => navigation.navigate(SCREENS.LOGIN)}>
            <Label style={styles.signUpText}>{En.login}</Label>
          </Pressable>
        </View>

      </Scrollable>
    </View>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: hp(2),
    backgroundColor: COLOR.white
  },
  scrollContainer: {
    flexGrow: 1,
    marginTop: hp(4),
    paddingHorizontal: wp(4)
  },
  btnStyle: {
    marginTop: hp(4)
  },
  noAccountView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(1.5)
  },
  signUpText: {
    ...TEXT_STYLE.textSemiBold,
    paddingHorizontal: wp(1.5),
    marginBottom: hp(0.25)
  },
  accountTypeText: {
    ...TEXT_STYLE.textSemiBold,
    color: COLOR.darkBlue,
    marginTop: hp(1)
  },
  accoutTypeView: {
    width: "45%",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: hp(1.5)
  },
  typeSelectionText: {
    ...TEXT_STYLE.textSemiBold
  }
})