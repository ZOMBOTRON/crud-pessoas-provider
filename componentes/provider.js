import { useState, useContext, createContext } from 'react';

const AppContext = createContext();

/**
 * Este componente funciona como o provider do contexto `AppContext`.
 *
 * São fornecidos estes recursos:
 * * a lista de pessoas
 * * uma função para adicionar uma pessoa na lista
 * * uma função para remover uma pessoa da lista
 * * um evento de pessoa adicionada
 * * um evento de pessoa removida
 * * um evento de pessoa selecionada
 */
export function AppProvider({
  children,
  onAdicionarPessoa,
  onSelecionarPessoa,
  onRemoverPessoa,
  onEditarPessoa,
}) {
  const [pessoas, setPessoas] = useState([]);
  const [pessoaSelecionada, setPessoaSelecionada] = useState();

  /**
   * Esta função recebe um parâmetro `nome`, cria um objeto
   * com `id` igual ao timestamp atual e o adiciona
   * na lista de pessoas.
   *
   * Dispara o evento `onAdicionarPessoa`.
   *
   * @param nome String
   */
  const adicionarPessoa = (nome) => {
    const iniciais = nome
      .split(' ')
      .map((n) => n[0]?.toUpperCase())
      .join('');
    const id = new Date().getTime();
    const pessoa = { id, nome, iniciais };
    const lista = [...pessoas, pessoa];
    setPessoas(lista);
    if (onAdicionarPessoa) {
      onAdicionarPessoa(pessoa);
    }
  };

  /**
   * Esta função recebe um parâmetro `pessoa`, identifica
   * o item correspondente na lista de pessoas e,
   * se for encontrado, o remove da lista.
   *
   * Dispara o evento `onRemoverPessoa`.
   *
   * @param pessoa `{id, nome}`
   */
  const removerPessoa = (pessoa) => {
    const lista = pessoas.filter((p) => p.id != pessoa.id);
    setPessoas(lista);
    if (pessoaSelecionada?.id == pessoa.id) {
      setPessoaSelecionada(null);
    }
    if (onRemoverPessoa) {
      onRemoverPessoa(pessoa);
    }
  };

  /**
   * Esta função recebe um parâmetro `pessoa` e determina
   * que o item correspondente na lista de pessoas está selecionado.
   *
   * Dispara o evento `onSelecionarPessoa`
   */
  const selecionarPessoa = (pessoa) => {
    if (pessoaSelecionada?.id == pessoa.id) {
      setPessoaSelecionada(null);
    } else {
      setPessoaSelecionada(pessoa);
    }
    if (onSelecionarPessoa) {
      onSelecionarPessoa(pessoa);
    }
  };

  /**
   * @description Esta função recebe um parâmetro `pessoaSelecionada` e `nomeNovaPessoa`.
   *
   * @param pessoaSelecionada `{id, nome}`
   * @param nomeNovaPessoa String
   * */
  const editarPessoa = (pessoaSelecionada, nomeNovaPessoa) => {
    console.log(pessoaSelecionada, nomeNovaPessoa);
    const iniciais = nomeNovaPessoa
      .split(' ')
      .map((n) => n[0]?.toUpperCase())
      .join('');
    const lista = pessoas.map((p) => {
      if (p.id == pessoaSelecionada.id) {
        p.nome = nomeNovaPessoa;
        p.iniciais = iniciais;
      }
      return p;
    });
    setPessoas(lista);
    if (onEditarPessoa) {
      onEditarPessoa(pessoaSelecionada);
    }
  };

  return (
    <AppContext.Provider
      value={{
        pessoas,
        adicionarPessoa,
        removerPessoa,
        selecionarPessoa,
        pessoaSelecionada,
        editarPessoa,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
