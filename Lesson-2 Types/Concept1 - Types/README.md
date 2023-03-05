# Lesson-2 Notes :-

- Typescript => Strongly Typed Language
- Javascript => Loosely Typed Language
- Static and Dynamic language is not same as strongly typed and loosely typed language.

- Typescript is a statically typed language. Means types are checked at compile time.
- Javascript is a dynamic typed language. Means types are checked at run time.

- Typescript Benefits:-

  - Self documenting
  - catch errors in dev
  - great for dev

- Infer/implicit : Typescript on hover , gives the type of the element
- explicit : By telling the type using `:`

- union type is not limited to 2 types. We can specify more than 2 also i.e.

  - isActive : number | boolean | string;

- use Inference in VScode to find the data type of the variable we dont know like
  - let re = /\w+4;
  - This is regular expression but what about data type , so when we hover , we find out that it is RegExp
  - let re: RegExp = /\w+4;
