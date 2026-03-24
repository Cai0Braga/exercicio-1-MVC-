class ItemService {
  items: string[] = [];

  getItems() {
    return this.items;
  }

  addItem(nome: string) {
    this.items.push(nome);
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }
}

export default new ItemService();