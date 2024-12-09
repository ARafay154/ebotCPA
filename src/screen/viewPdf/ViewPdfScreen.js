import React, { useState } from 'react';
import { StyleSheet, View, TextInput, ActivityIndicator, Alert } from 'react-native';
import Pdf from 'react-native-pdf';
import { AppHeader, BackBtn, Label } from '../../components';
import { COLOR, commonStyles, hp, TEXT_STYLE, wp } from '../../enums/StyleGuide';
import { showFlash } from '../../utils/MyUtils';
import { KEYBOARD_TYPE } from '../../enums/AppEnums';

const ViewPdfScreen = (props) => {
  const { doc } = props?.route?.params;
  const [loading, setLoading] = useState(false);
 

  return (
    <View style={styles.container}>
      <AppHeader
        leftComp={<BackBtn />}
        title={doc?.name || 'PDF Viewer'}
        style={{ paddingHorizontal: wp(4) }}
      />


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
    </View>
  );
};

export default ViewPdfScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white,
  },
 
  pdf: {
    flex: 1,
    backgroundColor: COLOR.white,
  },
  
});