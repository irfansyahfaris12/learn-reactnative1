import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native'

export default function addTodo({ submitHandler }) {
    const [ text, setText ] =useState('');
    
    const handleChange = (val) => {
        setText(val);
    }

    const handlePress = () => {
        submitHandler(text);
    setText('');
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='New Todo...'
                onChangeText={handleChange}
                value={text}
            />
            <Button 
                onPress={handlePress}
                title='add Todo'
                color='gray'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd',
    }
})
