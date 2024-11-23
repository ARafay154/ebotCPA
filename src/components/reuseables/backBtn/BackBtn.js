import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import CustomIcon from '../customIcon'
import { COLOR, hp } from '../../../enums/StyleGuide'
import { useNavigation } from '@react-navigation/native'
import Pressable from '../pressable'

const BackBtn = () => {
    const navigation = useNavigation(); // no destructuring here
    return (
        <Pressable onPress={() => navigation.goBack()}>
            <CustomIcon name={"chevron-back-outline"} family='Ionicons' color={COLOR.darkBlue} size={hp(4.5)} />
        </Pressable>
    );
};

export default memo(BackBtn)

const styles = StyleSheet.create({})