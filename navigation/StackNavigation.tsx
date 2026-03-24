import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ItemView from '../view/ItemView';
import AddItem from '../view/AddItem';

const Stack = createNativeStackNavigator();

export default function StackNavigation(): any {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Lista"
        component={ItemView}
        options={{ title: 'Lista de Jogos' }}
      />

      <Stack.Screen
        name="Adicionar"
        component={AddItem}
        options={{ title: 'Adicionar Jogo' }}
      />
    </Stack.Navigator>
  );
}