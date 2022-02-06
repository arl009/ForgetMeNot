import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Pages/HomeScreen.js";
import AboutScreen from "./Pages/AboutScreen.js";
import SingleMedScreen from "./Pages/SingleMedScreen.js";
import MedicineList from "./Pages/MedicineList.js";
// import Medicine from './components/Medicine.js';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

function App() {
  const [medicineList, setMedicineList] = React.useState([
    { name: "Atorvastatin", dosage: "14/50", expirationDate: "5/20/2022", type: "Pill", use: "Cholesterol", theTime: "04:23:58"},
    { name: "Tylenol", dosage: "2/12", expirationDate: "3/2/2022", type: "Pill", use: "Pain", theTime: "05:07:41 "},
    { name: "Hydrochlorothiazide", dosage: "0/4", expirationDate: "3/7/2022", type: "Pill", use: "High Blood Pressure", theTime: "06:34:20"}
  ]);
  return (
    <NavigationContainer>
      {/* <ScrollView> */}
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        {/* <Tab.Screen name="Upload" component={AboutScreen} /> */}
        {/* <Tab.Screen name="Medicine" component={SingleMedScreen} /> */}
        <Tab.Screen name="Medicine">
          {(props) => <SingleMedScreen {...props} setMedicineList={setMedicineList}/>}
        </Tab.Screen>
        {/* <Tab.Screen name="Medicine Calendar" component={CalendarScreen} /> */}
        {/* <Tab.Screen name="Daily Meds" component={MedicineList} /> */}
        <Tab.Screen name="Daily Meds">
          {(props) => <MedicineList {...props} medicineList={medicineList}/>}
        </Tab.Screen>
      </Tab.Navigator>
      {/* </ScrollView>
        <View>
          Hello
        </View> */}
    </NavigationContainer>
  );
}

export default App;
