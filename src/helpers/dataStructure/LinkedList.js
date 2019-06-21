class Node {
  constructor(element) {
    this.element  = element;
    this.next = null
  }
}

export class LinkedList{
  constructor() {
    this.length = 0;
    this.head = null
  }

  append(element){
    let node = new Node(element),
        current;

    if (this.head === null){
      this.head = node;
    } else {
      current = this.head;
      while(current.next){
        current = current.next;
      }
      current.next = node;
    }
    
    this.length++;
  };
  insert(position, element){};
  removeAt(position){};
  remove(element){};
  indexOf(element){};
  isEmpty(){};
  size(){};
  getHead(){};
  toString(){};
  print(){};
}