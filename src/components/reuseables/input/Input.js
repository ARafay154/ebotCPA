import { Platform, StyleSheet, TextInput, View } from 'react-native'
import React, { memo } from 'react'
import { COLOR, TEXT_STYLE, hp, wp } from '../../../enums/StyleGuide'
import Label from '../label'
import Pressable from '../pressable'
import CustomIcon from '../customIcon'

const Input = ({
  secureTextEntry,
  inputLabel2,
  inputDisabled,
  style,
  iconName,
  iconSize,
  leftIconName,
  leftIconSize,
  leftIconFamily,
  leftIconPress,
  inputStyle,
  placeholder,
  placeholderTextColor,
  onChange,
  value,
  multiline,
  keyboard,
  inputLabel,
  labelStyle,
  passwordWarnig,
  lines,
  iconFamily,
  iconPress,
  disabled
}) => {
  return (
    <View style={{ marginVertical: hp(1) }}>
      {inputLabel && (
        <Label style={[styles.inputLabelText, labelStyle]}>
          {inputLabel} <Label style={styles.inputLable2Style}>{inputLabel2}</Label>
        </Label>
      )}
      <View style={[styles.inputContainer, style]}>
        {/* Left Icon */}
        {leftIconName && (
          <Pressable disabled={disabled} onPress={leftIconPress} style={styles.leftIconContainer}>
            <CustomIcon name={leftIconName} family={leftIconFamily} size={leftIconSize} />
          </Pressable>
        )}
        
        {/* Text Input */}
        <TextInput
          style={[styles.input, inputStyle]}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor || COLOR.darkBlue}
          value={value}
          onChangeText={onChange}
          keyboardType={keyboard}
          multiline={multiline}
          numberOfLines={lines}
          secureTextEntry={secureTextEntry}
          editable={!inputDisabled}
          selectTextOnFocus={!inputDisabled}
          cursorColor={COLOR.darkBlue}
          
        />
        
        {/* Right Icon */}
        {iconName && (
          <Pressable disabled={disabled} onPress={iconPress} style={styles.iconContainer}>
            <CustomIcon name={iconName} family={iconFamily} size={iconSize} />
          </Pressable>
        )}
      </View>
      
      {passwordWarnig && <Label style={styles.passwordWarningText}>{passwordWarnig}</Label>}
    </View>
  )
}

export default memo(Input)

const styles = StyleSheet.create({
  inputContainer: {
    height: Platform.OS === 'android' ? 'auto' : hp(5),
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: COLOR.darkBlue,
    borderRadius: hp(1),
  },
  input: {
    height: "100%",
    paddingLeft: wp(2), // Adjusted padding for space between left icon and text
    flex: 1,
    color: COLOR.black,
  },
  leftIconContainer: {
    marginLeft: wp(2), // Padding for the left icon
  },
  iconContainer: {
    marginRight: wp(2), // Padding for the right icon
  },
  inputLabelText: {
    ...TEXT_STYLE.textSemiBold,
    color: COLOR.darkBlue,
    marginBottom: hp(0.5),
  },
  passwordWarningText: {
    ...TEXT_STYLE.text,
    color: 'red',
    marginTop: hp(0.5),
  },
  inputLable2Style: {
    color: COLOR.red,
    fontSize: 18,
  },
})