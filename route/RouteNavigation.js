import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Home from '../screens/Home';
import ReviewDetail from '../screens/ReviewDetail';
import About from '../screens/About';

const {Navigator, Screen}= createStackNavigator()

const DashBoardNavigator =()=>(
    <Navigator headerMode='float'>
        <Screen name='Home' component={Home}/>
        <Screen name='ReviewDetails' component={ReviewDetail}/>
        <Screen name='About' component={About}/>
    </Navigator>
);

export const AppNavigator=()=>(
    <NavigationContainer>
        <DashBoardNavigator />
    </NavigationContainer>
);