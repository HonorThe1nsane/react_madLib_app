import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import MadLibData from './MadLib.json';

const GoToCamp = () => {
    const zooStory = MadLibData.madLibs[0].camping_story_story;
    const prompts = MadLibData.madLibs[0].prompts;

    const [userInputs, setUserInputs] = useState({});

    const handleInputChange = (prompt, text) => {
        setUserInputs({ ...userInputs, [prompt]: text });
    };

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

    const generateStory = () => {
        let finalStory = campStory;
        prompts.forEach((prompt) => {
            const regex = new RegExp(`\\(${prompt}\\)`, 'g');
            finalStory = finalStory.replace(regex, userInputs[prompt] || '');
        });
        return finalStory;
    };

    return (
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

export default GoToCamp;
