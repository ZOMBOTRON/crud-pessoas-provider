import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TextInput,
} from 'react-native';
import {
  List,
  Text,
  IconButton,
  Divider,
  useTheme,
  Avatar,
} from 'react-native-paper';
import { useAppContext } from './provider';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Editar from './editar';
import Remover from './remover';
export default function Lista() {
  const {
    pessoas,
    pessoaSelecionada,
    selecionarPessoa,
    
  } = useAppContext();

  const [modalVisible, setModalVisible] = useState(false);
  const [visible, setVisible] = useState(false);
  const [nome, setNome] = useState('');
  const [searchText, setSearchText] = useState('');

  const { colors, isV3 } = useTheme();
  const safeArea = useSafeAreaInsets();

  const renderItem = ({ item }) => {
    const selecionado = item.id === pessoaSelecionada?.id;

    const Botoes = () => (
      <>
        <IconButton
          key={item.id}
          icon="account-edit-outline"
          mode="contained"
          onPress={() => {
            setModalVisible(true);
            setNome(item.nome);
          }}
        />
        <IconButton
          icon="trash-can-outline"
          mode="contained"
          onPress={() => {
            setVisible(!visible);
            console.log(pessoaSelecionada)
          }}
        />
      </>
    );

    return (
      <>
        <List.Item
          title={item.nome}
          style={selecionado && styles.item_selecionado}
          onPress={() => selecionarPessoa(item)}
          left={() => (
            <View style={styles.avatar}>
              <Avatar.Text size={40} label={item.iniciais} />
            </View>
          )}
          right={selecionado && Botoes}
        />
      </>
    );
  };

  const filteredPessoas = pessoas.filter(
    pessoa => pessoa.nome.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {pessoas?.length > 0 && (
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar por nome"
          onChangeText={setSearchText}
          value={searchText}
        />
      )}
      <FlatList
        data={filteredPessoas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={Divider}
        ListEmptyComponent={() => (
          <Text variant="bodyMedium" style={styles.lista_mensagem_vazio}>
            Nenhuma pessoa cadastrada até o momento
          </Text>
        )}
      />
      <Editar
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        nome={nome}
        setNome={setNome}
      />
      <Remover
        pessoaSelecionada={pessoaSelecionada}
        visible={visible}
        setVisible={setVisible}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, minHeight: 200 },
  lista_mensagem_vazio: { marginHorizontal: 16 },
  cabecalho: {
    flex: 1,
    flexDirection: 'column',
  },
  cabecalho_titulo: {
    fontWeight: 'bold',
  },
  item_selecionado: {
    backgroundColor: 'lightgray',
  },
  avatar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
});
