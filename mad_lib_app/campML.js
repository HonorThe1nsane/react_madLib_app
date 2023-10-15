import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import MadLibData from './MadLib.json';

const GoToCamp = () => {
    const campStory = MadLibData.madLibs[1].camping_story; //Stores the 2nd story in the json file
    const prompts = MadLibData.madLibs[1].prompts; // takes the prompts from that story

    const [userInputs, setUserInputs] = useState({});

    const handleInputChange = (prompt, text) => { //handsles the storage of the inputs
        setUserInputs({ ...userInputs, [prompt]: text });
    };

    //Creates the prompts from the JSON file and handles some stylizing events

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

    //Generates the story
    const generateStory = () => {
        let finalStory = campStory;
        prompts.forEach((prompt) => {
            const regex = new RegExp(`\\(${prompt}\\)`, 'g'); //Looks for "()" in the prompt
            finalStory = finalStory.replace(regex, userInputs[prompt] || ''); //Replaces with user input or deletes it if no input
        });
        return finalStory;
    };

    //generates the story
    return (
        <View style={styles.container}>
            <Text>Welcome to your Camping trip!</Text>
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

export default GoToCamp;
