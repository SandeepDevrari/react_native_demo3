import React, {useState} from 'react';
import AppLoading from 'expo-app-loading';
import {getStyles, getFonts} from './styles/MainStyle'
import { AppNavigator } from './route/RouteNavigation';

export default function App() {
  const [isFontLoaded, setFontLoaded] = useState(false)

  if(isFontLoaded){
    return (
      <AppNavigator />
    );
  }else{
    return(
      <AppLoading startAsync={getFonts}
      onError={console.warn}
      onFinish={()=>{
        setFontLoaded(true)
      }}/>
    );
  }
}


