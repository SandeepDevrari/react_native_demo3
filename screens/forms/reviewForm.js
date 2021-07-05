import React from 'react';
import { View, Button, Text, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { getStyles } from '../../styles/MainStyle'
import Card from '../../components/card';
import { Formik } from 'formik';
import * as yup from 'yup';

const validateNewReview = yup.object({
    title: yup.string().required().min(3),
    body: yup.string().required().min(5),
    rating: yup.string().required().test('is-num-1-5', 'rating must be a number from 1 - 5', (value) => {
        return parseInt(value) < 6 && parseInt(value) > 0
    })

});

export default function ReviewForm({ addNewReviewHandler }) {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{ ...getStyles.container }}>

                <Formik
                    initialValues={{ 'title': '', 'rating': '', 'body': '' }}
                    onSubmit={(values, actions) => {
                        actions.resetForm();
                        addNewReviewHandler(values);
                    }} validationSchema={validateNewReview}>
                    {(props) => (
                        <View style={reviewFormStyles.reviewForm}>
                            <TextInput style={getStyles.fieldInput}
                                multiline={false}
                                placeholder='Enter review title'
                                onChangeText={props.handleChange('title')}
                                value={props.values.title}
                                onBlur={props.handleBlur('title')} />

                            <Text style={getStyles.errorText}>{props.touched.title && props.errors.title}</Text>

                            <TextInput style={getStyles.fieldInput}
                                multiline={true}
                                placeholder='Enter review body'
                                onChangeText={props.handleChange('body')}
                                value={props.values.body}
                                onBlur={props.handleBlur('body')} />

                            <Text style={getStyles.errorText}>{props.touched.body && props.errors.body}</Text>

                            <TextInput style={getStyles.fieldInput}
                                keyboardType={'number-pad'}
                                placeholder='Enter review rating (1-5)'
                                onChangeText={props.handleChange('rating')}
                                value={props.values.rating}
                                onBlur={props.handleBlur('rating')} />

                            <Text style={getStyles.errorText}>{props.touched.rating && props.errors.rating}</Text>

                            <Button style={reviewFormStyles.reviewSubmitButton}
                                onPress={props.handleSubmit}
                                title='Submit' />

                        </View>
                    )}
                </Formik>
            </View>
        </TouchableWithoutFeedback>

    );
}

const reviewFormStyles = StyleSheet.create({
    reviewForm: {
        paddingVertical: 20,
        paddingHorizontal: 8,
    },
    reviewSubmitButton: {
        backgroundColor: '#1693ef',
        fontSize: 14,
        fontFamily: 'nunito-bold'
    },
})