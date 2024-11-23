import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import React, { useState, useRef } from 'react';
import { Label, Pressable } from '../../components'; // Assuming you already have these components
import { COLOR, hp, TEXT_STYLE, wp } from '../../enums/StyleGuide';
import { SCREENS } from '../../enums/AppEnums';

const { width, height } = Dimensions.get('window');

// Data for the onboarding slides
const onboardingData = [
  {
    title: "Welcome to ebotCPA",
    description: "At ebotCPA, we are passionate about empowering businesses to succeed through expert financial guidance, innovative solutions, and personalized support.",
  },
  {
    title: "Getting Started",
    description: "Set up your profile, link your accounts, and get customized financial reports to start your journey.",
  },
  {
    title: "What You Can Expect",
    description: "Personalized financial guidance, transparent support, and access to cutting-edge financial tools.",
  },
];

const OnboardingScreen1 = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef(null); // Ref for ScrollView

  // Handle swipe change (next or previous)
  const handleSwipe = (direction) => {
    let newIndex;
    if (direction === 'next') {
      newIndex = currentIndex + 1;
      if (newIndex === onboardingData.length) {
        navigation.replace(SCREENS.LOGIN); // Navigate to the login screen if on last index
        return;
      }
    } else {
      newIndex = (currentIndex - 1 + onboardingData.length) % onboardingData.length;
    }

    setCurrentIndex(newIndex);

    // Scroll to the new index
    scrollViewRef.current?.scrollTo({
      x: newIndex * width, // Scroll to the new slide position
      animated: true,
    });
  };

  return (
    <View style={styles.container}>
      {/* Carousel ScrollView */}
      <View style={styles.carouselContainer}>
        <ScrollView
          ref={scrollViewRef} // Add ref to ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          contentContainerStyle={styles.scrollContent}
          onScroll={(e) => {
            const contentOffsetX = e.nativeEvent.contentOffset.x;
            const index = Math.floor(contentOffsetX / width);
            setCurrentIndex(index);
          }}
        >
          {onboardingData.map((item, index) => (
            <View style={styles.slide} key={index}>
              <Label style={styles.aboutHeading} animation="fadeInUp">
                {item.title}
              </Label>
              <Label style={[styles.text]} animation="fadeInUp">
                {item.description}
              </Label>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Pagination and Navigation */}
      <View style={styles.paginationAndNavigation}>
        {/* Pagination Indicator */}
        <View style={styles.pagination}>
          {onboardingData.map((_, index) => (
            <View
              key={index}
              style={[
                styles.paginationDot,
                index === currentIndex && styles.activeDot,
              ]}
            />
          ))}
        </View>

        {/* Navigation Buttons */}
        <View style={styles.navigationButtons}>
          <Pressable onPress={() => handleSwipe('prev')} style={styles.actionBtnView} animation="bounceInLeft">
            <Label style={styles.navigationText}>Previous</Label>
          </Pressable>
          <Pressable onPress={() => handleSwipe('next')} style={styles.actionBtnView} animation="bounceInRight">
            <Label style={styles.navigationText}>Next</Label>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default OnboardingScreen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // White color
  },
  carouselContainer: {
    flex: 1, // Take up half the screen
  },
  scrollContent: {
    flexDirection: 'row',
  },
  slide: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.7,
    paddingHorizontal: wp(4),
  },
  aboutHeading: {
    ...TEXT_STYLE.smallTitleBold,
    textAlign: 'center',
    marginBottom: hp(4),
  },
  text: {
    ...TEXT_STYLE.textSemiBold,
    textAlign: 'center',
    lineHeight: hp(3), // Ensures better text readability
    marginBottom: hp(2),
    paddingHorizontal: wp(4),
  },
  paginationAndNavigation: {
    flex: 1, // Take up the other half of the screen
    justifyContent: 'center',
    alignItems: 'center',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: hp(2),
  },
  paginationDot: {
    width: wp(2),
    height: wp(2),
    borderRadius: wp(1),
    backgroundColor: '#D3D3D3', // Light gray color for inactive dots
    marginHorizontal: wp(0.5),
  },
  activeDot: {
    backgroundColor: COLOR.darkBlue, // Tomato color for active dot
  },
  navigationButtons: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
    marginTop: hp(2), // Adjust button spacing
  },
  navigationText: {
    ...TEXT_STYLE.textBold,
    color: COLOR.white,
  },
  actionBtnView: {
    backgroundColor: COLOR.darkBlue,
    padding: '2%',
    borderRadius: hp(0.75),
  },
});