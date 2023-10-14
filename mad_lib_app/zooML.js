import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GoToZoo = () => {
    const [fileContent, setFileContent] = useState('');

    fetch('./zooTxt.txt')
    .then((response) => {
        if (!response.ok) {
            console.error('Response not OK:', response.status, response.statusText);
            throw new Error('Network request failed');
        }
        return response.text();
    })
    .then((text) => {
        setFileContent(text);
    })
    .catch((error) => {
        console.error('Error:', error);
    });

    return (
        <View style={styles.container}>
            <Text>Welcome to the Zoo!</Text>
            <Text>File Content:</Text>
            <Text>{fileContent}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default GoToZoo;
