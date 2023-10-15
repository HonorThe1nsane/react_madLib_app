import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen'; // Import the HomeScreen component
import PickMadLib from './prompt'; // Import the PickMadLib component
import GoToZoo from './zooML'; //Page for the Zoo Mad Lib
import GoToCamp from './campML'; //Page for the Camping Mad Lib
const Stack = createStackNavigator(); // Stack navigation allowing for easy navigation

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PickMadLib" component={PickMadLib} />
        <Stack.Screen name="GoToZoo" component={GoToZoo} />
        <Stack.Screen name="GoToCamp" component={GoToCamp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;