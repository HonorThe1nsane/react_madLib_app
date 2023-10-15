import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import MadLibData from './MadLib.json';

const GoToZoo = () => {
    const zooStory = MadLibData.madLibs[0].zoo_story;
    const prompts = MadLibData.madLibs[0].prompts;

    const [userInputs, setUserInputs] = useState({});

    const handleInputChange = (prompt, text) => {
        setUserInputs({ ...userInputs, [prompt]: text });
    };

    //Creates prompts for user input based on the Json file contents
    const renderPrompts = () => { 
        return prompts.map((prompt, index) => (
            <View key={index} style={styles.inputContainer}>
                <Text>{prompt}:</Text>
                <TextInput
                    style={styles.inputField}
                    onChangeText={(text) => handleInputChange(prompt, text)}
                    autoCapitalize="none" //I don't want it to.
                />
            </View>
        ));
    };

    //Creates the story after replacing the placeholder with the user input
    const generateStory = () => {
        let finalStory = zooStory;
        prompts.forEach((prompt) => {
            const regex = new RegExp(`\\(${prompt}\\)`, 'g'); //Looking for "()" in the JSON string
            finalStory = finalStory.replace(regex, userInputs[prompt] || '');//Replace the placeholder
        });
        return finalStory;
    };

    return ( //Generates the alert message
        <View style={styles.container}>
            <Text>Welcome to the Zoo!</Text>
            {renderPrompts()}
            <Button title="Generate Story" onPress={() => alert(generateStory(), "Your MadLib!")} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        marginRight: 10,
        marginLeft: 10,
    },
    inputField: {
        borderWidth: 1,
        borderColor: 'gray',
        flex: 1,
        marginLeft: 10,
    },
});

export default GoToZoo;
