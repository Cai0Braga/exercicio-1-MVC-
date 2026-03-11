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
}

export default new ItemService();