import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import {NavigationContainer} from '@react-navigation/native';

import Home from '../screens/Home';
import ReviewDetail from '../screens/ReviewDetail';
import HeaderComponent from './headerComponent';

const {Navigator, Screen}= createStackNavigator()

export const DashBoardNavigator =({navigation})=>(
    <Navigator headerMode='float'
        initialRouteName='Home'
        screenOptions={{
            headerStyle:{
                backgroundColor:'#6794d8'
            },
            headerTintColor:'#0080c0'
        }}>
        <Screen name='Home'
         component={Home}
         options={{
             headerTitle:()=><HeaderComponent navigation={navigation} title='GameZone'/>
         }}/>
        <Screen name='ReviewDetails' 
        component={ReviewDetail}
        options={{
            title:'Review Details'
        }}/>
    </Navigator>
);

// export const AppNavigator=()=>(
//     <NavigationContainer>
//         <DashBoardNavigator />
//     </NavigationContainer>
// );