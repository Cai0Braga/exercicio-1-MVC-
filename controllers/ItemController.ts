import { useState, useEffect } from 'react';
import { Item } from '../models/Item';
import ItemService from '../services/ItemService';

export const useItemController = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [dialogVisible, setDialogVisible] = useState<boolean>(false);

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = () => {
    const allItems = ItemService.getAllItems();
    setItems([...allItems]);
  };

  const addItem = (name: string) => {
    const error = ItemService.addItem(name);

if (error) {
  alert(error);
  return;
}
    loadItems();
    setDialogVisible(false);
  };

  const openDialog = () => {
    setDialogVisible(true);
  };

  const closeDialog = () => {
    setDialogVisible(false);
  };

  return {
    items,
    dialogVisible,
    addItem,
    openDialog,
    closeDialog,
  };
};