class ArrayList {
    constructor() {
      this.array = [];
    }
  
    add(element) {
      this.array.push(element);
    }
  
    remove(index) {
      if (index < 0 || index >= this.array.length) {
        throw new Error('Index out of bounds');
      }
      return this.array.splice(index, 1)[0];
    }
  
    get(index) {
      if (index < 0 || index >= this.array.length) {
        throw new Error('Index out of bounds');
      }
      return this.array[index];
    }
  
    size() {
      return this.array.length;
    }
  
    isEmpty() {
      return this.array.length === 0;
    }
  }
  module.exports=ArrayList