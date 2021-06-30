import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {getStyles} from '../styles/MainStyle'

export default function About(){
    return(
        <View style={getStyles.container}>
            <Text style={getStyles.heading}>About</Text>
        </View>
    );
};

const styles= StyleSheet.create({
    container:{
        flex:1,
        padding:24
    
    },
});