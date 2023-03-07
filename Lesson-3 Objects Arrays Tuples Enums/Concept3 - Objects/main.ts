// Defining a Object
let myObj: object;

// Since in vanilla JS, array is also object
myObj = []; // Its valid and does not changes the type of variable

console.log(typeof myObj); // gives output as object

myObj = {}; // Also No Problems

// Infer Object
const exampleObj = {
  prop1: "Dave",
  prop2: true,
};
// infer prop1: string , prop2: boolean

// Annotation : giving types to object

type Guitarist = {
  name: string;
  active: boolean;
  albums: (string | number)[];
};

let evh: Guitarist = {
  name: "Mayank",
  active: false,
  albums: [1984, 5150, "OU812"],
};

// If we omit any Property , then it will give error since we are not following the type object

// Copying of Objects

let jp: Guitarist = {
  name: "Jimmy",
  active: true,
  albums: ["I", "II", "III"],
};

// Copying is possible since both have same types and properties , if some property was missing it would have been a error.
jp = evh;

// evh.years = 40; Adding new Properties will also give error

// Optional Object Properties
type Guitarist1 = {
  name: string;
  active?: boolean; // Adding ? make the property optional
  albums: (string | number)[];
};

// This object is valid
let ev: Guitarist1 = {
  name: "Monkeu",
  albums: ["hello", 11],
};

// Function

const greetGuitarist = (guitarist: Guitarist) => {
  return `Hello ${guitarist.name}!`;
};

console.log(greetGuitarist(jp));

// Type vs interface
// Interface is same as Type but there are differences
// Syntax is different
// using interface is preferred

interface Guitarist2 {
  name?: string;
  active: boolean;
  albums: (string | number)[];
}

// Smart Development with Typescript
// Here we have Made name as Optional and then we try to use method toUpperCase() with Name , since it can be

let tp: Guitarist2 = {
  active: true,
  albums: ["123", 4235],
};

// It shows error as name can be undefined and we cannot use methods with undefined value
// We need to used optional chaining

const greetGuitarist2 = (guitarist: Guitarist2) => {
  return `Hello ${guitarist.name?.toUpperCase()}!`;

  // Other way could be to check before and then return
  /* 
  if(guitarist.name){
    return `Hello ${guitarist.name.toUpperCase()}!`
  }
  return 'Hello!';
  */
};
