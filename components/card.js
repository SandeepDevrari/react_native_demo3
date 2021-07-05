import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Card(props){
    return(
        <View style={cardStyles.card}>
            <View style={cardStyles.cardContent}>
                {props.children}
            </View>
        </View>
    );
}

const cardStyles=StyleSheet.create({
    card:{
        backgroundColor:'#fff',
        marginHorizontal:20,
        marginVertical:10,
        borderRadius:6,
        elevation:3,
        shadowOffset:{width:1,height:1},
        shadowColor:'#333',
        shadowOpacity:0.1,
        shadowRadius:2
    },
    cardContent:{
        borderRadius:5
    }
});