import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { AppHeader, BackBtn, Button, Label } from '../../components'
import { COLOR, commonStyles, hp, TEXT_STYLE } from '../../enums/StyleGuide'
import { useDispatch, useSelector } from 'react-redux'
import { Calendar } from 'react-native-calendars'
import { setRegistration } from '../../redux/action/Action'
import { SCREENS } from '../../enums/AppEnums'

const CalenderScreen = ({navigation}) => {
    const registration = useSelector(({ appReducer }) => appReducer.registration);
    const dispatch = useDispatch()
    const [selected, setSelected] = useState('')

    const handleAddDate =  () => {
        try {
            const updateState = {
                ...registration,
                appointment_date: selected,
            }
            dispatch(setRegistration(updateState));
            navigation.navigate(SCREENS.DOCUMENTS_UPLOAD)
            setSelected('')
        } catch (error) {
            console.log("error while adding",error)
        }
    }


    return (
        <View style={styles.container}>
            <AppHeader
                leftComp={<BackBtn />}
                title={"Chose Appointment Date"}
                style={{ marginBottom: hp(2) }}
            />

            <View style={[commonStyles.horizontalView, commonStyles.center, { marginTop: hp(1), marginBottom: hp(2), }]}>
                <Label style={styles.dateHeading}>Selected Date : </Label>
                <Label style={styles.headingValue}>{selected}</Label>
            </View>


            <Calendar
                // hideArrows={true}
                // hideExtraDays={true}
                onDayPress={day => setSelected(day.dateString)}
                markedDates={{
                    [selected]: { selected: true, disableTouchEvent: true, }
                }}
                style={[styles.calenderView]}
                theme={{
                    selectedDayBackgroundColor: COLOR.darkBlue,
                    selectedDayTextColor: COLOR.white,
                }}
            />

            {
                selected &&

                <Button
                    style={{ marginVertical: hp(4) }}
                    text={"Upload Documents"}
                    onPress={() => handleAddDate()}
                />
            }
        </View>
    )
}

export default CalenderScreen

const styles = StyleSheet.create({
    calenderView: {
        borderWidth: 1,
        overflow: 'hidden',
        borderRadius: hp(2),
        borderColor: COLOR.black,
        backgroundColor: COLOR.white,
    },
    container: {
        flex: 1,
        padding: "4%",
        backgroundColor: COLOR.white,
    },
    dateHeading: {
        ...TEXT_STYLE.textSemiBold
    },
    headingValue: {
        ...TEXT_STYLE.bigTextSemiBold
    }
})