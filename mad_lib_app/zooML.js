import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as FileSystem from 'expo-file-system';

const GoToZoo = () => {
    const [jsonData, setJsonData] = useState(null);

    useEffect(() => {
        async function readJsonFile() {
            try {
                const fileUri = './MadLib.json'; // Adjust the file name as needed
                const fileInfo = await FileSystem.getInfoAsync(fileUri);

                if (fileInfo.exists) {
                    const content = await FileSystem.readAsStringAsync(fileUri);
                    setJsonData(JSON.parse(content));
                } else {
                    console.error('File does not exist.');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }

        readJsonFile();
    }, []);

    return (
        <View style={styles.container}>
            <Text>Welcome to the Zoo!</Text>
            {jsonData ? (
                <View>
                    <Text>JSON Data:</Text>
                    <Text>{JSON.stringify(jsonData, null, 2)}</Text>
                </View>
            ) : (
                <Text>Loading JSON data...</Text>
            )}
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
