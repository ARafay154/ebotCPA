import React, { useState } from 'react';
import { StyleSheet, View, TextInput, ActivityIndicator, Alert } from 'react-native';
import Pdf from 'react-native-pdf';
import { AppHeader, BackBtn, Label } from '../../components';
import { COLOR, commonStyles, hp, TEXT_STYLE, wp } from '../../enums/StyleGuide';
import { showFlash } from '../../utils/MyUtils';
import { KEYBOARD_TYPE } from '../../enums/AppEnums';

const ViewPdfScreen = (props) => {
  const { doc, docSecure } = props?.route?.params;
  const [loading, setLoading] = useState(false);
  const [isCodeValid, setIsCodeValid] = useState(false); // Track if code is verified
  const [secureCode, setSecureCode] = useState(''); // User-entered secure code

  const handleVerifyCode = () => {
    if (secureCode === docSecure) {
      setIsCodeValid(true);
    } else {
      showFlash('Wrong Code, The secure code you entered is incorrect.');
      setSecureCode(''); // Clear input
    }
  };

  return (
    <View style={styles.container}>
      <AppHeader
        leftComp={<BackBtn />}
        title={doc?.name || 'PDF Viewer'}
        style={{ paddingHorizontal: wp(4) }}
      />

      {!isCodeValid ? (
        <View style={styles.inputContainer}>
          <Label style={styles.textStyle}>Enter sercure code to view document</Label>
          <TextInput
            style={styles.input}
            placeholderTextColor={COLOR.darkBlue}
            placeholder="Enter Secure Code"
            secureTextEntry={true}
            value={secureCode}
            keyboardType={KEYBOARD_TYPE.DECIMAL_PAD}
            onChangeText={setSecureCode}
            onSubmitEditing={handleVerifyCode} // Trigger verification on submit
          />
        </View>
      ) : (
        <>
          {loading && (
            <ActivityIndicator
              style={{ flex: 1, ...commonStyles.center }}
              color={COLOR.darkBlue}
              size="large"
            />
          )}

          <Pdf
            source={{ uri: doc?.url, cache: true }}
            trustAllCerts={false}
            onLoadProgress={() => setLoading(true)}
            onLoadComplete={() => setLoading(false)}
            onError={(error) => {
              console.error('PDF load error:', error);
            }}
            style={styles.pdf}
          />
        </>
      )}
    </View>
  );
};

export default ViewPdfScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white,
  },
  inputContainer: {
    marginTop:hp(6),
    flex: 1,
    alignItems: 'center',
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: COLOR.darkBlue,
    borderRadius: 5,
    backgroundColor: COLOR.white,
    fontSize: 16,
    color:COLOR.darkBlue
  },
  pdf: {
    flex: 1,
    backgroundColor: COLOR.white,
  },
  textStyle:{
    ...TEXT_STYLE.textMedium,
    marginBottom:hp(2)
  }
});