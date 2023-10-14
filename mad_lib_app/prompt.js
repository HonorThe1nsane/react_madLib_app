import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PickMadLib = ({ navigation }) => {
    const handleButton1Press = () => {
            navigation.navigate('GoToZoo'); // Navigate to the 'Zoo Mad Lib' screen
    };

    const handleButton2Press = () => {
            navigation.navigate('GoToCamp');
        };

    return (
        <View style={styles.container}>
            <Text>Choose a MadLib to play!</Text>
            <TouchableOpacity style={styles.button} onPress={handleButton1Press}>
                <Text>Adventure at the zoo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleButton2Press}>
                <Text>Going Camping</Text>
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
        backgroundColor: 'grey',
        backgroundOpacity: 1,
        padding: 10,
        borderRadius: 5,
    },
});

export default PickMadLib;
