import { Platform } from 'react-native'
import Toast from 'react-native-toast-message';
import { COLOR, FONT, hp, wp } from '../enums/StyleGuide'
import moment from 'moment';


export const isIOS = () => {
    return Platform.OS == 'ios'
}



export const showFlash = (message, type = 'success', message2, icon = "none", floating = false) => {
    Toast.show({
      type: type, // 'success', 'error', or 'info' are predefined
      text1: message,
      position: floating ? 'bottom' : 'top',
      visibilityTime: 4000,
      autoHide: true,
      topOffset: hp(5),
      bottomOffset: hp(5),
      style: {
        backgroundColor: COLOR.white,
        borderRadius: wp(1),
        minHeight: hp(4),
        marginHorizontal: 20,
      },
      textStyle: {
        fontFamily: FONT.regular,
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '700',
        paddingVertical: 20,
        color: COLOR.black
      },
    });
  };
  

  
export const textLimit = (text, limit) => {
    if (text?.length >= limit) {
        return `${text?.slice(0, limit)}...`
    } else {
        return text
    }
  }

  
export const isStrongPassword = (text) => {
    // password should be 6 digits and have one capital, one special char and a number
    const strongPasswordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>])[A-Za-z\d!@#$%^&*()\-_=+{};:,<.>.]{6,}$/
    return strongPasswordRegex?.test(text)
  }
  
  export const isEmailValid = (text) => {
    const reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    return reg?.test(text)
  }
  
  export const formatDate = (timestamp) => {
    // Assuming timestamp is in seconds or milliseconds from Firebase
    const formattedDate = moment(timestamp).format('MMM DD, YYYY');
    return formattedDate;
};

export function generateRandomCode(length = 14) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  return result;
}