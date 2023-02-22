// Number

// function add(n1: number, n2: number) {
//   if (typeof n1 === 'number' && typeof n2 === 'number') {
//     throw new Error('Incorrect input!');
//   }
//   return n1 + n2;
// }

// const number1 = 5; 
// const number2 = 2.8;

// const result = add(number1, number2);
// console.log(result); // 7.8

// =======================================================


// String & Boolean

// function add(n1: number, n2: number, showResult: boolean, phrase: string) {
//  if (showResult) {
//   console.log(phrase + n1 + n2); // Result is: 52.8
//  } else {
//   return n1 + n2;
//  }
// }

// const number1 = 5;
// const number2 = 2.8;
// const printResult = true;
// const resultPhrase = "Result is:";

// const result = add(number1, number2, printResult, resultPhrase);

// =======================================================


// Object

// const person: {
//   name: string;
//   age: number;
// } = {
//   name: 'Lee',
//   age: 30,
// }

// console.log(person.name); // Lee
// console.log(person.age); // 30

// =======================================================


// Array

// const person = {
//   name: 'Lee',
//   age: 30,
//   hobbies: ['Sports', 'Cooking']
// };

// let favoriteActivities: string[];
// favoriteActivities = ['Sports'];

// console.log(person.name); // Lee

// for (const hobby of person.hobbies) {
//   console.log(hobby.toUpperCase()) // Sports Cooking
//   console.log(hobby.map()) // ERROR!!!
// }

// =======================================================


// Tuple: Fixed-length array. Example: [1, 2];

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'Lee',
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author']
// };

// person.role.push('admin'); 
// person.role[1] = 10;

// person.role = [0, 'admin', 'user'];

// =======================================================


// Enum: Automatically enumerated global constant identifiers. Example: enum {NEW, OLD};

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

// Enum makes easier to storage
// enum Role { ADMIN = 'ADMIN', READ_ONLY = 5, AUTHOR};

// const person = {
//   name: 'Lee',
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],
//   role: Role.ADMIN
// };

// if (person.role === Role.AUTHOR) {
//   console.log('is author'); // is author
// }

// =======================================================


// Any Types: * Any kind of value, no specific type assignment
// Whenever we use Any it will never yell

// let favoriteActivities: any[];
// favoriteActivities = ['Sports'];

// ========================================================================