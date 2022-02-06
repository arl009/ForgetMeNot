import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
//import Medicine from './components/Medicine.js'
//all the python backend is done so we r just  
// epic
function CalendarScreen() {
    return (
        // <View> </View>
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Medicine Schedule</Text>

            <View style={styles.items}>
                {/* <Medicine /> */}
            </View>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tasksWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 26,
        fontWeight: "bold",
    },
    items: {
        fontFamily: 'merriweather',
    }
});

export default CalendarScreen;