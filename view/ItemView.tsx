import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
  Alert,
} from 'react-native';
import { Item } from '../models/Item';
import { useItemController } from '../controllers/ItemController';

export const ItemView: React.FC = () => {
  const {
    items,
    dialogVisible,
    addItem,
    removeItem,
    updateItem,
    openDialog,
    closeDialog
  } = useItemController();

  const [inputText, setInputText] = useState<string>('');
  const [editingItem, setEditingItem] = useState<Item | null>(null);

  const handleAddItem = () => {
    if (!inputText.trim()) {
      Alert.alert('Erro', 'Digite o nome do jogo');
      return;
    }

    if (editingItem) {
      updateItem(editingItem.id, inputText.trim());
      setEditingItem(null);
    } else {
      addItem(inputText.trim());
    }

    setInputText('');
  };

  const handleEdit = (item: Item) => {
    setEditingItem(item);
    setInputText(item.name);
    openDialog();
  };

  const renderItem = ({ item }: { item: Item }) => (
    <View style={{
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>

      <Text style={{ fontSize: 16 }}>{item.name}</Text>

      <View style={{ flexDirection: 'row', gap: 10 }}>

        <TouchableOpacity
          onPress={() => handleEdit(item)}
          style={{ backgroundColor: '#ffc107', padding: 8, borderRadius: 4 }}
        >
          <Text>Editar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => removeItem(item.id)}
          style={{ backgroundColor: '#dc3545', padding: 8, borderRadius: 4 }}
        >
          <Text style={{ color: 'white' }}>Excluir</Text>
        </TouchableOpacity>

      </View>
    </View>
  );

  return (
    <View style={{ flex: 1, padding: 16 }}>

      <Text style={{
        fontSize: 26,
        fontFamily: 'monospace',
        textAlign: 'center',
        color: '#222',
        marginBottom: 35,
        marginTop: 10
      }}>
         Lista de Jogos Favoritos
      </Text>

      <TouchableOpacity
        onPress={() => {
          setEditingItem(null);
          openDialog();
        }}
        style={{
          backgroundColor: '#007bff',
          padding: 14,
          borderRadius: 8,
          marginBottom: 16,
        }}
      >
        <Text style={{ color: 'white', textAlign: 'center' }}>
          Adicionar Jogo
        </Text>
      </TouchableOpacity>

      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text style={{ textAlign: 'center', marginTop: 20 }}>
            Nenhum jogo adicionado
          </Text>
        }
      />

      <Modal visible={dialogVisible} transparent animationType="slide">
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}>
          <View style={{
            width: 300,
            padding: 20,
            backgroundColor: 'white',
            borderRadius: 8,
          }}>
            <Text style={{ fontSize: 18, marginBottom: 16 }}>
              {editingItem ? 'Editar Jogo' : 'Adicionar Jogo'}
            </Text>

            <TextInput
              value={inputText}
              onChangeText={setInputText}
              placeholder="Nome do jogo"
              style={{
                borderWidth: 1,
                borderColor: '#ccc',
                padding: 8,
                marginBottom: 16,
                borderRadius: 4,
              }}
            />

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableOpacity
                onPress={() => {
                  setEditingItem(null);
                  closeDialog();
                }}
                style={{ padding: 12, backgroundColor: '#ccc', borderRadius: 4, flex: 0.45 }}
              >
                <Text style={{ textAlign: 'center' }}>Cancelar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={handleAddItem}
                style={{ padding: 12, backgroundColor: '#007bff', borderRadius: 4, flex: 0.45 }}
              >
                <Text style={{ color: 'white', textAlign: 'center' }}>
                  {editingItem ? 'Salvar' : 'Adicionar Jogo'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};