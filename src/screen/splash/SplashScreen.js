import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { COLOR, commonStyles, hp, TEXT_STYLE, wp } from '../../enums/StyleGuide'
import { Label } from '../../components'
import { En } from '../../locales/En'
import { SCREENS } from '../../enums/AppEnums'

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
     navigation.replace(SCREENS.ONBOARD_1)
    }, 3500);
  }, [navigation])

  return (
    <View style={styles.container}>
      <Label animation="bounce" style={styles.labelText}>{En.ebotcpa}</Label>
    
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...commonStyles.center,
    backgroundColor:COLOR.white
  },
  labelText: {
    ...TEXT_STYLE.title,
    letterSpacing: 3,
    color: COLOR.darkBlue
  },
  labelText2:{
    marginTop:hp(2),
    ...TEXT_STYLE.textSemiBold,
    textAlign:'center',
    paddingHorizontal:wp(6)
  }
})