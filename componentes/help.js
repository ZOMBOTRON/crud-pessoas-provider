
import { Text } from 'react-native-paper';
import { StyleSheet, SafeAreaView, Modal, TouchableOpacity } from 'react-native';
import { View } from 'react-native-web';


export default function help({ visible, setVisible }) {
    if (visible) {
        return (
            <Modal
                style={styles.modal}
                visible={visible}
            >
                <View>
                    <Text style={styles.text} variant="headlineLarge">
                        Integrantes:
                    </Text>
                    <Text style={styles.text}>
                        - Victoria Locatelli
                    </Text>
                    <Text style={styles.text}>
                        - Welton Moreira Borges Júnior
                    </Text>
                    <Text style={styles.text}>
                        - Felipe Nóbrega
                    </Text>
                    <Text style={styles.text}>
                        - Kauã Gabriel Martins Gomes
                    </Text>
                </View>
                <Text style={styles.text} variant="headlineLarge">
                    Propósito do App:
                </Text>
                <Text style={styles.text} >
                    O aplicativo Gerenciador de Contatos foi desenvolvido para facilitar o cadastro, visualização e gerenciamento de informações de contatos pessoais. Ele oferece uma interface intuitiva e
                    amigável para que os usuários possam armazenar e acessar
                    facilmente os detalhes de suas conexões pessoais.
                </Text>
                <Text style={styles.text} variant="headlineLarge">
                    Benefícios:
                </Text>
                <Text style={styles.text}>
                    Organização: Permite aos usuários manterem seus contatos pessoais organizados e acessíveis em um único local.
                    Eficiência: Facilita a edição, exclusão e busca de contatos, economizando tempo e esforço.
                    Personalização: Oferece recursos como filtragem e edição para adaptar as informações de contato às necessidades individuais dos usuários.
                    Transparência: A seção de informações sobre o aplicativo promove a transparência e confiança dos usuários ao fornecer detalhes relevantes sobre o aplicativo e seus desenvolvedores.
                </Text>
                <View style={styles.modalButton}>
                    <TouchableOpacity style={styles.button} onPress={() => { setVisible(!visible) }}>
                        <Text style={styles.textStyle}>ok</Text>
                    </TouchableOpacity>
                </View>

            </Modal>
        )
    } else {
        <></>
    }

}
const styles = StyleSheet.create({
    modal: {
        paddingTop: 30,
        backgroundColor: '#343a40',
        opacity: 0.4,
    },
    text: {
        color: "#000",
        margin: 10,
        textAlign: "left",
        textAlignVertical: "top",
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    button: {
        borderRadius: 20,
        backgroundColor: '#2196F3',
        padding: 10,
        elevation: 2
    },
    modalButton: {
        display: 'flex',
        alignItems: "center",
        alignContent: 'center',
        marginTop: 20
    }

});