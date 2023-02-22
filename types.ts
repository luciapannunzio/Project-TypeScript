// Union Types

// function combine(input1: number | string, input2: number | string) {
//   let result;
//   if (typeof input1 === 'number' && typeof input2 === 'number') { 
//     result = input1 + input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }
//   return result;
// }

// const combinedAges = combine(30, 26);
// console.log(combinedAges);

// const combinedNames = combine('Max', 'Anna');
// console.log(combinedNames);


// ========================================================================

// Literal types


// function combine(
//   input1: number | string, 
//   input2: number | string,
//   resultConversion: 'as-number' | 'as-text' // 2 possible literal types
//   ) {
//   let result;
//   if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') { 
//     result = +input1 + +input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }
//   return result;
//   // if (resultConversion === 'as-number') {
//   //   result +result; // the + convert as a number, parseFloat is the same
//   //   return result.toString();
//   // }
// }

// const combinedAges = combine(30, 26, 'as-number');
// console.log(combinedAges); // 56

// const combinedStringAges = combine('30', '26', 'as-number');
// console.log(combinedStringAges); // 56

// const combinedNames = combine('Max', 'Anna', 'as-text');
// console.log(combinedNames); // MaxAnna


// ========================================================================

// Type Aliases / Custom Types

// type Combinable = number | string; // we assign the types and then we can use it
// type ConversionDescriptor = 'as-number' | 'as-text';

// function combine(
//   input1: Combinable, 
//   input2: Combinable, 
//   resultConversion: ConversionDescriptor 
//   ) {
//   let result;
//   if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') { 
//     result = +input1 + +input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }
//   return result;
// }

// const combinedAges = combine(30, 26, 'as-number');
// console.log(combinedAges); // 56

// const combinedNames = combine('Max', 'Anna', 'as-text');
// console.log(combinedNames); // MaxAnna


// ========================================================================

// Function Return Types & "Void"


// ========================================================================




// ========================================================================