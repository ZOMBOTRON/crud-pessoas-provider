import { StyleSheet, SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Appbar, Snackbar } from 'react-native-paper';
import { useState } from 'react';

import { AppProvider } from './componentes/provider';
import Formulario from './componentes/formulario';
import Lista from './componentes/lista';
import Help from './componentes/help';

export default function App() {
  const [notificacaoVisivel, setNotificacaoVisivel] = useState(false);
  const onDismissNotificacao = () => setNotificacaoVisivel(false);
  const onAdicionarPessoa = () => setNotificacaoVisivel(true);
  const [open, setOpen] = useState(false);
  

  return (
    <SafeAreaProvider>
      <AppProvider
        onAdicionarPessoa={onAdicionarPessoa}
        onSelecionarPessoa={(pessoa) => console.log('selecionado', pessoa)}
        onRemoverPessoa={(pessoa) => console.log('removido', pessoa)}
        onEditarPessoa={(pessoa) => console.log('editado', pessoa)}
      >
        <SafeAreaView style={styles.container}icon="help-circle"
        onRemoverPessoa={(pessoa) => console.log('removido', pessoa)}>
          <Help style={styles.container} isOpen ={open} setOpen={setOpen} />
          <Appbar.Header>
            <Appbar.Content title="Cadastro de pessoas" />
            <Appbar.Action icon="help-circle" onPress={() => setOpen(!open)}/>
          </Appbar.Header>

          <Formulario />
          <Lista />

          <Snackbar
            visible={notificacaoVisivel}
            onDismiss={onDismissNotificacao}
            action={{
              label: 'OK',
            }}
          >
            Cadastro realizado com sucesso!
          </Snackbar>
        </SafeAreaView>
      </AppProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
});
