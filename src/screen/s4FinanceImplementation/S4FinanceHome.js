import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppHeader, BackBtn, CustomIcon, Label, Pressable } from '../../components'
import { En } from '../../locales/En'
import { COLOR, hp, TEXT_STYLE, wp } from '../../enums/StyleGuide'
import { FINANCIAL_SERVICES, S4_SERVICES, TAX_SERVICES } from '../../assets/data/DummyData'

const S4FinanceHome = (props) => {
  const { title } = props?.route?.params
  const {navigation} = props 
  return (
    <View style={styles.container}>
      <AppHeader
        leftComp={<BackBtn />}
        title={title}
      />

      <View style={{ paddingHorizontal: wp(2), }}>
        <Label style={styles.homeText}>{En.s4FinanceText}</Label>

       {
        S4_SERVICES.map((item,index)=>(
          <Pressable animation="pulse" style={styles.serviceCards} key={index} onPress={()=>navigation.navigate(item?.route,{ title: item?.text })}>
          <Label style={styles.cardText}>{item?.text}</Label>
          <CustomIcon  name={"chevron-forward"} family='Ionicons' size={hp(2.5)} color={COLOR.white}/>
        </Pressable>
        ))
       }
      </View>


    </View>
  )
}

export default S4FinanceHome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "2%",
    backgroundColor:COLOR.white,
  },
  homeText: {
    textAlign: 'justify',
    marginVertical: hp(4),
    lineHeight: hp(3.5),
    ...TEXT_STYLE.textMedium
  },
  serviceCards:{
    backgroundColor:COLOR.darkBlue,
    marginVertical:hp(1.5),
    paddingVertical:hp(2),
    paddingHorizontal:wp(4),
    borderRadius:hp(1.5),
    flexDirection:'row',
    justifyContent:'space-between'
  },
  cardText:{
    color:COLOR.white,
    ...TEXT_STYLE.textSemiBold
  }
})