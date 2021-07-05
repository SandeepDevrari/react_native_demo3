import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ImageBackground, Modal } from 'react-native';
import { getStyles } from '../styles/MainStyle'
import Card from '../components/card';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './forms/reviewForm';

export default function Home({ navigation }) {

    const [reviewModalVisiblity, setReviewModalVisiblity] = useState(false)

    const [reviewData, setReview] = useState([
        { title: 'The Meg', rating: 3, body: 'The first horror movie I ever saw was “Jaws”–an all-time classic filmed in 1975 by Steven Spielberg. My parents did not let me watch “Alien”.', id: '1' },
        { title: 'Neon Demon', rating: 4, body: 'I love beautiful movies. If a film is eye-candy with carefully designed decorations, masterful camerawork, lighting, and architectural frames, I can forgive anything else in', id: '2' },
        { title: 'Isle of Dogs', rating: 3, body: 'I do not like cartoons. When I was a child, I preferred reading and drawing to watching television, cartoons included–which makes the fact that I', id: '3' },
        { title: 'The Hunger Games', rating: 2, body: 'Dystopia is not a new genre in literature and cinematography. Dystopian worlds have been described in the novels of such writers as Herbert Wells', id: '4' }
    ])

    const addNewReview = (review)=>{
        review.id= Math.random().toString();
        setReview((currentReivews)=>{
            return (
                [review, ...currentReivews]
            );
        })

        setReviewModalVisiblity(false)
    }

    return (
        <ImageBackground source={require('../assets/game_bg.png')} style={homeStyles.layout}>

            <Modal visible={reviewModalVisiblity} animationType={'slide'}>
                
                <ImageBackground source={require('../assets/game_bg.png')} style={homeStyles.layout}>
                    <MaterialIcons name={'close'} onPress={() => {
                        setReviewModalVisiblity(false)
                    }} size={24} style={{...homeStyles.reviewModalOpenButton, ...homeStyles.reviewModalCloseButton}}/>
                    <ReviewForm  addNewReviewHandler={addNewReview}/>
                </ImageBackground>
            </Modal>
            <MaterialIcons name={'add'} onPress={() => {
                setReviewModalVisiblity(true)
            }} size={24} style={homeStyles.reviewModalOpenButton} />
            <FlatList
                data={reviewData}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('ReviewDetails', item)
                        }}>
                        <Card>
                            <View style={homeStyles.reviewItem}>
                                <Text style={homeStyles.reviewItemContent}>{item.title}</Text>
                            </View>
                        </Card>
                    </TouchableOpacity>
                )} />
        </ImageBackground>
    );
};

const homeStyles = StyleSheet.create({
    layout: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 10
    },
    reviewItem: {
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    reviewItemContent: {
        fontSize: 16,
        fontFamily: 'nunito-black',
        color: '#400040',
        textAlign: 'left'
    },
    reviewModalOpenButton:{
        borderWidth:1,
        borderColor:'#f2f2f2',
        padding:10,
        borderRadius:10,
        alignSelf:'center'
    },
    reviewModalCloseButton:{
        marginTop:20
    },
})