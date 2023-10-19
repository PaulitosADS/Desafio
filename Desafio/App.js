import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.lista}>
        <Text style={styles.textLista}>LISTAS</Text>
      </View>

      <View style={styles.linguagens}>
        <Text style={styles.textLinguagens}>Animais</Text>
      </View>

      <View style={styles.times}>
        <Text style={styles.textTimes}>Carros</Text>
      </View>

      <View style={styles.filmes}>
        <Text style={styles.textFilmes}>Peixes</Text>
      </View>

      <View style={styles.peixes}>
        <Text style={styles.textPeixes}>Times</Text>
      </View>

      <View style={styles.carros}>
        <Text style={styles.textCarros}>Filmes</Text>
      </View>

      <View style={styles.animais}>
        <Text style={styles.textAnimais}>Linguagens</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  
  lista:{
    backgroundColor:'#2A9F91',
    width:430,
    height:87,
    alignItems:'center',
    justifyContent:'center',

  },
  textLista:{
    color:'#fff',
    fontSize:25,
    fontWeight:'bold'
  },

  linguagens: {
    width: 408,
    height: 107,
    backgroundColor: '#FFA4A4',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLinguagens: {
    color: '#C62222',
    fontSize: 25,
    fontWeight:'bold'
  },
  times: {
    width: 408,
    height: 107,
    backgroundColor: '#EDA4FF',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTimes: {
    color: '#7422C6',
    fontSize: 25,
    fontWeight:'bold'
  },
  filmes: {
    width: 408,
    height: 107,
    backgroundColor: '#A4D4FF',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textFilmes: {
    color: '#2277C6',
    fontSize: 25,
    fontWeight:'bold'
  },
  peixes: {
    width: 408,
    height: 107,
    backgroundColor: '#A4FFC3',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textPeixes: {
    color: '#22C646',
    fontSize: 25,
    fontWeight:'bold'
  },
  carros: {
    width: 408,
    height: 107,
    backgroundColor: '#D1D6D3',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCarros: {
    color: '#434A44',
    fontSize: 25,
    fontWeight:'bold'
  },
  animais: {
    width: 408,
    height: 107,
    backgroundColor: '#E8EFBD',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textAnimais: {
    color: '#747D10',
    fontSize: 25,
    fontWeight:'bold'
  },
});
