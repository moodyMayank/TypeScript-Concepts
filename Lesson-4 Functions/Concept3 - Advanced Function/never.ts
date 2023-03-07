// createError has never return type
// never type is related to errors only

const createError = (errMsg: string) => {
  throw new Error(errMsg);
};

// Here infinite function is having infinite loop , so its a problem
// That's why its return type is never
const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
  }
};

// Real Use of Never type in functions

// Passed value can be string , number , undefined
// createError for undefined
const numberOrString = (value: number | string): string => {
  if (typeof value === "string") return "string";
  if (typeof value === "number") return "number";
  return createError("This should never happen");
};
