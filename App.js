import React from 'react';
import {View} from 'react-native';
import HomeScreen from './screens/Home';
import CreateEmploye from './screens/CreateEmploye';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Creat" component={CreateEmploye} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
