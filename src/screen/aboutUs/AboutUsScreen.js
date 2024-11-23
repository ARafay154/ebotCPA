import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { AppHeader, BackBtn, CustomIcon, Label, Scrollable } from '../../components';
import { COLOR, hp, TEXT_STYLE, wp } from '../../enums/StyleGuide';

const profiles = [
  { id: 1, name: 'John Doe', position: 'CEO' },
  { id: 2, name: 'Jane Smith', position: 'CFO' },
  { id: 3, name: 'Michael Johnson', position: 'COO' }
];

const AboutUsScreen = () => {
  return (
    <View style={styles.container}>
      <AppHeader leftComp={<BackBtn />} />
      <Scrollable containerStyle={{ paddingHorizontal: wp(2), flexGrow: 1 }}>
        {/* About Us Section */}
        <Label style={styles.aboutHeading}>About ebotCPA</Label>
        <Label style={[styles.text, { textAlign: 'justify' }]}>
          At ebotCPA, we are passionate about empowering businesses to succeed through expert financial guidance, innovative solutions, and personalized support. Our team of seasoned accounting professionals, led by [Your Name], combines decades of experience with cutting-edge expertise to deliver comprehensive accounting, tax, and consulting services.
        </Label>

        {/* Our Story Section */}
        <Label style={styles.subHeadings}>Our Story</Label>
        <Label style={[styles.text, { textAlign: 'justify' }]}>
          Founded on the principles of integrity, expertise, and personalized service, ebotCPA has grown into a trusted advisor for forward-thinking businesses. Our journey began with a simple yet bold vision: to provide innovative financial solutions that drive growth, profitability, and success.
        </Label>

        {/* Our Expertise Section */}
        <Label style={styles.subHeadings}>Our Expertise</Label>
        <View style={styles.bullets}>
          <Label style={styles.text}>{"\u2022"} Bookkeeping and accounting</Label>
          <Label style={styles.text}>{"\u2022"} Fractional CFO services</Label>
          <Label style={styles.text}>{"\u2022"} Tax compliance, planning, and resolution</Label>
          <Label style={styles.text}>{"\u2022"} SAP S/4HANA Finance implementation, support, and consulting</Label>
        </View>

        {/* Why Choose Us Section */}
        <Label style={styles.subHeadings}>Why Choose ebotCPA?</Label>
        <View style={styles.bullets}>
          <Label style={styles.text}>{"\u2022"} Personalized attention from experienced professionals</Label>
          <Label style={styles.text}>{"\u2022"} Cutting-edge technology solutions</Label>
          <Label style={styles.text}>{"\u2022"} Proactive guidance and strategic advice</Label>
          <Label style={styles.text}>{"\u2022"} Commitment to integrity and transparency</Label>
        </View>

        {/* Meet Our Team Section */}
        <Label style={styles.subHeadings}>Meet Our Team</Label>
        <View style={styles.teamContainer}>
          {profiles.map((profile) => (
            <View key={profile.id} style={styles.profileCard}>
              <CustomIcon family='FontAwesome5' name="user-circle" size={hp(5)} />
              <Label style={styles.profileName}>{profile.name}</Label>
              <Label style={styles.profilePosition}>{profile.position}</Label>
            </View>
          ))}
        </View>
      </Scrollable>
    </View>
  );
};

export default AboutUsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "2%",
    backgroundColor:COLOR.white,
  },
  aboutHeading: {
    ...TEXT_STYLE.smallTitleBold,
    textAlign: 'center',
    marginBottom: hp(1)
  },
  text: {
    ...TEXT_STYLE.textMedium,
    textAlign: 'left',
  },
  subHeadings: {
    ...TEXT_STYLE.textBold,
    marginTop: hp(2),
  },
  bullets: {
    marginLeft: wp(3),
    marginBottom: hp(1),
  },
  teamContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginVertical: hp(2),
  },
  profileCard: {
    width: wp(28),
    height: hp(18),
    alignItems: 'center',
    backgroundColor: COLOR.white,
    paddingVertical: hp(2),
    borderRadius: 10,
    marginBottom: hp(2),
    elevation: 3,
    shadowColor: COLOR.darkBlue,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  profileName: {
    ...TEXT_STYLE.smallTextBold,
    marginTop: hp(1),
    textAlign: 'center',
    numberOfLines: 1,
    ellipsizeMode: 'tail',
    width: '80%', // To control text width and prevent overflow
  },
  profilePosition: {
    ...TEXT_STYLE.smallTextSemiBold,
    textAlign: 'center',
    marginTop: hp(0.5),
    numberOfLines: 1,
    ellipsizeMode: 'tail',
  }
});