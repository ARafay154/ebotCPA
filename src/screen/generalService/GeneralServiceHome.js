import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppHeader, BackBtn, CustomIcon, Label, Pressable, Scrollable } from '../../components'
import { En } from '../../locales/En'
import { COLOR, hp, TEXT_STYLE, wp } from '../../enums/StyleGuide'
import { FINANCIAL_SERVICES, GENERAL_SERVICES, TAX_SERVICES } from '../../assets/data/DummyData'
import { SCREENS } from '../../enums/AppEnums'

const GeneralServiceHome = (props) => {
  const { title } = props?.route?.params
  const { navigation } = props
  return (
    <View style={styles.container}>
      <AppHeader
        leftComp={<BackBtn />}
        title={title}
      />

      <Scrollable containerStyle={{ paddingHorizontal: wp(2),paddingBottom:hp(2) }}>
        <Label style={styles.homeText}>{En.generalServiceText}</Label>

        {
          GENERAL_SERVICES.map((item, index) => (
            <View key={index} style={styles.generalservicecardView}>
              <Label animation={"pulse"} key={index} style={styles.cardText}>{item?.text}</Label>
            </View>

          ))
        }

        {/* <Pressable style={styles.pressView} onPress={() => navigation.navigate(SCREENS.GENERAL_PRICING, { title: "Pricing" })}>
          <Label style={styles.pricingText}>General Pricings</Label>
          <CustomIcon name={"chevron-forward"} family='Ionicons' size={hp(2.5)} color={COLOR.white} />
        </Pressable> */}
      </Scrollable>


    </View>
  )
}

export default GeneralServiceHome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "2%",
    backgroundColor:COLOR.white,
  },
  homeText: {
    textAlign: 'justify',
    marginTop: hp(2),
    lineHeight: hp(3.5),
    ...TEXT_STYLE.textMedium
  },
  cardText: {
    color: COLOR.white,
    lineHeight: hp(3.5),
  },
  generalservicecardView:{
    backgroundColor: COLOR.darkBlue,
    marginVertical: hp(1),
    paddingHorizontal: wp(2),
    paddingVertical: hp(1.5),
    borderRadius: hp(1.5),
  },
  pressView: {
    backgroundColor: COLOR.darkBlue,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(2),
    paddingVertical: hp(1.5),
    borderRadius: hp(1.5),
    marginVertical: hp(1),
  },
  pricingText: {
    color: COLOR.white
  }
})