import React, { useState } from 'react';
import { StyleSheet, Alert, View, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './component/header';
import Item from './component/item';
import AddTodo from './component/addTodo';


export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffe', key:'1' },
    { text: 'create an app', key:'2' },
    { text: 'play games', key:'3' },
  ])

  const handlePress = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  const submitHandler = (text) => {
    if(text.length > 3){
      setTodos(prevTodos => {
        return [
          { text, key: Math.random().toString() },
          ...prevTodos
        ];
      });
    } else {
      Alert.alert('OOPS', 'Todo must be over 3 characters long', [
        {text: 'Understood', onPress: () => console.log('alert closed') }
      ]);
    }
  };


  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('dismissed');
    }}>
    <View style={styles.container}>
      <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({item}) => (
              <Item 
                item={item}
                handlePress={handlePress}
              />
              )}
            />
          </View>
        </View>
    </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff'
  },
  content: {
    flex:1,
    padding: 40,
  },
  list: {
    flex:1,
    marginTop:20
  }
})
