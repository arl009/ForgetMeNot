import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    center: {
        alignItems: 'center'
    }
})

const LotsofChoices = () => {
    return (
      <View style={[styles.center, {top: 50}]}>
        <MedScreenChoice name='Rexxar' />
        <MedScreenChoice name='Jaina' />
        <MedScreenChoice name='Valeera' />
      </View>
    );
}

const MedScreenChoice = (props) => {
    return (
      <View style={styles.center}>
        <Text>Choose Meds Screen! {props.name}!</Text>
      </View>
    );
}


function AddMedChoiceScreen(props) => {
  return (
    MedScreenChoice;
  );
}
export default AddMedChoiceScreen;