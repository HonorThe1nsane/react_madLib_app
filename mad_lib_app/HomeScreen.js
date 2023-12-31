import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

function HomeScreen({ navigation }) {
    const handleGetStarted = () => {
        navigation.navigate('PickMadLib'); // Navigate to the 'PickMadLib' screen
    };

    return (
        <View style={styles.container}>
            <Text>Welcome to the MadLib craziness</Text>
            <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
                <Text>Get Started Right Now</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        marginTop: 20,
        backgroundColor: 'grey',
        padding: 10,
        borderRadius: 5,
    },
});

export default HomeScreen;
