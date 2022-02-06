import React from "react";
import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  CheckBox
} from "react-native";

function MedicineLabel({ data }) {
  const [isSelected, setSelection] = useState(false);
  return (
    <View>
      <Text style={styles.dataTime}>
        {data.theTime} AM
      </Text>
      <View style={styles.data}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <View style={styles.dataCol}>
          <Text style={styles.dataText}>
            {data.name}
          </Text>
          <View style={styles.dataLeft}>
            <Text style={styles.dataExp}>
              Dose: {data.dosage}
            </Text>
            <Text style={styles.dataExp}>
              Expiration Date: {data.expirationDate}
            </Text>
          </View>
          <View style={styles.dataLeft}>
            <Text style={styles.dataExp}>
              Type: {data.type}
            </Text>
            <Text style={styles.dataExp}>
              Use: {data.use}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  data: {
    backgroundColor: "#FFF",
    padding: 5,
    borderRadius: 20,
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    flexWrap: 'wrap',
    //justifyContent: 'center',
  },
  dataCol: {
    flexDirection: "column"
  },
  dataLeft: {
    flexDirection: "row"
  },
  dataText: {
    fontFamily: "merriweather",
    color: "#5AA2FF",
    flexDirection: "row",
    marginVertical: 5,
    marginLeft: 20,
    fontSize: 24,
    flexWrap: 'wrap',
  },
  dataExp: {
    fontFamily: "merriweather",
    color: "#888",
    flexDirection: "row",
    marginVertical: 5,
    marginLeft: 20,
    fontSize: 15,
    flexWrap: 'wrap',
  },
  dataTime: {
    fontFamily: "merriweather",
    color: "#FFF",
    flexDirection: "row",
    marginLeft: 5,
    fontSize: 20,
    alignItems: "flex-end",
    alignSelf: "flex-end",
    flexWrap: 'wrap',
  },
  checkBox: {
    alignItems: "flex-end",
    alignSelf: "flex-end"
  }
});

export default MedicineLabel;
