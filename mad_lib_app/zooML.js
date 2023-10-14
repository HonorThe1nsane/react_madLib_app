import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GoToZoo = () => {
    const [fileContent, setFileContent] = useState('');

    useEffect(() => {
        // Replace 'zooMadLib.txt' with the path to your text file
        fetch('./https://github.com/HonorThe1nsane/react_madLib_app/blob/main/mad_lib_app/zooMadLib.txt')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch file');
                }
                return response.text();
            })
            .then((text) => {
                setFileContent(text);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

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
