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
};
for (let key in object) {
  const value = object[key];
  console.log(`${key}: ${value}`);
}

/////////////////////////////////////////////////

//3. Arrays in objects

const myObj = {
  meals: ['breakfast', 'second breakfast', 'elevenses',
    'lunch', 'afternoon tea', 'dinner', 'supper'],
};
console.log(myObj.meals[3]);

/////////////////////////////////////////////////

//4. Arrays of objects

const myArr = [
  {
    name: 'Jon',
    jobTitle: 'Owner',
  },
  {
    name: 'James',
    jobTitle: 'VP',
  },
  {
    name: 'Rich',
    jobTitle: 'Teacher',
  },
  {
    name: 'Juancarlos',
    jobTitle: 'Mentor',
  },
  {
    name: 'Butch',
    jobTitle: 'Butcher',
  }
];

for (let i = 0; i < myArr.length; i++) {
  console.log(`This is my name: ${myArr[i].name} and this my job: ${myArr[i].jobTitle}!`);
}

/////////////////////////////////////////////////
// 5. Properties that aren't there

for (let i = 0; i < myArr.length; i++) {
    const person = myArr[i];
    if (person.jobTitle === 'Owner') {
        person.boss = 'nobody';
    }
    if (person.jobTitle !== 'Owner') {
        person.boss = myArr[i-1].name;
    }

    console.log(`${person.jobTitle} ${person.name} reports to ${person.boss}.`);
}