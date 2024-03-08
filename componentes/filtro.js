import React, { useState, useEffect } from 'react';
import { TextInput } from 'react-native-paper';
import { useAppContext } from './provider';
import { FlatList, TouchableOpacity, View, StyleSheet  } from 'react-native-web';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Filtro() {
  const { pessoas, pessoaSelecionada, selecionarPessoa, removerPessoa, editarPessoa } =
  useAppContext();
  const [barraPesquisa, setBarraPesquisa] = useState('');
  const [filtro, setFiltro] = useState(pessoas);

  const renderItem = ({ item }) => (
    <View>
      <Text>{item.nome}</Text>
    </View>
  );

  useEffect(() => {
    if(barraPesquisa === '') {
      setFiltro(pessoas);
    } else {
      setFiltro(
        pessoas.filter((p) => {
          if(p.nome.toLowerCase().indexOf(barraPesquisa.toLowerCase()) > -1) {
            return true;
          } else {
            return false;
          }
        })
      );
    }
  }, [barraPesquisa]);

  return(
    <SafeAreaView style={StyleSheet.container}>
      <View styles={styles.searchArea}>
        <TextInput 
          style={styles.input}
          placeholder='Pesquise uma pessoa'
          placeholderTextColor="#888"
          value={barraPesquisa}
          onChangeText={(t) => setBarraPesquisa(t)}
        />
      </View>
          <FlatList
          data={filtro}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          />
          <StatusBar style="light" />
    </SafeAreaView>
  );
}