import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppHeader, Label } from '../../components'
import { COLOR, hp, TEXT_STYLE } from '../../enums/StyleGuide'

const SearchScreen = () => {
  return (
    <View style={styles.container}>
     <AppHeader 
     title={"Tutorials"}
     />
     <Label style={styles.developingText}>Coming Soon!</Label>
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:"2%",
    backgroundColor:COLOR.white
  },
  developingText:{
    textAlign:'center',
    marginTop:hp(8),
    ...TEXT_STYLE.textSemiBold
  }
})