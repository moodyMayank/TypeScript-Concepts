// Type Aliases
// Basically Alias is another Name given to something
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
  name?: string;
  active: boolean;
  albums: stringOrNumberArray; // This is valid here and we are using
};

// This does not works with Interfaces
// Interfaces are for more objects and classes

// interface PostId = stringOrNumber; Gives error
