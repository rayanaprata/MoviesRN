import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LottieView from 'lottie-react-native';
import Movies from './src/Movies';
import DetailMovie from './src/DetailMovie';
import {View, StyleSheet} from 'react-native';

const Stack = createStackNavigator();

const SplashScreen = props => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 5000);
  }, []);

  useEffect(() => {
    if (loaded) {
      props.navigation.replace('Filmes');
    }
  }, [loaded, props.navigation]);

  return (
    <View style={styles.root}>
      <LottieView
        source={require('./assets/movie-loading.json')}
        autoPlay
        loop
      />
    </View>
  );
};

function Myapp() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Filmes" component={Movies} />
        <Stack.Screen name="Detalhes do filme" component={DetailMovie} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Myapp;
