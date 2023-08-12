// Question 1
"" + 1 + 0; //string at the beginning
"" - 1 + 0; //string at the beginning
true + false; //true is 1, false is 0, 1+0=1
!true; //false ~
6 / "3"; //2~
"2" * "3"; //6~
4 + 5 + "px"; //9px~
"$" + 4 + 5; //$45~
"4" - 2; //2~
" -9 " + 5; // -9 5~
" -9 " - 5; //-14~
null + 1; //1~
undefined + 1; //undefined x  (NaN)
undefined == null; //true
undefined === null; //false
" \t \n" - 2; //
console.log(" \t \n" - 2);

// "" + 1 + 0:
// The + operator, when used with strings,
// performs string concatenation. Here,
// the empty string "" is concatenated with the number 1,
// resulting in "1".
// Then, the string "1" is concatenated with the number 0,
// resulting in "10".

// "" - 1 + 0:
// When the - operator is used with non-numeric strings,
// JavaScript tries to convert the strings to numbers.
// An empty string "" is converted to the number 0.
// So, 0 - 1 results in -1, and then -1 + 0 results in -1.

// true + false:
// JavaScript automatically converts boolean values to numbers in arithmetic operations.
// true is converted to 1, and false is converted to 0.
// So, 1 + 0 results in 1.

// !true:
// The ! operator is the logical NOT operator. It negates the boolean value. Since true is negated, the result is false.

// 6 / "3":
// The division operator / performs numeric division. The string "3" is automatically converted to the number 3. So, 6 / 3 results in 2.

// "2" * "3":
// The * operator performs multiplication. Both "2" and "3" are automatically converted to numbers. So, 2 * 3 results in 6.

// 4 + 5 + "px":
// The addition operator + performs addition if both operands are numbers. However, if any operand is a string, it performs string concatenation. The numbers 4 and 5 are added first to get 9, and then "px" is concatenated to the result, resulting in "9px".

// "$" + 4 + 5:
// Similar to the previous example, the string "$" is concatenated with the number 4 to get "$4", and then "5" is concatenated to the result, resulting in "$45".

// "4" - 2:
// The - operator tries to convert both operands to numbers. The string "4" is converted to the number 4, and then 4 - 2 results in 2.

// " -9 " + 5:
// The string " -9 " is concatenated with the number 5, resulting in " -9 5".

// " -9 " - 5:
// Similar to the previous examples, the string " -9 " is converted to the number -9, and then -9 - 5 results in -14.

// null + 1:
// The + operator converts null to 0 in numeric operations. So, 0 + 1 results in 1.

// undefined + 1:
// Similar to the previous examples, the + operator converts undefined to NaN (Not-a-Number) in numeric operations. So, NaN + 1 still results in NaN.

// undefined == null:
// In JavaScript, undefined and null are loosely equal (type-coercion), so undefined == null evaluates to true.

// undefined === null:
// The === operator checks for both value and type equality. Since undefined and null have different types, undefined === null evaluates to false.

// " \t \n" - 2:
// The string " \t \n" contains whitespace characters. When used with the - operator, JavaScript attempts to convert it to a number, but since it's not a valid numeric string, the result is NaN.

// console.log(" \t \n" - 2):
// This line of code attempts the same operation as the previous expression, but it also calls the console.log() function to display the result. Since the result is NaN, it will be displayed in the console. However, the exact behavior might vary depending on where this code is executed (browser console, Node.js, etc.).

// Question 3
if (0) console.log("#1 zero is true");
if ("0") console.log("#2 zero is true");
if (null) console.log("null is true");
if (-1) console.log("negative is true");
if (1) console.log("positive is true");

//  Question 4
let a = 10,
  b = 3;
let result = `${a} + ${b} is `;
if (a + b < 10 ? true : false) {
  result += "less than 10";
} else {
  result += "greater than 10";
}
console.log(result);

//  Question 5
getGreeting = () => {
  return "Hello " + "!";
};
console.log(getGreeting());

// Question 6
const westley = {
  name: "Westley",
  numFingers: 5,
};
const rugen = {
  name: "Count Rugen",
  numFingers: 6,
};
const inigo = {
  firstName: "Inigo",
  lastName: "Montoya",
  greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
    console.log(greeting + this.getCatchPhrase(person));
  },
  getCatchPhrase: (person) =>
    person.numFingers === 6 ? "Prepare to die" : "nice to meet you",
};
inigo.greeting(westley);
inigo.greeting(rugen);

// Question 7
const basketballGame = {
  score: 0,
  freeThrow() {
    this.score++;
    return this;
  },
  basket() {
    this.score += 2;
    return this;
  },
  threePointer() {
    this.score += 3;
    return this;
  },
  halfTime() {
    console.log("Halftime score is " + this.score);
    return this;
  },
};

//modify each of the above object methods to enable function chaining as below:
basketballGame
  .basket()
  .freeThrow()
  .freeThrow()
  .basket()
  .threePointer()
  .halfTime();

// Question 8
const sydney = {
  name: "Sydney",
  population: 5_121_000,
  state: "NSW",
  founded: "26 January 1788",
  timezone: "Australia/Sydney",
};
function printSydney(object) {
  for (let cityInfo in object) {
    console.log(`name:${cityInfo}, value:${object[cityInfo]}`);
  }
}
printSydney(sydney);

const artist = {
  name: `Paul Yore`,
  year_born: 1988,
  location: `Australia`,
  movement: `Textile arts, installation art, queer art`,
};
function printArtist(object) {
  for (let artistInfo in object) {
    console.log(`name:${artistInfo}, value:${object[artistInfo]}`);
  }
}
printArtist(artist);

// Question 9
let dog1 = "Bingo";
let dog2 = dog1;
dog2 = "mango";
console.log(dog1, dog2);

let cat1 = { name: "Fluffy", breed: "Siberian" };
let cat2 = cat1;
cat2.name = "crumpet";
console.log(cat1);

//  Question 10
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;
  return this;
}
let person1 = new Person("Amber", 18);
let person2 = new Person("Bella", 5);
console.log(person1, person2);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
let person1 = new Person("Mary", 40);
let person2 = new Person("Jack", 60);
console.log(person1, person2);
