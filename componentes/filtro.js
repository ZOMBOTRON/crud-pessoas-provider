import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { useAppContext } from './provider';

export default function Filtro({ onFilterChange }) {
  const { pessoas, pessoaSelecionada, selecionarPessoa, removerPessoa, editarPessoa } =
  useAppContext();
  const [filtro, setFiltro] = useState('');

  const handleFilterChange = (text) => {
    setFiltro(text);
    onFilterChange(text);
  };

  return pessoas.length > 0 ? (
    <Searchbar
      placeholder="Buscar por nome"
      value={filtro}
      onChangeText={handleFilterChange}
    />
  ) : null;
}