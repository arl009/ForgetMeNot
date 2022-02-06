import React, { Component } from "react";
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import MedicineLabel from "../components/MedicineLabel.js";

function MedicineListHelper({medicineList}) {
  // const [medicineItemList, medicineItem] = useState([{name: "Shidded", type: "no"},
  //   {name: "My", type: "yes"}
  // ])

  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  useEffect(
    () => {
      var date = new Date().getDate(); //Current Date
      var month = new Date().getMonth() + 1; //Current Month
      var year = new Date().getFullYear(); //Current Year
      var hours = new Date().getHours(); //Current Hours
      var min = new Date().getMinutes(); //Current Minutes
      var sec = new Date().getSeconds(); //Current Seconds
      setCurrentDate(date + "/" + month + "/" + year);
      setCurrentTime(hours + ":" + min + ":" + sec);
    },
    [true]
  );

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.date}>
          {currentDate}
        </Text>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={require("../assets/ribbon_white.png")}
        />
        <View>
          {medicineList.map(medicineItem =>
            <MedicineLabel key={medicineItem.name} data={medicineItem} />
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A5CCFF"
  },
  image: {
    width: 400,
    height: 60,
    flex: 1,
    alignItems: "center",
    alignSelf: "center",
    resizeMode: 'contain',
  },
  tasksWrapper: {
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  data: {
    fontFamily: "merriweather"
  },
  time: {
    fontSize: 30,
    fontFamily: "merriweather",
    color: "#fff",
    fontWeight: "bold",
    alignItems: "center",
    alignSelf: "center"
  },
  date: {
    fontSize: 24,
    fontFamily: "merriweather",
    color: "#fff",
    //fontWeight: 'bold',
    alignItems: "center",
    alignSelf: "center"
  }
});
export default MedicineListHelper;
