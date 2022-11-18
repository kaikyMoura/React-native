import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Imagem from './components/views/imagem';
import { Text } from 'react-native';
import Nome from './components/views/name';
import React from 'react';

const Stack = createNativeStackNavigator();

class App extends React.Component {
  render() {

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Nome" component={Nome} />
          <Stack.Screen 
          name="Imagem" component={Imagem}
           />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
