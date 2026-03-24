import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import ItemService from '../services/ItemService';

export default function ItemView({ navigation }: any) {
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    setItems([...ItemService.getItems()]);
  }, []);

  function atualizarLista() {
    setItems([...ItemService.getItems()]);
  }

  function excluir(index: number) {
    ItemService.deleteItem(index);
    atualizarLista();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Jogos Favoritos</Text>

      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.item}>
            <Text>{item}</Text>
            <Button title="Excluir" onPress={() => excluir(index)} />
          </View>
        )}
      />

      <Button
        title="Adicionar Jogo"
        onPress={() => {
          navigation.navigate('Adicionar');
          atualizarLista();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  item: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    borderRadius: 8,
  },
});