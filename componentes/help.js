
import { Card, Button, Text } from 'react-native-paper';
import { StyleSheet, SafeAreaView } from 'react-native';


export default function help({ isOpen, setOpen }) {
    if (isOpen) {
        return (
            <Card style={styles.modal}>
                <Card.Actions style={styles.card}>
                    <Text style={styles.text}>
                        Para cadastrar uma pessoa basta
                        pressionar o botão, após cadastrar uma
                        pessoa é posssível editar e remover.
                    </Text>
                    <Button style={styles.Button} onPress={() => setOpen(!isOpen)}>Ok</Button>
                </Card.Actions>
            </Card>
        )
    } else {
        <></>
    }

}
const styles = StyleSheet.create({
    modal: {
        flex: 1,



    },
    card: {
        flex: 1,
        flexDirection: "column",

    },
    text: {
        paddingTop: 50,
        textAlign: "center",
        marginBottom: 80,
        textAlignVertical: "top"
    },
    Button: {
        alignSelf: "flex-end"
    }
});