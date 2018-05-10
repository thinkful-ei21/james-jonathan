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

myArr.forEach(function(item) {
  console.log(`This is my name: ${item.name} and this my job: ${item.jobTitle}!`);
})

//for (let i = 0; i < myArr.length; i++) {
 // console.log(`This is my name: ${myArr[i].name} and this my job: ${myArr[i].jobTitle}!`);
//}

/////////////////////////////////////////////////

// 5. Properties that aren't there

for (let i = 0; i < myArr.length; i++) {
    const person = myArr[i];
    if (person.jobTitle !== 'Owner') {
      person.boss = myArr[i-1].name;
    }
    if (person.jobTitle === 'Owner') {
      //person.boss = 'nobody';
      console.log(`${person.jobTitle} ${person.name} reports to nobody.`)
    }
    else{
    console.log(`${person.jobTitle} ${person.name} reports to ${person.boss}.`);
    }  
}


//////////////////////////////////////////////////////

// 6. Cracking the code

const cipher = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  allOthers: ' '
}

function decodeWord(word) {
  let firstLetter = word.charAt(0);
  if (firstLetter in cipher) {
      return word.charAt(cipher[firstLetter]);  
   }
  else {
      return cipher.allOthers;
  }
}

function decode(text) {
  let wordList = text.split(' ');
  let solution = '';
  for (let i = 0; i < wordList.length; i++) {
      solution = solution + decodeWord(wordList[i]);
  }
  return solution;
}
console.log (decode('craft block argon meter bells brown croon droop'));

/////////////////////////////////////////////

//7. Factory Functions with LOTR

const createCharacters = (name, nickname, race, origin, attack, defence) => {
  return {
    name,
    nickname,
    race,
    origin,
    attack,
    defence,
    describe: function () {
      console.log(`${this.name} is a ${this.race} from ${this.origin}.`);
    }, 
    evaluateFight: function (character) {
      console.log(`"Your opponent takes ${(this.attack - character.defence < 0) ? 0: this.attack - character.defence} damage 
and you receive ${(character.attack - this.defence < 0) ? 0: character.attack - this.defence} damage"`);
    },
  } 
}
const gandalf = createCharacters('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6);
const bilbo = createCharacters('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1);

//console.log(gandalf.describe());
console.log(bilbo.evaluateFight(gandalf));
