import { Keyboard, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Input, Label, Logo, Pressable, Scrollable } from '../../components'
import { COLOR, commonStyles, hp, TEXT_STYLE, wp } from '../../enums/StyleGuide'
import { En } from '../../locales/En'
import { SCREENS, TABS } from '../../enums/AppEnums'
import { login } from '../../services/FirebaseMethods'
import { useDispatch } from 'react-redux'
import { setUser } from '../../redux/action/Action'
import { showFlash } from '../../utils/MyUtils'

const LoginScreen = ({ navigation }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState('')
  const dispatch = useDispatch()

  const handleLogin = async () => {
    Keyboard.dismiss();
    if (email && password) {
      try {
        setLoading(true);
        const data = await login(email, password);
        if (data) {
          dispatch(setUser(data));
          showFlash(En.loginSuccessfully);
        }
      } catch (error) {
        setLoading(false);
        showFlash(error?.message || 'Login failed', 'error');
      } finally {
        setLoading(false);
      }
    } else {
      showFlash(En.ensureEnterAllFields, "error");
    }
  };


  return (
    <View style={styles.container}>
      <Logo />

      <Label animation={'zoomIn'} style={styles.welcomeText}>{En.welcomeback}</Label>

      

        <Input
          inputLabel={En.email}
          placeholder={En.writeHere}
          value={email}
          onChange={(e) => setEmail(e)}
        />

        <Input
          inputLabel={En.password}
          placeholder={En.writeHere}
          value={password}
          onChange={(e) => setPassword(e)}
        />
        <Pressable disabled={true} onPress={() => navigation.navigate(SCREENS.FORGOT)}>
          <Label style={styles.forgotPassword}>{En.forgotPassword}</Label>
        </Pressable>

        <Button
          text={En.login}
          style={styles.btnStyle}
          onPress={handleLogin}
          isLoading={loading}
        />

        <View style={styles.noAccountView}>
          <Label >{En.noAccount}</Label>
          <Pressable onPress={() => navigation.navigate(SCREENS.SIGNUP)}>
            <Label style={styles.signUpText}>{En.signUp}</Label>
          </Pressable>
        </View>

     
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: hp(8),
    backgroundColor:COLOR.white,
    paddingHorizontal:wp(4)
  },
  scrollContainer: {
    flexGrow:1,
    marginTop: hp(2),
    paddingHorizontal: wp(4)
  },
  forgotPassword: {
    ...TEXT_STYLE.textSemiBold,
    textAlign: 'right',
    paddingHorizontal: wp(1)
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
  welcomeText:{
    ...TEXT_STYLE.bigTextSemiBold,
    textAlign:'center',
    marginVertical:hp(4)
  }
})