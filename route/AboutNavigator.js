import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import About from '../screens/About';
import HeaderComponent from './headerComponent';

const {Navigator, Screen} = createStackNavigator()

export const AboutNavigator=({navigation})=>(
    <Navigator headerMode='float'
    initialRouteName='About'
    screenOptions={{
        headerStyle:{
            backgroundColor:'#6794d8'
        },
        headerTintColor:'#0080c0'
    }}>
        <Screen 
        name='About'
        component={About}
        options={{
            headerTitle:()=><HeaderComponent navigation={navigation} title='About GameZone'/>
        }}/>
    </Navigator>
);