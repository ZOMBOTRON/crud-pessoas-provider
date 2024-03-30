
import { Modal,  Text} from 'react-native-paper';
import { StyleSheet, SafeAreaView } from 'react-native';
import { View } from 'react-native-web';


export default function help({ visible, }) {
    if (visible) {
        return (
            <Modal 
                style={styles.modal}
                visible ={visible}
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
                    - Kauan
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

            </Modal>
        )
    } else {
        <></>
    }

}
const styles = StyleSheet.create({
    modal: {
        paddingTop:30,
        flex: 1,
        backgroundColor:"#343a40"
    },
    text: {    
        color:"#fff",
        margin: 10,
        textAlign: "left",
        textAlignVertical: "top",  
    }
  
});