import {useState, useEffect} from 'react';
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

//Style me!!!

function SingleMedScreen({route, setMedicineList}) {


    const [medList, setMedList] = useState({name: "Lolium Perenne", brand: 'Standardized Perennial Ryegrass Pollen',
        manufacturer: 'Greer Laboratories, Inc.', activeIngredients: [], expirationDate: '2/1/2022', type: 'Solution',
        use: 'Standardized Allergenic', dosage: '50 mL in 1 VIAL, MULTI-DOSE (22840-0209-4)'
    });

    function sendMed() {
        setMedicineList(prev => ([...prev, {...medList, theTime: new Date().toTimeString().substring(0,8)}]));
    }

    useEffect(() => {
        setMedList(route.params);
    }, [route.params]);

    useEffect(() => {
        console.log(medList);
    }, [medList]);

    return (
        <View> 
         {/* </View> */}
          {/* <View style={styles.backStyle}>  */}
            <Text style={styles.textStyle}> Name: {medList.name} </Text>
            <Text style={styles.textStyle}> Brand: {medList.brand} </Text>
            <Text style={styles.textStyle}> Manufacturer: {medList.manufacturer} </Text>
            <Text style={styles.textStyle}> Expiration Date: {medList.expirationDate} </Text>
            <Text style={styles.textStyle}> Type: {medList.type} </Text>
            <Text style={styles.textStyle}> Use: {medList.use} </Text>
            <Text style={styles.textStyle}> Dosage: {medList.dosage} </Text>
            <Text style={styles.textStyle}> Active Ingredients: </Text>
            {medList?.activeIngredients?.map(ingredient =>
                <View key={ingredient.name}>
                    <Text style={styles.textStyle}>     -    Name: {ingredient.name}</Text>
                    <Text style={styles.textStyle}>     -    Strength: {ingredient.strength}</Text>
                </View>
            )}
            <Button 
                title="Upload Data" onPress = {
                sendMed
            }>
                title = "Learn More"</Button>
        </View>
    );
}

const styles = StyleSheet.create({
    backStyle: {
        // flex: 1,
        // paddingTop: 40,
        // backgroundColor: '#FFF',
        // padding: 5,
        // borderRadius: 20,
        // margin: 10,
        // flexDirection: 'row',
        // alignItems: 'center',
    },
    textStyle: {
        fontFamily: "merriweather",
        fontSize: 14,
        color: "#5AA2FF",
        marginVertical: 2,
    },
    spaces: {
      padding: 20,
    },
 });

export default SingleMedScreen;