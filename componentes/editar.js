import { Modal, Pressable, Text, TextInput, View, StyleSheet } from 'react-native';
import { useAppContext } from './provider';
function Editar(
  {modalVisible,
  setModalVisible,
  nome,
  setNome}
) {
  const {
    pessoaSelecionada,
    editarPessoa,
  } = useAppContext();
  return (
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Editar nome da pessoa selecionada
            </Text>
            <TextInput
              style={styles.editTextInput}
              value={nome}
              onChangeText={(text) => setNome(text)}
            />
            <View style={{display:'flex',flexDirection:'row',gap:20}}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Cancelar</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => (setModalVisible(!modalVisible),editarPessoa(pessoaSelecionada,nome))}>
              <Text style={styles.textStyle}>Salvar</Text>
            </Pressable>
            </View>
          </View>
        </View>
      </Modal>
  )
}

export default Editar;

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      // marginTop: 22,
    },
    editContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    editTextInput: {
        borderWidth: 1,
        padding: 10,
        marginBottom: 20,
    },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
})