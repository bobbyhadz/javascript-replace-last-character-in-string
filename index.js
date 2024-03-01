// EXAMPLE 1 - Replace the last character in a String in JavaScript

const str = 'bobbyhadz.com';

const replaced = str.slice(0, -1) + '_';
console.log(replaced); // 👉️ bobbyhadz.co_

// ------------------------------------------------------------------

// // EXAMPLE 2 - Replace the last character in a String using String.replace()

// const str = 'Hello World.';

// const replaced = str.replace(/.$/, '!');
// console.log(replaced); // 👉️ Hello World!

// ------------------------------------------------------------------

// // EXAMPLE 3 - Replace the last character in a String using String.substring()

// const str = 'bobbyhadz.com';

// const replaced = str.substring(0, str.length - 1) + '_';
// console.log(replaced); // 👉️ bobbyhadz.co_
