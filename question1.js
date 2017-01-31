class Hash {
  constructor(object) {
    this.object = object;
  }
  isEmpty() {
    Object.keys(this.object).length === 0 ? console.log(true) : console.log(false);
  }
  merge(mergehash) {
    let nestedObject = Object.assign({}, this.object);
    Object.assign(nestedObject, mergehash.object);
    return new Hash(nestedObject);
  }
  hasKey(searchkey) {
    for (let key in this.object) {
      if (key === searchkey){
       return true;
      }
    }
   return false;
  }
  invert(hash) {
    let obj = {};
    for (let prop in this.object) {
      if(this.object.hasOwnProperty(prop)) {
        obj[String(this.object[prop])] = String(prop);
      }
    }
  let newHash = new Hash(obj);
  return newHash;
  }
  inspect(hash) {
    let arr = [];
    for (let prop in this.object) {
      arr.push(`${prop} => ${this.object[prop]}`);
    }
    let string = `{${arr.join(", ")}}`
    return string;
  }
  keys(hash) {
    let arr = [];
    for (let prop in this.object) {
      arr.push(prop);
    }
    return arr;
  }
  values(hash) {
    let arr = [];
    for (let prop in this.object) {
      arr.push(this.object[prop]);
    }
    return arr;
  }
}


let emptyHash = new Hash({});
let hash = new Hash({a: 1, b: 2, c: 3});
let merged = hash.merge(new Hash({bob: 'yo', jane: 'ya'}));
