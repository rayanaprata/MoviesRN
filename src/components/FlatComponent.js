import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const FlatComponent = ({data}) => {
  const navigation = useNavigation();

  const navegar = () => {
    navigation.navigate('Detalhes do filme', {data: data});
  };

  return (
    <TouchableOpacity onPress={navegar} style={styles.container}>
      <Image
        source={{uri: data.image}}
        resizeMode="contain"
        style={styles.image}
      />
      <View style={styles.subcontainer}>
        <Text style={styles.title}>{data.filme}</Text>
        <Text style={styles.text}>Ano: {data.ano}</Text>
        <Text style={styles.text}>Estilo: {data.estilo}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    marginBottom: 5,
    flexDirection: 'row',
  },
  subcontainer: {
    marginLeft: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 5,
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
    fontWeight: '300',
    marginTop: 2,
    marginBottom: 2,
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 5,
    marginBottom: 5,
  },
});

export default FlatComponent;
