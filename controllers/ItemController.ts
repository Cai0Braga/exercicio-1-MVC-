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

  const removeItem = (id: string) => {
    ItemService.removeItem(id);
    loadItems();
  }; 

   const updateItem = (id: string, name: string) => {
  const error = ItemService.updateItem(id, name);

    if (error) {
      alert(error);
      return;
   }

  loadItems();
};

  return {
  items,
  dialogVisible,
  addItem,
  removeItem,
  updateItem,
  openDialog,
  closeDialog,
};
};