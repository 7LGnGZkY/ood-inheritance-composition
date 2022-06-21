class LibraryCatalogue {
  constructor() {
    this.items = [];
  }

  addToStock(item) {
    this.items.push(item);
  }

  isNotAvailable(item) {
    return !this.items.includes(item);
  }
  checkIn(item) {
    if (this.isNotAvailable(item)) throw new Error("Item unavailable");
    return item.checkIn();
  }



module.exports = LibraryCatalogue;
