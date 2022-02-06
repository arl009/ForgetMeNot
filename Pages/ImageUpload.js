import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Link } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';


function HomeScreen() {

  const [photo, setPhoto] = React.useState(null);

   const handleChoosePhoto = async () => {
  //   launchImageLibrary({ noData: true }, (response) => {
  //     // console.log(response);
  //     if (response) {
  //       setPhoto(response);
  //     }
  //   });
      let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (permissionResult.granted === false) {
        alert("Permission to access camera roll is required!");
        return;
      }

      let pickerResult = await ImagePicker.launchImageLibraryAsync();
      console.log(pickerResult);
      setPhoto({ localUri: pickerResult.uri });
 };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{photo && photo.localUri.su}</Text>
      {photo && (
          <img src={uri: photo.localUri}/>
      )}
      <Button title="Choose Photo" onPress={handleChoosePhoto} />
      <Link to={{ screen: 'About'}}>
        Go to About
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain"
  }
});

export default HomeScreen;

