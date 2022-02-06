import React, { Component } from "react";
import { AppRegistry, View, Text, StyleSheet, Platform, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import MedicineLabel from "../components/MedicineLabel.js";
import MedicineListHelper from "./MedicineListHelper.js"

class MedicineList extends Component {
  constructor(props) {
    super(props);

    this.state = { currentTime: null, currentDay: null };
  }
  componentWillMount() {
    this.getCurrentTime();
  }

  getCurrentTime = () => {
    let hour = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    let am_pm = "pm";

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (hour > 12) {
      hour = hour - 12;
    }

    if (hour == 0) {
      hour = 12;
    }

    if (new Date().getHours() < 12) {
      am_pm = "am";
    }

    this.setState({
      currentTime: hour + ":" + minutes + ":" + seconds + " " + am_pm
    });
    return{
        currentTime: hour + ":" + minutes + ":" + seconds + " " + am_pm
    }
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.getCurrentTime();
    }, 1000);
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.timeText}>
            {this.state.currentTime}
          </Text>
          <MedicineListHelper medicineList={this.props.medicineList}></MedicineListHelper>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: "#A5CCFF"
  },
  headerText: {
    fontSize: 30,
    textAlign: "center",
    margin: 10,
    color: "black",
    fontWeight: "bold"
  },
  timeText: {
    fontSize: 40,
    fontFamily: "merriweather",
    color: "#fff",
    fontWeight: "bold",
    alignItems: "center",
    alignSelf: "center"
  }
});
export default MedicineList;
