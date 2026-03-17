import { Item } from '../models/Item';

class ItemService {
  private items: Item[] = [];

  getAllItems(): Item[] {
    return this.items;
  }

 addItem(name: string): string | null {

  if (name.length <= 2) {
    return "O nome do jogo precisa ter mais de 2 caracteres";
  }

  const exists = this.items.find(
    item => item.name.toLowerCase() === name.toLowerCase()
  );

  if (exists) {
    return "Já existe um jogo com esse nome";
  }

  const newItem: Item = {
    id: Date.now().toString(),
    name
  };

  this.items.push(newItem);

  return null;
}
  removeItem(id: string) {
  this.items = this.items.filter(item => item.id !== id);
}

   updateItem(id: string, newName: string): string | null {

    if (newName.length <= 2) {
      return "O nome precisa ter mais de 2 caracteres";
  }

    const exists = this.items.find(
    item => item.name.toLowerCase() === newName.toLowerCase() && item.id !== id
  );

    if (exists) {
     return "Já existe um item com esse nome";
  }

     const item = this.items.find(item => item.id === id);

    if (item) {
      item.name = newName;
  }

  return null;
}
}

export default new ItemService();