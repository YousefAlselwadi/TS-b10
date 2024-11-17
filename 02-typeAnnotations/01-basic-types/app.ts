// 1. Basic Types 

// NUMBER -------

let id: number = 10; // Explicitly give type
// id = "Hello"; // Type 'string' is not assignable to type 'number'.
// id = true // Type 'boolean' is not assignable to type 'number'.


// STRING -------
let fName: string = 'Alice';
// fName = true; // Type 'boolean' is not assignable to type 'string'.

// BOOLEAN
let isAdmin: boolean = true;
// isAdmin = 'false'; // Type 'string' is not assignable to type 'boolean'.

// Type Inference
let city = 'Chicago'; // Typescript automatically infers the type

// Date
let today = new Date(); // Type inference
// let tomorrow: Date = api.getDateFromAmazon() // If you are not 
// today = true; // Type 'boolean' is not assignable to type 'Date'


// 2. Advanced Types 

// 2.2 Arrays
let numbers: number[] = [1, 2, 3];
let numbers2: Array<number> = [1, 2, 3]; // 2nd option. Use whichever you prefer

let cities: string[] = ['A', 'B', 'C'];

// 2.3 Tuples
const person: [string, number] = ['Joe', 40];
// person.push(10); // Warning

// 2.4 Union Types
let ID: number | string = 10;
ID = '10'

const mixedArray: (number | string)[] = [1, 'Hi', 10, 'Hello'];
const mixedArray2: (number | boolean)[] = [1, true, 10, false];

// 2.5 Literal Types

let ID2: '10' | '11' | '12' = '10';
// ID2 = '6'; // error

let RESPONSE: "SUCCESS" | 'FAIL' | "PENDING";
// RESPONSE = 'WAITNING'; // error


// 2.6 Object

const person2: { name: string, email: string, age: number, idAdmin: boolean } = {
    name: 'Joe',
    email: 'j@mail.com',
    age: 40,
    idAdmin: true
}

// Error
// const person3: {age: number} = {
//   name: 'Joe',
//   email: 'j@mail.com',
//   age: 40,
//   idAdmin: true
// }

// 2.7 Index signature
const person4: { [key: string]: string } = {
    name: 'Joe',
    email: 'j@mail.com',
    age: '40',
    idAdmin: 'true',
    name2: 'Joe',
    email2: 'j@mail.com',
    age2: '40',
    idAdmin2: 'true',
    name3: 'Joe',
    email3: 'j@mail.com',
    age3: '40',
    idAdmin3: 'true'
}






