import React, {useState} from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import {getStyles} from '../styles/MainStyle'

export default function Home({navigation}){

    const [reviewData, setReview]= useState([
        {title:'The Meg', rating:3, body:'The first horror movie I ever saw was “Jaws”–an all-time classic filmed in 1975 by Steven Spielberg. My parents did not let me watch “Alien”.', id:'1'},
        {title:'Neon Demon', rating:4, body:'I love beautiful movies. If a film is eye-candy with carefully designed decorations, masterful camerawork, lighting, and architectural frames, I can forgive anything else in', id:'2'},
        {title:'Isle of Dogs', rating:3, body:'I do not like cartoons. When I was a child, I preferred reading and drawing to watching television, cartoons included–which makes the fact that I', id:'3'},
        {title:'The Hunger Games', rating:2, body:'Dystopia is not a new genre in literature and cinematography. Dystopian worlds have been described in the novels of such writers as Herbert Wells', id:'4'}
    ])

    const viewHandle=()=>{
        navigation.navigate('ReviewDetails')
    }

    return(
        <View style={HomeStyles.layout}>
            <FlatList
            data={reviewData}
            renderItem={({item})=>(
                <TouchableOpacity
                onPress={()=>{
                    navigation.navigate('ReviewDetails',item)
                }}>
                    <Text style={HomeStyles.reviewItemTitle}>{item.title}</Text>
                </TouchableOpacity>
            )} />
        </View>
    );
};

const HomeStyles = StyleSheet.create({
    layout:{
        flex:1,
        backgroundColor:'#ffffff',
        padding:10
    },
    reviewItemTitle:{
        fontSize:16,
        fontFamily:'nunito-black',
        color:'#400040',
        textAlign:'left',
        paddingHorizontal:20,
        paddingVertical:6,
        borderColor:'#400000',
        borderStyle:'dotted',
        borderRadius:5,
        borderWidth:2,
        marginVertical:6
    }
})