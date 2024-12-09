import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showFlash } from '../../utils/MyUtils'
import { Button, Input, Label } from '../reuseables'
import { En } from '../../locales/En'
import { CASE_TYPE, KEYBOARD_TYPE, SCREENS } from '../../enums/AppEnums'
import { COLOR, hp, TEXT_STYLE } from '../../enums/StyleGuide'
import { useNavigation } from '@react-navigation/native'
import { setRegistration } from '../../redux/action/Action'

const BusinessForm = ({service}) => {

  const [businessName, setBusinessName] = useState('')
  const [number, setNumber] = useState('')
  const [businessIdentityNo, setBusinessIdentityNo] = useState('')
  const [industry, setIndustry] = useState('')
  const [annualRevenue, setAnnualRevenue] = useState('')
  const [employeeCount, setEmployeeCount] = useState('')
  const [businessStructure, setBusinessStructure] = useState('')
  const navigation = useNavigation()

  const user = useSelector(({ appReducer }) => appReducer.user);
  const dispatch = useDispatch()

  const handleComplete = async () => {
    if (!businessName || !number || !businessIdentityNo || !industry || !annualRevenue || !employeeCount || !businessStructure) {
      showFlash(En.allFiledsRequired, 'error')
      return
    }

    try {

      const updatedData = {
        contactNumber: number,
        businessName: businessName,
        businessIdentityNo: businessIdentityNo,
        industry: industry,
        annualRevenue: annualRevenue,
        employeeCount: employeeCount,
        businessStructure: businessStructure,
        service:service,
        customerId:user?.uid,
        caseType:CASE_TYPE.BUSINESS

      }
      dispatch(setRegistration(updatedData));
       navigation.navigate(SCREENS.CASEFILLING_CONFIRM)
    } catch (error) {
      console.log("Error while upload Data", error)
     
    } 
  }

  return (
    <View style={styles.container}>
        <Label style={styles.fillFormText}>Fill the form</Label>
      <Input
        inputLabel={"Business Name"}
        placeholder={En.writeHere}
        value={businessName}
        onChange={(e) => setBusinessName(e)}
      />

      <Input
        inputLabel={En.contactNo}
        placeholder={En.writeHere}
        value={number}
        keyboard={KEYBOARD_TYPE.PHONE_PAD}
        onChange={(e) => setNumber(e)}
      />

      <Input
        inputLabel={"Business Identification No."}
        placeholder={En.writeHere}
        value={businessIdentityNo}
        onChange={(e) => setBusinessIdentityNo(e)}
      />

      <Input
        inputLabel={"Industry"}
        placeholder={En.writeHere}
        value={industry}
        onChange={(e) => setIndustry(e)}
      />

      <Input
        inputLabel={"Annual Revenue (in $)"}
        placeholder={En.writeHere}
        value={annualRevenue}
        keyboard={KEYBOARD_TYPE.DECIMAL_PAD}
        onChange={(e) => setAnnualRevenue(e)}
      />

      <Input
        inputLabel={"Number of Employees"}
        placeholder={En.writeHere}
        value={employeeCount}
        keyboard={KEYBOARD_TYPE.NUMERIC}
        onChange={(e) => setEmployeeCount(e)}
      />

      <Input
        inputLabel={"Business Structure (like LLC, Corporation, etc)"}
        placeholder={En.writeHere}
        value={businessStructure}
        onChange={(e) => setBusinessStructure(e)}
      />


      <Button
        text={"Next"}
        style={styles.btnStyle}
        onPress={handleComplete}
      
      />
    </View>
  )
}

export default BusinessForm

const styles = StyleSheet.create({
  btnStyle: {
    marginTop: hp(4)
  },
  fillFormText:{
    ...TEXT_STYLE.bigTextSemiBold,
    textAlign:'center',
    marginBottom:hp(2)
  },
  container: {
    backgroundColor: COLOR.white,
    padding: "4%",
    borderRadius: hp(2), // Optional: adds smooth edges
    shadowColor: "#000", // Shadow color for iOS
    shadowOffset: {
      width: 0,
      height: 2, // Controls the shadow height
    },
    shadowOpacity: 0.2, // Controls the transparency of the shadow
    shadowRadius: 4, // Spread of the shadow
    elevation: 4, // Android shadow
  },
})