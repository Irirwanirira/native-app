import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, 
  StyleSheet, 
  Text, View, 
  TextInput, 
  FlatList, ScrollView ,
TouchableOpacity} from 'react-native';

export default function App() {
  const [person , setPerson] = useState({name: "Liza", age: 22})
  const [name , setName] = useState("Irirwanirira");
  const [number , setNumber] = useState(22);
  const [team, setTeam] = useState([
    {name: "Liza", age: 22, id: 1},
    {name: "Li", age: 20, id: 2},
    {name: "Lizan", age: 23, id: 3},
    {name: "Lizand", age: 24, id: 4},
    {name: "Lizandro", age: 25, id: 5},

  ])

  
  function clickHandler(){
    setPerson({name: "Lizandro", age: 20});
  }

  function pressHandle(id){
    console.log(id);
    setTeam((prevTeam) => {
      return prevTeam.filter(team => team.id != id)
    })
  }

  return (
    <View style={styles.container}>
      {/* use of dyanamic data and button */}
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Her name is <Text style={styles.long_text}>{person.name}</Text> and she is <Text style={styles.long_text}>{person.age}</Text></Text>
      
      <View style={styles.buttonContainer}>
        <Button title='update state' onPress={clickHandler }/>
      </View>
        
        {/* use of input */}
        <Text>Enter your name:{name}</Text>
        <TextInput
          multiline
          style={{ margin: 10, padding: 8, borderWidth: 1, border: 1, width: 200 }}
          onChangeText={text => setName(text)}
          placeholder='e.g. Rhys'
        />
         <TextInput
         keyboardType='numeric'
          style={{ margin: 10, padding: 8, borderWidth: 1, border: 1, width: 200 }}
          onChangeText={text => setName(text)}
          placeholder='e.g. Rhys'
        />
                <Text>Enter your age:{number}</Text>


        {/* use of list of flat list */}
        {/* <ScrollView>
        {team.map((item) => {
          return (
            <View key={item.key}>
              <Text style={styles.item}>{item.name} <Text>{item.age}</Text></Text>
            </View>
          )
        })}
        </ScrollView>
        */}

        <FlatList
        keyExtractor={(item) => item.id}
        data={team}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => pressHandle(item.id)}>
            <Text style={styles.item}>{item.name} <Text>{item.age}</Text></Text>
          </TouchableOpacity>
          )}
        />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  long_text: {
    width: "80%",
    fontSize: 20,
    textAlign: "center",
    color: "red",
  },
  buttonContainer: {
    width: "50%",
    marginTop: 30,
  }, 
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
    marginHorizontal: 10,
  }
});
