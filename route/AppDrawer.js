import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { DashBoardNavigator } from './DashBoardNavigator';
import { AboutNavigator } from './AboutNavigator';


const Drawer = createDrawerNavigator();

export const AppDrawer=()=>{
    return(
        <NavigationContainer>
            <Drawer.Navigator initialRouteName='Dashboard'>
                <Drawer.Screen name='Dashboard' component={DashBoardNavigator}/>
                <Drawer.Screen name='About' component={AboutNavigator}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}