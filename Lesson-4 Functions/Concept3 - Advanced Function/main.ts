// Function type aliases

type mathFunction = (a: number, b: number) => number;

let multiply: mathFunction = function (c, d) {
  return c * d;
};

// Optional Parameters
// Optional need to be last in the list

// Here c is optional parameter and could be undefined
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};

// Default Parameters
const sumAll = (a: number, b: number, c: number = 2): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};
