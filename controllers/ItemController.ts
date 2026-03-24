import ItemService from '../services/ItemService';

class ItemController {
  getItems() {
    return ItemService.getItems();
  }

  addItem(nome: string) {
    ItemService.addItem(nome);
  }

  deleteItem(index: number) {
    ItemService.deleteItem(index);
  }
}

export default new ItemController();