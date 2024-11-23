import { StyleSheet, View, BackHandler } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Button, Label } from '../../components';
import { En } from '../../locales/En';
import { COLOR, hp, TEXT_STYLE } from '../../enums/StyleGuide';
import { SCREENS } from '../../enums/AppEnums';
import { useFocusEffect } from '@react-navigation/native';

const OnBoardingScreen3 = ({ navigation }) => {
 

  return (
    <View style={styles.container}>
      <Label animation="zoomIn" style={styles.heading}>
        {En.taxProblem}
      </Label>

      <Button
        style={styles.btnStyle}
        text={En.letsContect}
        onPress={() => navigation.navigate(SCREENS.LOGIN)}
      />
    </View>
  );
};

export default OnBoardingScreen3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  heading: {
    ...TEXT_STYLE.smallTitleMedium,
    textAlign: 'center',
    lineHeight: hp(4.25),
    marginBottom: hp(4),
  },
  btnStyle: {
    width: "80%",
    marginTop: hp(4),
  },
});