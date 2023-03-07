// Tuple
// Tuples are array only but with strict positions and lengths

let myTuple: [string, number, boolean] = ["dave", 42, true]; // Tuple

let mixed = ["John", 1, false]; //  Array

mixed = myTuple; // No issues since mixed is of same type

// myTuple = mixed; // Error since the source can have less values than required.

// myTuple = ["dave", 42, false, "dave", 42, false]; //Error here , target only allows 3 values.

// myTuple[2] = 42; // Error since it is fixed , at that position only boolean value can come.
