import * as React from 'react';
import { View, ImageBackground, Text, Button, StyleSheet, TextInput } from "react-native";
import { Link } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";

function HomeScreen({navigation}) {
  const [photo, setPhoto] = React.useState(null);
  const [text, setText] = React.useState('');

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

  const createFormData = (photo, test) => {
    var formData = new FormData();

    formData.append("pt", photo);
    return formData;
  };

  const SERVER_URL = "https://a7b8-2600-8802-260c-8b00-9870-ee-63a1-fef4.ngrok.io/upload"; // change to new link
  //const SERVER_URL = "https://api.fda.gov/drug/ndc.json?search=product_ndc:22840-0209&limit=5"; // change to new link
  //const SERVER_URL = "https://api.fda.gov/drug/ndc.json?search=product_ndc:18124-002&limit=5"; // change to new link

  const lookUp = () => {
    fetch(`https://api.fda.gov/drug/ndc.json?search=product_ndc:${text}&limit=5`)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        // let dosage;
        // response?.results>.[0]?.packaging.forEach(item => {
        //   if (item.ndc)
        // })
        let transformedData = {name: response?.results[0]?.generic_name, brand: response?.results?.[0]?.brand_name,
          manufacturer: response?.results?.[0]?.labeler_name, activeIngredients: response?.results?.[0]?.active_ingredients,
          expirationDate: response?.results?.[0]?.listing_expiration_date, type: response?.results?.[0]?.dosage_form,
          use: response?.results?.[0]?.product_type, dosage: response?.results?.[0]?.packaging?.[0]?.description
        };
        navigation.navigate("Medicine", transformedData);
        console.log("response", response);
      })
      .catch(error => {
        console.log("error", error);
        navigation.navigate("Medicine", {name: "BOOPITY", brand: 'Standardized Perennial Ryegrass Pollen',
        manufacturer: 'Greer Laboratories, Inc.', activeIngredients: 'Lolium Perenne Pollen, 10000 [BAU]/mL', expirationDate: '2/1/2022', type: 'Solution',
        use: 'Standardized Allergenic', dosage: '50 mL in 1 VIAL, MULTI-DOSE (22840-0209-4)'
        });
      });
  }

  const handleUploadPhoto = photoURI => {
    // fetch(SERVER_URL, {
    //   method: "POST",
    //   body: createFormData(photoURI, { userId: "123" })
    // })
    //fetch(SERVER_URL)
    fetch(SERVER_URL, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({pt: photoURI})
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        // let dosage;
        // response?.results>.[0]?.packaging.forEach(item => {
        //   if (item.ndc)
        // })
        let transformedData = {name: response?.results[0]?.generic_name, brand: response?.results?.[0]?.brand_name,
          manufacturer: response?.results?.[0]?.labeler_name, activeIngredients: response?.results?.[0]?.active_ingredients,
          expirationDate: response?.results?.[0]?.listing_expiration_date, type: response?.results?.[0]?.dosage_form,
          use: response?.results?.[0]?.product_type, dosage: response?.results?.[0]?.packaging?.[0]?.description
        };
        navigation.navigate("Medicine", transformedData);
        console.log("response", response);
      })
      .catch(error => {
        console.log("error", error);
        navigation.navigate("Medicine", {name: "BOOPITY", brand: 'Standardized Perennial Ryegrass Pollen',
        manufacturer: 'Greer Laboratories, Inc.', activeIngredients: 'Lolium Perenne Pollen, 10000 [BAU]/mL', expirationDate: '2/1/2022', type: 'Solution',
        use: 'Standardized Allergenic', dosage: '50 mL in 1 VIAL, MULTI-DOSE (22840-0209-4)'
        });
      });
  };
  React.useEffect(
    () => {
      if (photo && photo.localUri) {
        handleUploadPhoto(photo.localUri);
      }
    },
    [photo]
  );

  return (
    <ImageBackground
      source={require("../assets/login_bg.png")}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10}}>
        <Text>
          {photo && photo.localUri}
        </Text>
        {/* {photo && (
          <Image
            source={{ uri: photo.localUri }}
            // style={style.thumbnail}
          />
      )} */}
      {/* <Link to={{ screen: "About" }}>Go to About</Link> */}
      <Text> Search medicine here by uploading a picture or searching using the medicine NDC </Text>
      <Text style={styles.spaces}></Text>
      <Text>Add via Image</Text>
      <Text style={{padding: 10}}></Text>
      <Button title="Choose Photo" onPress={handleChoosePhoto} />
      <Text style={styles.spaces}></Text>
      <Text style={styles.boxTwo}>Add via Search: </Text>
      <TextInput
      style={{height: 40}}
      placeholder="Type here to Search"
      onChangeText={newText => setText(newText)}
      defaultValue={text}
      />
      <Text style={{padding: 10}}></Text>
      {/* <Text style={styles.boxOne}>Search</Text> */}
      <Text style={{padding: 10, fontSize: 42}}>
        {/*On button click, send hte 'text' data to the
        {/* {text.split(' ').map((word) => word && '🍕').join(' ')} */}
      </Text>
      <Button
        title="Press me"
        onPress={lookUp}
      />
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain"
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
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

export default HomeScreen;
