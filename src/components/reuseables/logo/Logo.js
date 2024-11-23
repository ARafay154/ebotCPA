import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import Label from '../label'
import { En } from '../../../locales/En'
import { TEXT_STYLE } from '../../../enums/StyleGuide'

const Logo = () => {
    return (
        <Label
            style={styles.logo}
            animation={'zoomIn'}
        >
            {En.ebotcpa}
        </Label>
    )
}

export default memo(Logo)

const styles = StyleSheet.create({
    logo: {
        textAlign: 'center',
        ...TEXT_STYLE.title,
        letterSpacing:4
    }
})