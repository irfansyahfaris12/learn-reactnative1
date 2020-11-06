import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My Todos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        height: 75,
        paddingTop:28,
        backgroundColor:'gray',
    },
    title:{
        textAlign:'center',
        color:'white',
        fontSize:20,
        fontWeight:'bold'
        
    }
})
