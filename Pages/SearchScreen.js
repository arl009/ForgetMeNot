import {useState, useEffect} from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

function SearchScreen() {
    const [text, setText] = useState('');

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10}}>
          {/* <Text>Add via Search</Text>
          <TextInput
          style={{height: 40}}
          placeholder="Type here to Search"
          onChangeText={newText => setText(newText)}
          defaultValue={text}
          /> */}
          {/* <Text style={{padding: 10, fontSize: 42}}>
            {text.split(' ').map((word) => word && '🍕').join(' ')}
          </Text> */}
        </View>
      );
}

export default SearchScreen;