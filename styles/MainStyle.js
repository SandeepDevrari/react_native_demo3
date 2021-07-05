import {StyleSheet} from 'react-native'
import * as Font from 'expo-font';


export const getStyles=StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#ffffff',
      padding:10,
    },
    heading:{
        fontFamily:'nunito-light'
    },
    fieldInput:{
      padding:10,
      borderRadius:6,
      borderColor:'#cacaca',
      borderWidth:1,
      marginVertical:10
    },
    errorText:{
      fontSize: 12,
        fontFamily: 'nunito-black',
        color: '#400040',
        textAlign: 'left'
    },
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

export const getRatings = {
  ratings:{
    '1':require('../assets/rating-1.png'),
    '2':require('../assets/rating-2.png'),
    '3':require('../assets/rating-3.png'),
    '4':require('../assets/rating-4.png'),
    '5':require('../assets/rating-5.png')
  }
};
  
