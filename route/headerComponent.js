import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function HeaderComponent({navigation, title}){
    return(
        <View style={headerStyles.headerLayout}>
            <MaterialIcons name='menu'
                size={28}
                onPress={()=>{
                    navigation.openDrawer()
                }}/>    
            <View style={headerStyles.headerTitleLayout}>
                <Image source={require('../assets/heart_logo.png')} style={headerStyles.headerLogo}/>
                <Text style={headerStyles.headerTitle}>{title}</Text>
            </View>
        </View>
    );
}

const headerStyles=StyleSheet.create({
    headerLayout:{
        width:'100%',
        height:'100%',
        flexDirection:'row',
    },
    headerTitle:{
        fontSize:20,
        fontFamily:'nunito-black',
        color:'#400040',
        textAlign:'center',
        letterSpacing:1,
        alignSelf:'center',
        marginHorizontal:8
    },
    headerTitleLayout:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignSelf:'center',
    },
    headerLogo:{
        width:26,
        height:26
    }
});