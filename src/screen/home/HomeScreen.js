import { StyleSheet, View } from 'react-native'
import React from 'react'
import { AppHeader, Label, Logo, Photo, Pressable } from '../../components'
import CustomIcon from '../../components/reuseables/customIcon'
import { COLOR, TEXT_STYLE, hp, wp } from '../../enums/StyleGuide'
import { En } from '../../locales/En'
import { IMAGES } from '../../assets/images'
import { SERVICES } from '../../assets/data/DummyData'

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <AppHeader
        centerComp={<Logo />}
        // rightComp={<CustomIcon family='FontAwesome5' name={"user-circle"} />}
        style={{ paddingHorizontal: wp(2) }}
      />

      <Photo src={IMAGES.HomeBanner} style={styles.imageStyle} />

      <Label style={styles.serviceOfferText}>{En.serviceWeOffer}</Label>
      <View style={{ paddingHorizontal: wp(2) }}>
        {SERVICES.map((item, index) => (
          <Pressable
            style={styles.serviceCards}
            key={index}
            animation="pulse" // Adding fadeInUp animation here
            onPress={() => navigation.navigate(item?.route, { title: item?.text })}
          >
            <Label style={styles.cardText}>{item?.text}</Label>
            <CustomIcon name={"chevron-forward"} family='Ionicons' size={hp(2.5)} color={COLOR.white} />
          </Pressable>
        ))}
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white,
    paddingTop: hp(2),
  },
  imageStyle: {
    height: hp(20),
    marginVertical:hp(2),
  },
  serviceOfferText: {
    alignSelf: 'center',
    ...TEXT_STYLE.smallTitleBold,
    borderBottomWidth: 1,
    borderColor: COLOR.darkBlue,
    marginBottom: hp(2),
  },
  serviceCards: {
    backgroundColor: COLOR.darkBlue,
    marginVertical: hp(1),
    paddingVertical: hp(2),
    paddingHorizontal: wp(4),
    borderRadius: hp(1.5),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardText: {
    color: COLOR.white,
    ...TEXT_STYLE.textSemiBold,
  }
});