# Concept3 - Static vs Dynamic Typed

So now we see the iconic problem of dividing a number by string.

- So if we divide number / string , since js is a dynamic typed language , it automatically converts the string to number.
- But this does not happens in typescript , it shows red but still compiles into js code .
- This behaviour we need to stop and not to compile untill all errors are gone from typescript files

  - To achieve this we must enable `noEmitonError: true`
  - So using js files will not be formed untill errors are solved.

- We should also define the types of the variables like :
  - `let a: number = 12`
  - `let b: string = '6'`
  - `let c: number = 2`
