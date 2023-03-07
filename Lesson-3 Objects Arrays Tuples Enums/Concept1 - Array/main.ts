let stringArr = ["one", "hey", "Dave"]; // infer => string[]

let guitars = ["Strat", "les paul", 5150]; // infer => (string | number)[]

let mixedData = ["EVH", 1984, true]; // infer => (string | number | boolean)[]

stringArr[0] = "John"; // No problem
// stringArr.push(44); // Problem Here

guitars[0] = 1984; // No Problem
// guitars.push(true); // Problem Here

// stringArr = guitars; // Problem here

mixedData = guitars; // No Problem here

let test = []; // infer => any
let bands: string[] = []; // infer => string
