// const sum = (a, b) => {
//   return a + b;
// };

//  Here a , b have `any` type because even strings can be added.

// We need to explicit define their type.

const sum = (a: number, b: number) => {
  return a + b;
};
// a => number , b => number , returnValue => number

const sum1 = (a: number, b: string) => {
  return a + b;
};

// a => number , b => number , returnValue => string
