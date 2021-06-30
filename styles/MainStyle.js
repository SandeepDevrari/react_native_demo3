import {StyleSheet} from 'react-native'
import * as Font from 'expo-font';


export const getStyles=StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#ffffff',
      padding:10
    },
    heading:{
        fontFamily:'nunito-light'
    }
})

export const getFonts = ()=>{
    return(
      Font.loadAsync({
        'nunito-light':require('../assets/fonts/Nunito-Light.ttf'),
        'nunito-regular':require('../assets/fonts/Nunito-Regular.ttf'),
        'nunito-bold':require('../assets/fonts/Nunito-Bold.ttf'),
        'nunito-black':require('../assets/fonts/Nunito-Black.ttf')
      })
    );
  }
  
