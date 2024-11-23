import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RootNavigation from './src/navigation/RootNavigation'
import { Provider } from 'react-redux'
import store from './src/redux/store/Store'
import { isIOS } from './src/utils/MyUtils'
import { COLOR } from './src/enums/StyleGuide'
import Toast from 'react-native-toast-message'

const App = () => {
  return (
    
      <Provider store={store}>
        {isIOS ?
          <SafeAreaView style={{ backgroundColor: COLOR.darkBlue }}></SafeAreaView>
          :
          null
        }

        <View style={{ flex: 1 }}>
          <StatusBar backgroundColor={COLOR.darkBlue} barStyle={isIOS ? "light-content" : "light-content"} />
          <RootNavigation />
          <Toast />
        </View>
      </Provider>
   
  )
}

export default App

const styles = StyleSheet.create({})