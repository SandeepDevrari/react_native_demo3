import React from 'react';
import { View, StyleSheet, Text,ImageBackground } from 'react-native';
import {getStyles} from '../styles/MainStyle'

export default function About(){
    return(
        <ImageBackground source={require('../assets/game_bg.png') } style={getStyles.container}>
            <Text style={getStyles.heading}>About</Text>
        </ImageBackground>
    );
};

const styles= StyleSheet.create({
    container:{
        flex:1,
        padding:24
    
    },
});