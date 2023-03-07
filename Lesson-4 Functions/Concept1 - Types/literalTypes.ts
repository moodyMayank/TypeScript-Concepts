// Literal Types
let myName: "Dave";

// Now I can only set myName to Dave , so that is not useful

let userName: "Dave" | "John" | "Mayank";

userName = "John"; // Now this variable can take any of the 3 names , so now it becomes useful
