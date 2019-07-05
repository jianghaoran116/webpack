class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }

  toString() {
    return '[' + this.key + ' - ' + this.value + ']';
  }
}

export class HashLinearProbing {

  constructor() {
    this.table = [];
  }

  loseloseHashCode (key) {
    var hash = 0;
    for (var i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 37;
  };

  hashCode(key) {
    return this.loseloseHashCode(key);
  };

  put(key, value) {
    var position = this.hashCode(key);
    console.log(position + ' - ' + key);

    if (this.table[position] == undefined) {
      this.table[position] = new ValuePair(key, value);
    } else {
      var index = ++position;
      while (this.table[index] != undefined) {
        index++;
      }
      this.table[index] = new ValuePair(key, value);
    }
  };

  get(key) {
    var position = this.hashCode(key);

    if (this.table[position] !== undefined) {
      if (this.table[position].key === key) {
        return this.table[position].value;
      } else {
        var index = ++position;
        while (this.table[index] === undefined || this.table[index].key !== key) {
          index++;
        }
        if (this.table[index].key === key) {
          return this.table[index].value;
        }
      }
    }
    return undefined;
  };

  remove(key) {
    var position = this.hashCode(key);

    if (this.table[position] !== undefined) {
      if (this.table[position].key === key) {
        this.table[position] = undefined;
      } else {
        var index = ++position;
        while (this.table[index] === undefined || this.table[index].key !== key) {
          index++;
        }
        if (this.table[index].key === key) {
          this.table[index] = undefined;
        }
      }
    }
  };

  print() {
    for (var i = 0; i < this.table.length; ++i) {
      if (this.table[i] !== undefined) {
        console.log(i + ' -> ' + this.table[i].toString());
      }
    }
  };
}