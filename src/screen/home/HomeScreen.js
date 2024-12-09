import { StyleSheet, View } from 'react-native';
import React from 'react';
import { AppHeader, Label, Logo, Photo, Pressable, Scrollable } from '../../components';
import { COLOR, TEXT_STYLE, hp, wp } from '../../enums/StyleGuide';
import { En } from '../../locales/En';
import { IMAGES } from '../../assets/images';
import { SERVICES, SERVICES_OFFERS } from '../../assets/data/DummyData';
import { SCREENS } from '../../enums/AppEnums';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <AppHeader
        centerComp={<Logo />}
        style={{ paddingHorizontal: wp(2) }}
      />
      <Scrollable>
        <Photo src={IMAGES.HomeBanner} style={styles.imageStyle} />

        <Label style={styles.serviceOfferText}>{En.serviceWeOffer}</Label>

        <Scrollable horizontal containerStyle={styles.servicesOfferMainContainer}>
          {SERVICES_OFFERS.map((item, index) => (
            <Pressable
              key={index}
              style={styles.serviceOfferCard}
              onPress={() =>
                navigation.navigate(SCREENS.START_CASE_FILING, { serviceType: item })
              }
            >
              <Label style={styles.offerServiceName}>{item?.text}</Label>
            </Pressable>
          ))}
        </Scrollable>

        <Label style={styles.serviceOfferText}>Quick Facts</Label>
        <Scrollable horizontal containerStyle={styles.servicesOfferMainContainer}>
          {SERVICES.map((item, index) => (
            <Pressable
              key={index}
              style={styles.serviceOfferCard}
              onPress={() =>
                navigation.navigate(item?.route, { title: item?.text })
              }
            >
              <Label style={styles.cardText}>{item?.text}</Label>
            </Pressable>
          ))}
        </Scrollable>
      </Scrollable>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white,
    paddingTop: hp(2),
  },
  imageStyle: {
    height: hp(20),
    marginVertical: hp(2),
  },
  serviceOfferText: {
    paddingLeft: wp(4),
    ...TEXT_STYLE.smallTitleBold,
  },
  servicesOfferMainContainer: {
    flexGrow: 1,
    flexDirection: 'row',
    paddingLeft: wp(4),
    marginVertical: hp(2),
  },
  serviceOfferCard: {
    width: wp(35),
    height: hp(10),
    borderWidth: 0.5,
    marginRight: wp(2.5),
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: hp(2),
    backgroundColor: COLOR.darkBlue,
    paddingHorizontal: wp(1),
  },
  cardText: {
    color: COLOR.white,
    ...TEXT_STYLE.textSemiBold,
  },
  offerServiceName: {
    textAlign: 'center',
    ...TEXT_STYLE.textBold,
    color: COLOR.white,
  },
});
