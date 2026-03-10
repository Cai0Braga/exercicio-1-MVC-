import { Item } from '../models/Item';

class ItemService {
  private items: Item[] = [
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
  ];

  getAllItems(): Item[] {
    return this.items;
  }

 addItem(name: string): string | null {

  if (name.length <= 2) {
    return "O nome precisa ter mais de 2 caracteres";
  }

  const exists = this.items.find(
    item => item.name.toLowerCase() === name.toLowerCase()
  );

  if (exists) {
    return "Já existe um item com esse nome";
  }

  const newItem: Item = {
    id: Date.now().toString(),
    name
  };

  this.items.push(newItem);

  return null;
}
}

export default new ItemService();