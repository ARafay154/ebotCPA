import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { AppHeader, BackBtn, BusinessForm, Button, CustomIcon, IndividualForm, Label, Pressable, Scrollable } from '../../components'
import { COLOR, commonStyles, hp, TEXT_STYLE, wp } from '../../enums/StyleGuide'
import { CASE_TYPE } from '../../enums/AppEnums'
import { En } from '../../locales/En'
import { useDispatch } from 'react-redux'
import { setRegistration } from '../../redux/action/Action'

const StartCaseFillingScreen = (props) => {
  const { serviceType } = props?.route?.params
  const [caseType, setCaseType] = useState(null)
  const dispatch = useDispatch()

  const handleCaseType = (type)=>{
    if(type !== caseType){
      setCaseType(type)
      dispatch(setRegistration({}));
    }
   
  }

  return (
    <View style={styles.container}>
      <AppHeader
        leftComp={<BackBtn />}
        title={serviceType?.text}
        style={{ marginBottom: hp(2) }}
      />

      <View style={[commonStyles.horizontalView_m1, { paddingHorizontal: wp(2) }]}>
        <Label style={styles.pricetext}>Service : </Label>
        <Label style={styles.pricetext}>{serviceType?.text}</Label>
      </View>

      <View style={[commonStyles.horizontalView, { paddingHorizontal: wp(2), marginBottom:hp(1) }]}>
        <Label style={styles.pricetext}>Price : </Label>
        <Label style={styles.pricetext}> $ <Label style={styles.pricetext}>{serviceType.price} <Label style={styles.pricetext}>{serviceType.subText}</Label></Label></Label>
      </View>

      <Scrollable containerStyle={styles.scrollView} >

      <Label style={styles.continueText}>Start your case as  </Label>
      <View style={[commonStyles.justifyView, styles.accountTypeContainer]}>
        <Pressable style={styles.accoutTypeView} onPress={() => handleCaseType(CASE_TYPE.INDIVIDUAL)}>
          <CustomIcon
            family="Ionicons"
            name={caseType === CASE_TYPE.INDIVIDUAL ? 'radio-button-on' : 'radio-button-off'}
            size={hp(2.5)}
          />
          <Label style={caseType === CASE_TYPE.INDIVIDUAL && styles.typeSelectionText}>{En.individual}</Label>
        </Pressable>

        <Pressable style={styles.accoutTypeView} onPress={() => handleCaseType(CASE_TYPE.BUSINESS)}>
          <CustomIcon
            family="Ionicons"
            name={caseType === CASE_TYPE.BUSINESS ? 'radio-button-on' : 'radio-button-off'}
            size={hp(2.5)}
          />
          <Label style={caseType === CASE_TYPE.BUSINESS && styles.typeSelectionText}>{En.business}</Label>

        </Pressable>
      </View>
     

        {
          !caseType && <Label style={styles.selectionoptionText}>Select option to continue filing your case</Label>
        }

        {
          caseType === CASE_TYPE.INDIVIDUAL && <IndividualForm service={serviceType} />
        }

        {
          caseType === CASE_TYPE.BUSINESS && <BusinessForm  service={serviceType}/>
        }

      </Scrollable>




    </View>
  )
}

export default StartCaseFillingScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "2%",
    backgroundColor: COLOR.white,
  },
  pricetext: {
    ...TEXT_STYLE.bigTextBold,
    textAlign: 'center'
  },
  continueText: {
    marginBottom: hp(2),
    ...TEXT_STYLE.textSemiBold,
    paddingHorizontal: wp(2)
  },
  accoutTypeView: {
    width: "45%",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: hp(1.5),
    paddingHorizontal: wp(4)
  },
  typeSelectionText: {
    ...TEXT_STYLE.textSemiBold
  },
  scrollView: {
    paddingVertical: hp(2),
    paddingHorizontal: wp(1)
  },
  selectionoptionText: {
    ...TEXT_STYLE.smallTextBold,
    textAlign: 'center',
    marginTop: hp(4)
  }

})