// Case 1 :- String
const userName = "Mayank";

// Gives Error as we are assigning a constant
// userName = "Gamer";

// Case 2 :- Number
const age = 31;

// Again gives error for assigning constant
// age = 21;

// Case 3 :- Array
const tsPeople = ["Mayank", "Kumar", "Aman", "Gill"];

// Here it should give error but it doesnt
tsPeople[0] = "Gamer";

// We need to bring `as const`;
const tsPeople1 = ["Mayank", "Kumar", "Aman", "Gill"] as const;

// Now it gives error with using `as const`;
// tsPeople1[0] = "Gamer";

// Case 4 :- Object
// Similarly like arrays , it gives errors
const tsPeopleObj = {
  user: "Mayank",
  Name: "Kumar",
};

// This should be error but it is not
tsPeopleObj.user = "Sunil";

const tsPeopleObj1 = {
  user: "Mayank",
  Name: "Kumar",
} as const;

// Now this is error
// tsPeopleObj1.user = "Sunil";
