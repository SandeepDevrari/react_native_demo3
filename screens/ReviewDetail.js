import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {getStyles} from '../styles/MainStyle'

export default function ReviewDetail({route,navigation}){
    
    return(
        <View style={getStyles.container}>
            <View style={reviewDetailStyles.layout}>
                <Text style={reviewDetailStyles.titleText}>{ route.params.title}</Text>
                <Text style={reviewDetailStyles.detailsText}>{ route.params.body}</Text>
                <Text style={reviewDetailStyles.titleText}>{ route.params.rating}</Text>
            </View>
        </View>
    );
};

const reviewDetailStyles= StyleSheet.create({
    layout:{
        backgroundColor:'#b0d9d8',
        padding:10,
        borderColor:'#400000',
        borderStyle:'dotted',
        borderRadius:5,
        borderWidth:2,
    },
    titleText:{
        fontSize:18,
        fontFamily:'nunito-black',
        color:'#400040',
        textAlign:'center',
        paddingHorizontal:20,
        paddingVertical:10,
        marginVertical:6
    },
    detailsText:{
        fontSize:16,
        fontFamily:'nunito-regular',
        color:'#400040',
        textAlign:'left',
        paddingHorizontal:20,
        paddingVertical:6,
        marginVertical:6
    }

});