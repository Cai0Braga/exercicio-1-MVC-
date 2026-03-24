import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import ItemService from '../services/ItemService';

export default function AddItem({ navigation }: any) {
  const [nome, setNome] = useState('');

  function salvar() {
    if (nome.trim() === '') return;

    ItemService.addItem(nome);
    navigation.navigate('Lista');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Jogo</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o nome do jogo"
        value={nome}
        onChangeText={setNome}
      />

      <Button title="Salvar" onPress={salvar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 10,
    marginBottom: 20,
    borderRadius: 8,
  },
});