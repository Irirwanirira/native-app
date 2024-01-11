import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, 
  StyleSheet, 
  Text, View, 
  FlatList,
  Alert,
  Touchable,
  TouchableWithoutFeedback,
  Keyboard
 } from 'react-native';
 import Header from './components/header.js';
 import TodoItem from './components/todoItems.js';
 import AddTodo from './components/addTodo.js';

export default function App() {
  const [todo, setTodo] = useState([
    {text: 'buy coffee', key: '1'},
    {text: 'create an app', key: '2'},
    {text: 'play on the switch', key: '3'},
  ])

  const pressHandler = (key) => {
    setTodo(prevTodos=> ( prevTodos.filter(item => item.key != key)))
  }

  const handleSubmit = (text) => {
    if(text.length > 3){
      setTodo(prevTodods => {
        return[
          {text: text, key: Math.random().toString()},
          ...prevTodods
        ]
  
      })
    }else{
      Alert.alert('OOPS!', 'Todos must be over 3 chars long', [
        {text: 'Understood', onPress: () => console.log('alert closed')}
      ])
    }
   
  }
 
  return (
  <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('dismissed keyboard')
    }
  }>
    <View style={styles.container}>
      <Header /> 
      <View style={styles.content}>
          <AddTodo handleSubmit={handleSubmit}/>
          <View style={styles.list}>
            <FlatList 
                data={todo}
                renderItem={({item}) => (
                  <TodoItem item={item} pressHandler={pressHandler}/>
                )}
            />
          </View>

      </View>
      
    </View>
  </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,

  },
  content:{
    flex: 1,
    padding: 40,
  },
  list:{
    flex: 1,
    marginTop: 20,
  }
  
});
