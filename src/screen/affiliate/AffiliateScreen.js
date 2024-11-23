import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { AppHeader, BackBtn, CustomIcon, Label, Scrollable } from '../../components';
import LinearGradient from 'react-native-linear-gradient';
import { COLOR, commonStyles, hp, TEXT_STYLE, wp } from '../../enums/StyleGuide';

const AffiliateScreen = () => {
    return (
        <View style={styles.container}>
            <AppHeader
                leftComp={<BackBtn />}
                title={"Affiliate Program"}
                style={{ marginBottom: hp(2) }}
            />

            <Scrollable containerStyle={{ flexGrow: 1, paddingHorizontal: wp(2) }} >



                <LinearGradient
                    colors={['#19305c', '#19305c', '#19305c', '#19305c']} // Dark blue with a hint of green at the end
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.gradientContainer}
                >
                    <Label style={styles.heading}>Become a ebotCPA Affiliate</Label>
                    <Label style={styles.subheading}>Earn commissions by promoting the #1 Booking Platform and Financial Services Marketplace</Label>
                    <Label style={styles.description}>
                        ebotCPA is a powerful platform that helps businesses grow and manage their clients. With our affiliate program, you can earn generous commissions by referring new customers to our platform.
                    </Label>
                </LinearGradient>

                <Label style={[styles.heading, { color: COLOR.darkBlue }]} >Why Partner with ebotCPA?</Label>
                <View style={[commonStyles.horizontalView,{paddingHorizontal:wp(2)}]}>
                    <CustomIcon family='Entypo' name={"check"} size={hp(2.5)} />
                    <Label style={{ marginLeft: wp(2),width:"80%" }}>High commission rates</Label>
                </View>
                <View style={[commonStyles.horizontalView,{paddingHorizontal:wp(2)}]}>
                    <CustomIcon family='Entypo' name={"check"} size={hp(2.5)} />
                    <Label style={{ marginLeft: wp(2),width:"80%" }}>Recurring commissions for long-term earnings</Label>
                </View>
                <View style={[commonStyles.horizontalView,{paddingHorizontal:wp(2)}]}>
                    <CustomIcon family='Entypo' name={"check"} size={hp(2.5)} />
                    <Label style={{ marginLeft: wp(2),width:"80%" }}>Proven conversion rates</Label>
                </View>
                <View style={[commonStyles.horizontalView,{paddingHorizontal:wp(2)}]}>
                    <CustomIcon family='Entypo' name={"check"} size={hp(2.5)} />
                    <Label style={{ marginLeft: wp(2),width:"80%" }}>Dedicated affiliate support</Label>
                </View>
                <View style={[commonStyles.horizontalView,{paddingHorizontal:wp(2)}]}>
                    <CustomIcon family='Entypo' name={"check"} size={hp(2.5)} />
                    <Label style={{ marginLeft: wp(2),width:"80%" }}>Wide range of marketing materials</Label>
                </View>

                <Label style={[styles.heading, { color: COLOR.darkBlue,marginTop:hp(2) }]} >How it works</Label>
               <Label style={{ marginLeft: wp(2) }}>Simply refer other businesses to join the ebotCPA and you get paid.</Label>

               <View style={[commonStyles.horizontalView,{paddingHorizontal:wp(2)}]}>
                    <CustomIcon family='Entypo' name={"check"} size={hp(2.5)} />
                    <Label style={{ marginLeft: wp(2),width:"80%" }}>25% recurring commission on every new signup</Label>
                </View>
                <View style={[commonStyles.horizontalView,{paddingHorizontal:wp(2)}]}>
                    <CustomIcon family='Entypo' name={"check"} size={hp(2.5)} />
                    <Label style={{ marginLeft: wp(2),width:"80%" }}>90 days</Label>
                </View>
                <View style={[commonStyles.horizontalView,{paddingHorizontal:wp(2)}]}>
                    <CustomIcon family='Entypo' name={"check"} size={hp(2.5)} />
                    <Label style={{ marginLeft: wp(2),width:"80%" }}>We provide all of the marketing 30 days after registration</Label>
                </View>










            </Scrollable>
        </View>
    );
};

export default AffiliateScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: '2%',
    },
    gradientContainer: {
        padding: 16,
        borderRadius: hp(2),
        marginBottom: hp(2)
    },
    heading: {
        ...TEXT_STYLE.bigTextBold,
        color: "#1f7d5b"
    },
    subheading: {
        ...TEXT_STYLE.bigTextBold,
        color: COLOR.white,
        lineHeight: hp(3.85)
    },
    description: {
        color: COLOR.white,
        textAlign: 'justify',
        marginVertical: hp(1),
        lineHeight: hp(3.6)
    },

});