import React from 'react';
import { View, StyleSheet, Text, Image ,ImageBackground} from 'react-native';
import {getStyles, getRatings} from '../styles/MainStyle'
import Card from '../components/card';

export default function ReviewDetail({route,navigation}){
    
    return(
        <ImageBackground source={require('../assets/game_bg.png') } style={getStyles.container}>
            <Card >
            <View style={reviewDetailStyles.layout}>
                <Text style={reviewDetailStyles.titleText}>{ route.params.title}</Text>
                <Text style={reviewDetailStyles.detailsText}>{ route.params.body}</Text>
                <View style={reviewDetailStyles.rating}>
                    <Text style={reviewDetailStyles.titleText}>GameZone Rating: </Text>
                    <Image source={getRatings.ratings[route.params.rating]}/>
                </View>
            </View>
        </Card>
        </ImageBackground>
    );
};

const reviewDetailStyles= StyleSheet.create({
    layout:{
        backgroundColor:'#b0d9d8',
        paddingVertical:8
    },
    titleText:{
        fontSize:18,
        fontFamily:'nunito-black',
        color:'#400040',
        textAlign:'center',
        marginHorizontal:6
    },
    detailsText:{
        fontSize:16,
        fontFamily:'nunito-regular',
        color:'#400040',
        textAlign:'left',
        paddingHorizontal:20,
        paddingVertical:6,
        marginVertical:6
    },
    rating:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:10,
        borderTopColor:'#cee4f0',
        borderTopWidth:1,
        paddingVertical:10
    },

});