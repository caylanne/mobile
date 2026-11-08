import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AlunoInicio from './src/screens/AlunoInicio';
import InstrutorInicio from './src/screens/InstrutorInicio';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AlunoInicio"
        screenOptions={{ headerShown: false, animation: 'fade' }}
      >
        <Stack.Screen name="AlunoInicio" component={AlunoInicio} />
        <Stack.Screen name="InstrutorInicio" component={InstrutorInicio} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
