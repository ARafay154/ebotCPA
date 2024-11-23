import { StyleSheet, View, BackHandler } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Button, Label } from '../../components';
import { En } from '../../locales/En';
import { COLOR, hp, TEXT_STYLE, wp } from '../../enums/StyleGuide';
import { SCREENS } from '../../enums/AppEnums';


const OnBoardingScreen2 = ({ navigation }) => {
 

  return (
    <View style={styles.container}>
      <Label animation="zoomIn" duration={1200} style={styles.heading}>
        {En.whyChoseEbot}
      </Label>

      {[En.whytChose1, En.whytChose2, En.whytChose3, En.whytChose4].map((text, index) => (
        <View key={index} style={styles.bulletContainer}>
          <Label 
            animation="fadeInUp" 
            style={styles.bulletPoint}
          >
            {'\u2022'}
          </Label>
          <Label 
            animation="fadeInUp" 
            style={styles.bulletText}
          >
            {text}
          </Label>
        </View>
      ))}

      <Button
        style={styles.btnStyle}
        text={En.next}
        onPress={() => navigation.navigate(SCREENS.ONBOARD_3)}
      />
    </View>
  );
};

export default OnBoardingScreen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  heading: {
    ...TEXT_STYLE.title,
    textAlign: 'center',
    marginBottom: hp(4),
  },
  bulletContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: hp(1),
    paddingHorizontal: wp(2),
  },
  bulletPoint: {
    color: COLOR.darkBlue,
    fontSize: 20,
    marginRight: wp(4),
  },
  bulletText: {
    ...TEXT_STYLE.bigTextMedium,
    textAlign: 'justify',
    flex: 1,
  },
  btnStyle: {
    width: "80%",
    marginTop: hp(4),
  },
});