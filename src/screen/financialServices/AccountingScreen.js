import { StyleSheet, Text, View, Animated, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { AppHeader, BackBtn, CustomIcon, Label, Pressable, Scrollable } from '../../components'
import { COLOR, hp, TEXT_STYLE, wp } from '../../enums/StyleGuide'
import { ACCOUNTING,  } from '../../assets/data/DummyData'
import * as Animatable from 'react-native-animatable';

const AnimatableView = Animatable.createAnimatableComponent(View);



const AccountingScreen = (props) => {
  const { title } = props?.route?.params

  // State to track the opened section
  const [openedSection, setOpenedSection] = useState(null)

  const handlePress = (index) => {
    // Toggle the section (if already open, close it; otherwise, open it)
    setOpenedSection(openedSection === index ? null : index)
  }

  return (
    <View style={styles.container}>
      <AppHeader leftComp={<BackBtn />} title={title} />
      <Scrollable containerStyle={styles.scrollView}>
        {ACCOUNTING.map((item, index) => (
          <AnimatableView animation="pulse" key={index}>
            <Pressable style={styles.card} onPress={() => handlePress(index)}>
              <Label style={styles.cardTitle}>{item.title}</Label>
              <CustomIcon family='MaterialIcons'  name={openedSection === index ? "arrow-drop-up" : "arrow-drop-down"} 
              size={hp(5)} />
            </Pressable>

            {/* Dropdown Content: Display when the section is open */}
            {openedSection === index && (
              <View style={styles.dropdownContent}>
                <Label style={styles.subtitle}>{item.subtitle1}</Label>
                <Label>{item.subtitleText1}</Label>
                <Label style={styles.subtitle}>{item.subtitle2}</Label>
                <Label>{item.subtitleText2}</Label>
              </View>
            )}
          </AnimatableView>
        ))}
      </Scrollable>
    </View>
  )
}

export default AccountingScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "2%",
    backgroundColor:COLOR.white,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
    paddingVertical: 10,
    backgroundColor: COLOR.white,
    marginVertical: hp(1.5),
    borderRadius: hp(1),
    shadowColor:COLOR.darkBlue,               // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow position (iOS)
    shadowOpacity: 0.8,                // Shadow opacity (iOS)
    shadowRadius: 4,                  // Shadow blur radius (iOS)
    elevation: 3,   
  },
  dropdownContent: {
    paddingHorizontal: wp(4),
    paddingVertical: 10,
    backgroundColor: COLOR.white,
    borderRadius:hp(1)
  },
  subtitle: {
    ...TEXT_STYLE.textBold,
    marginVertical: hp(1),
  },
  cardTitle: {
    ...TEXT_STYLE.bigTextSemiBold,
    width:"85%"
  },
  scrollView: {
    flexGrow: 1,
    marginTop: hp(2),
    paddingHorizontal:wp(2),
    paddingBottom:hp(4)

  }
})