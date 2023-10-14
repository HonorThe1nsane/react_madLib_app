import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PickMadLib = () => {
    const handleButton1Press = () => {
        // Handle the action for Button 1
    };

    const handleButton2Press = () => {
        // Handle the action for Button 2
    };

    return (
        <View style={styles.container}>
            <Text>Choose a MadLib to play!</Text>
            <TouchableOpacity style={styles.button} onPress={handleButton1Press}>
                <Text>Adventure at the zoo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleButton2Press}>
                <Text>Going</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        marginTop: 10, // Adjust the spacing between buttons
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
    },
});

export default PickMadLib;
