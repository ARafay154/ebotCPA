import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { COLOR, commonStyles, hp, TEXT_STYLE, wp } from '../../enums/StyleGuide'
import { Button, CustomIcon, Input, Label, Pressable } from '../reuseables'
import { En } from '../../locales/En'
import { CASE_TYPE, KEYBOARD_TYPE, SCREENS } from '../../enums/AppEnums'
import { setRegistration } from '../../redux/action/Action'
import { generateRandomCode, showFlash } from '../../utils/MyUtils'
import { useNavigation } from '@react-navigation/native'

const IndividualForm = ({service}) => {
  const [number, setNumber] = useState('')
  const [socialSecurityNo, setSocialSecurityNo] = useState('')
  const [employType, setEmployType] = useState('')
  const [incomeDetails, setIncomeDetails] = useState([])
  const [incomeDetailText, setIncomeDetailText] = useState('')
  const [filing, setFiling] = useState('')
  const navigation = useNavigation()

  const user = useSelector(({ appReducer }) => appReducer.user);
  const registration = useSelector(({ appReducer }) => appReducer.registration);

 
  const dispatch = useDispatch()

  // Function to add input text to incomeDetails array
  const addIncomeDetail = () => {
    if (incomeDetailText.trim()) {
      setIncomeDetails([...incomeDetails, incomeDetailText.trim()]) // Add to array
      setIncomeDetailText('') // Clear input
    }
  }

  // Function to remove a detail by index
  const removeIncomeDetail = (index) => {
    const updatedDetails = incomeDetails.filter((_, i) => i !== index)
    setIncomeDetails(updatedDetails)
  }


  const handleComplete = async () => {
    if (!number || !socialSecurityNo || !employType || incomeDetails.length === 0 || !filing) {
      showFlash(En.allFiledsRequired, 'error')
      return
    }
    
    try {
      const caseId = generateRandomCode();
      const updatedData = {
        contactNumber: number,
        socialSecurity: socialSecurityNo,
        employType: employType,
        incomeDetails: incomeDetails,
        filingStatus: filing,
        service:service,
        customerId:user?.uid,
        caseType:CASE_TYPE.INDIVIDUAL,
        caseId:caseId
      }
       dispatch(setRegistration(updatedData));
       navigation.navigate(SCREENS.CASEFILLING_CONFIRM)
    } catch (error) {
      console.log("Error while upload Data, error")
     
    } 
  }


  return (
    <View style={styles.container}>
      <Label style={styles.fillFormText}>Fill the form</Label>
      <Label style={styles.employeStatusText}>Employment Status</Label>

      <View style={[commonStyles.justifyView, styles.accountTypeContainer]}>
        <Pressable style={styles.accoutTypeView} onPress={() => setEmployType('employed')}>
          <CustomIcon
            family="Ionicons"
            name={employType === 'employed' ? 'radio-button-on' : 'radio-button-off'}
            size={hp(2.5)}
          />
          <Label style={employType === 'employed' && styles.typeSelectionText}>Employed</Label>
        </Pressable>

        <Pressable style={styles.accoutTypeView} onPress={() => setEmployType('unemployed')}>
          <CustomIcon
            family="Ionicons"
            name={employType === "unemployed" ? 'radio-button-on' : 'radio-button-off'}
            size={hp(2.5)}
          />
          <Label style={employType === "unemployed" && styles.typeSelectionText}>Unemployed</Label>
        </Pressable>
      </View>

      <Label style={styles.employeStatusText}>Fiing Status</Label>

      <View style={[commonStyles.justifyView, styles.accountTypeContainer]}>
        <Pressable style={styles.filingtypeView} onPress={() => setFiling('single')}>
          <CustomIcon
            family="Ionicons"
            name={filing === 'single' ? 'radio-button-on' : 'radio-button-off'}
            size={hp(2.5)}
          />
          <Label style={filing === 'single' && styles.typeSelectionText}>Single</Label>
        </Pressable>

        <Pressable style={styles.filingtypeView} onPress={() => setFiling('married')}>
          <CustomIcon
            family="Ionicons"
            name={filing === "married" ? 'radio-button-on' : 'radio-button-off'}
            size={hp(2.5)}
          />
          <Label style={filing === "married" && styles.typeSelectionText}>Married</Label>
        </Pressable>

        <Pressable style={styles.filingtypeView} onPress={() => setFiling('divorced')}>
          <CustomIcon
            family="Ionicons"
            name={filing === "divorced" ? 'radio-button-on' : 'radio-button-off'}
            size={hp(2.5)}
          />
          <Label style={filing === "divorced" && styles.typeSelectionText}>Divorced</Label>
        </Pressable>
      </View>

      <Input
        inputLabel={En.contactNo}
        placeholder={En.writeHere}
        value={number}
        keyboard={KEYBOARD_TYPE.PHONE_PAD}
        onChange={(e) => setNumber(e)}
      />

      <Input
        inputLabel={En.socialSecurityNo}
        placeholder={En.writeHere}
        value={socialSecurityNo}
        onChange={(e) => setSocialSecurityNo(e)}
      />

      <Input
        inputLabel={En.incomeDetails}
        placeholder={En.writeHere}
        value={incomeDetailText}
        onChange={(e) => setIncomeDetailText(e)}
        iconName={"pluscircleo"}
        iconFamily={"AntDesign"}
        iconPress={addIncomeDetail}
        iconSize={hp(3)}
      />

      {/* Display Income Details */}
      <View style={styles.incomeDetailsContainer}>
        {incomeDetails.map((detail, index) => (
          <View key={index} style={styles.incomeDetailItem}>
            <Label style={styles.detailText}>
              {index + 1}. {detail}
            </Label>
            <Pressable onPress={() => removeIncomeDetail(index)}>
              <CustomIcon name={"close"} family='AntDesign' size={hp(2.5)} color={COLOR.red} />
            </Pressable>
          </View>
        ))}
      </View>

      <Button
        text={"Next"}
        style={styles.btnStyle}
        onPress={handleComplete}
       
      />

    </View>
  )
}

export default IndividualForm

const styles = StyleSheet.create({
  employeStatusText: {
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
  filingtypeView: {
    width: "30%",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: hp(1.5)
  },
  typeSelectionText: {
    ...TEXT_STYLE.textSemiBold
  },
  incomeDetailsContainer: {
    marginTop: hp(2),
    paddingHorizontal: wp(2)
  },
  incomeDetailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: hp(1),
  },
  detailText: {
    ...TEXT_STYLE.textRegular
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
  btnStyle: {
    marginTop: hp(4)
  },
})