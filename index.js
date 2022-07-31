class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  add(item) {
    this.items.push(item);
    this.items.sort((n1, n2) => n1 - n2)
    this.length = this.items.length
  }
  get(pos) {
    if (pos>=0 && pos<=this.length-1) {
      return this.items[pos]
    }
    else{
      throw new Error('OutOfBounds')
    }
  }
  max() {
    if (this.length!=0) {
      return this.items[this.length-1]

    } else {
      throw new Error('EmptySortedList')    }
  }
  min() {
    if (this.length!=0) {
      return this.items[0]

    } else {
      throw new Error('EmptySortedList')    }
  }
  avg() {
    if (this.length!=0) {
      return this.sum()/this.length

    } else {
      throw new Error('EmptySortedList')    }  
  }

  sum() {
    if (this.length!=0) {
     let s = this.items.reduce((s,ele)=>s+ele)
     return s
    } else {
      return 0    }
  }
  
};

module.exports = SortedList;
