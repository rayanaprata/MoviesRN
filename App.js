import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Movies from './src/Movies';
import DetailMovie from './src/DetailMovie';

const Stack = createStackNavigator();

function Myapp() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Filmes" component={Movies} />
        <Stack.Screen name="Detalhes do filme" component={DetailMovie} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Myapp;