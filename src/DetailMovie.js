import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';

const DetailMovie = () => {
  const route = useRoute();
  const data = route.params.data;

  return (
    <ScrollView>
      <Image source={{uri: data.image}} style={styles.image} />
      <Text style={styles.title}>{data.filme}</Text>
      <View style={styles.container}>
        <Text style={styles.text}>ANO: {data.ano}</Text>
        <Text style={styles.text}>ESTILO: {data.estilo}</Text>
        <Text style={styles.text}>DESCRIÇÃO: {data.descricao}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    marginBottom: 50,
  },
  subcontainer: {
    marginLeft: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 5,
    marginLeft: 16,
  },
  text: {
    fontSize: 14,
    fontWeight: '300',
    marginTop: 4,
    marginBottom: 4,
    marginLeft: 16,
    marginRight: 16,
    textAlign: 'justify',
  },
  image: {
    width: 200,
    height: 300,
    marginTop: 24,
    marginBottom: 5,
    alignSelf: 'center',
  },
});

export default DetailMovie;
