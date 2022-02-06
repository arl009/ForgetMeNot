import { Link } from '@react-navigation/native';
import {useState, useEffect} from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

function AboutScreen() {

  const [text, setText] = useState('');

  //const [name, setName] = useState('bob');

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10}}>
      <Text> Search medicine here by uploading a picture or searching using the medicine name </Text>
      <Text style={styles.spaces}></Text>
      <Text>Add via Image</Text>
      <Text style={{padding: 10}}></Text>
      <Text style={styles.boxOne}>Upload Image</Text>
      <Text style={styles.spaces}></Text>
      <Text style={styles.boxTwo}>Add via Search: </Text>
      <TextInput
      style={{height: 40}}
      placeholder="Type here to Search"
      onChangeText={newText => setText(newText)}
      defaultValue={text}
      />
      <Text style={{padding: 10}}></Text>
      <Text style={styles.boxOne}>Search</Text>
      <Text style={{padding: 10, fontSize: 42}}>
        {/*On button click, send hte 'text' data to the*/}
        {text.split(' ').map((word) => word && '🍕').join(' ')}
      </Text>
      {/* <Button
        title="Press me"
        onPress={() => }
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#ddd',
  },
  boxOne: {
    backgroundColor: 'violet',
    padding: 10,
  },
  boxTwo: {
    //backgroundColor: 'gold',
    padding: 10,
  },
  spaces: {
    padding: 20,
  },
});

export default AboutScreen;