import { View,
  StyleSheet,
  FlatList} from 'react-native';
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
import { useState } from 'react';
import Editar from './editar';

/**
 * Este componente apresenta a lista de pessoas cadastradas.
 *
 * Cada item da lista, ao ser selecionado, apresenta um retorno
 * visual, para indicar que o item está selecionado, e
 * um botão que permite excluir o item da lista de pessoas.
 */
export default function Lista() {
  const {
    pessoas,
    pessoaSelecionada,
    selecionarPessoa,
    removerPessoa,
  } = useAppContext();

  const [modalVisible, setModalVisible] = useState(false);
  const [nome , setNome] = useState('');

  const { colors, isV3 } = useTheme();
  const safeArea = useSafeAreaInsets();


  /**
   * Esta função é utilizada para renderizar um item da lista.
   * Se o item da lista estiver selecionado, então adota
   * uma cor de fundo diferente. Além disso, se o item
   * estiver selecionado, apresenta um botão que permite
   * excluir da lista de pessoas.
   */
  const renderItem = ({ item }) => {
    const selecionado = item.id == pessoaSelecionada?.id;


    const Botoes = () => {

      return (
        <>
          <IconButton
            key={item.id}
            icon="account-edit-outline"
            mode="contained"
            onPress={() => {setModalVisible(true), setNome(item.nome)}}
          />
          <IconButton
            icon="trash-can-outline"
            mode="contained"
            onPress={() => removerPessoa(pessoaSelecionada)}
          />
        </>
      );
    };

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
      ></List.Item>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <List.Section>
        <List.Subheader>
          <View style={styles.cabecalho}>
            <Text style={styles.cabecalho_titulo} variant="bodyLarge">
              Pessoas cadastradas
            </Text>
            {pessoas?.length > 0 && (
              <Text variant="bodySmall">
                Pressione um item da lista para selecionar e outra vez para
                remover a seleção
              </Text>
            )}
          </View>
        </List.Subheader>
      </List.Section>
      <FlatList
        data={pessoas}
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
      setNome={setNome} />
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
  }
});
