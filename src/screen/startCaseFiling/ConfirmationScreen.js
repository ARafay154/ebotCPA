import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { AppHeader, BackBtn, Button, CustomIcon, Label, Pressable } from '../../components'
import { COLOR, commonStyles, hp, TEXT_STYLE, wp } from '../../enums/StyleGuide'
import { useSelector } from 'react-redux'
import { SCREENS } from '../../enums/AppEnums'

const ConfirmationScreen = ({navigation}) => {
    const registration = useSelector(({ appReducer }) => appReducer.registration);
    const [checked, setChecked] = useState(false)

    console.log("registration", registration)
    return (
        <View style={styles.container}>
            <AppHeader
                leftComp={<BackBtn />}
                title={"Confirmation"}
                style={{ marginBottom: hp(2) }}
            />

            <View style={{ paddingHorizontal: wp(2) }}>
                <View style={commonStyles.horizontalView_m1}>
                    <Label style={styles.headingText} >Service Name : </Label>
                    <Label style={styles.headingValue}>{registration?.service?.text}</Label>
                </View>

                <View style={commonStyles.horizontalView_m1}>
                    <Label style={styles.headingText} >Price : </Label>
                    <Label style={styles.headingValue}>$ {registration?.service?.price} {registration?.service?.subText}</Label>
                </View>

                <Pressable style={{ marginVertical: hp(1) }}><Label style={styles.engagementletterText}>Open Engagement Letter</Label></Pressable>

                <Pressable style={styles.engagementView} onPress={() => setChecked(prev => !prev)}>
                    <CustomIcon name={checked ? "checksquare" : "checksquareo"} family='AntDesign' size={hp(2)} />
                    <Label style={styles.acceptengagement}>I have read and agree to the terms outlined in the Engagement Letter.</Label>
                </Pressable>

                {
                    checked && <Button
                        text={"Confirm & contiune to Payment"}
                        style={{ marginVertical: hp(4) }}
                        onPress={()=>navigation.navigate(SCREENS.PAYMENT)}
                    />
                }


            </View>



        </View>
    )
}

export default ConfirmationScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: "2%",
        backgroundColor: COLOR.white,
    },
    headingText: {
        ...TEXT_STYLE.textSemiBold,

    },
    headingValue: {
        ...TEXT_STYLE.textBold,
        paddingHorizontal: wp(2)
    },
    engagementView: {
        flexDirection: 'row',
        marginVertical: hp(1),

    },
    acceptengagement: {
        paddingHorizontal: wp(2)
    },
    engagementletterText: {
        ...TEXT_STYLE.smallTextSemiBold,
        textDecorationLine: 'underline',
    }

})