'use strict';

//1. object initializers and methods

const loaf = {
  flour: 300,
  water: 210,
  hydration: function() {
      return (this.water / this.flour) * 100;
  }
};

console.log(loaf.flour);
console.log(loaf.water);
console.log(loaf.hydration());

////////////////////////////////////////////////////

//2. Iterating over an object's properties

const object = {
  foo: 1,
  bar: 2,
  fum: 3,
  quux: 4,
  spam: 5,
}
for (let key in object) {
    const value = object[key];
    console.log(`${key}: ${value}`);
}

/////////////////////////////////////////////////

//3. Arrays in objects

