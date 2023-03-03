# Concept-2 TSConfig Files

- So now we want to setup the live watch for whole project and not just 1 file.
- We have generally 2 folders in our project 1.src folder 2. build folder.
- Now We have index.html file inside our build folder and
  main.ts file inside src , so on compilation all the tsx => js should be converted and stored in build folder.
- For Achieving above we will use `tsconfig.json` file.

- We will generate tsconfig file using tsc --init.
- This file includes a lot of settings , we will use according to our need.

- We need to following points :
  - rootDir
  - outDir
  -
