import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const navigation = useNavigation();

  const handleGetStarted = () => {
    // Navigate to the new screen when the button is pressed
    navigation.navigate('prompt'); //Goes to the next screen prompting the user to select a madlib
  };

  return (
    <View style={styles.container}>
      <Text>Welcome to the MadLib craziness</Text>
      <TouchableOpacity onPress={handleGetStarted} style={styles.button}>
        <Text>Get Started</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 20,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
});
