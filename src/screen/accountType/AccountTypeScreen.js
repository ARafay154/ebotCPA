import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { CustomIcon, Label, Pressable } from '../../components';
import { COLOR, commonStyles, hp, TEXT_STYLE, wp } from '../../enums/StyleGuide';

const AccountTypeScreen = () => {
  return (
    <View style={styles.container}>
      <Label style={styles.title}>Select Your Account Type</Label>

      <Pressable style={styles.cardView}>
        <Label style={styles.cardText}>Continue as Client</Label>
        <CustomIcon name={"chevron-forward"} family='Ionicons' size={hp(2.5)} color={COLOR.white} />
      </Pressable>
      <Pressable style={styles.cardView}>
        <Label style={styles.cardText}>Continue as Professional</Label>
        <CustomIcon name={"chevron-forward"} family='Ionicons' size={hp(2.5)} color={COLOR.white} />
      </Pressable>
      <Pressable style={styles.cardView}>
        <Label style={styles.cardText}>Continue as Affiliate</Label>
        <CustomIcon name={"chevron-forward"} family='Ionicons' size={hp(2.5)} color={COLOR.white} />
      </Pressable>

    </View>
  );
};

export default AccountTypeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '2%',
    ...commonStyles.center
  },
  title: {
   ...TEXT_STYLE.title,
    marginBottom: hp(4),
  },
  cardView: {
    width: "80%",
    backgroundColor: COLOR.darkBlue,
    paddingVertical: hp(1.5),
    borderRadius: hp(1),
    paddingHorizontal: wp(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom:hp(1.5)
  },
  cardText: {
    color: COLOR.white,
    ...TEXT_STYLE.textSemiBold
  }
});
