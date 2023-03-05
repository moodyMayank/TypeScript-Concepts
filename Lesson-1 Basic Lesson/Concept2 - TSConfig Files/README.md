# Concept-2 TSConfig Files

- So now we want to setup the live watch for whole project and not just 1 file.
- We have generally 2 folders in our project 1.src folder 2. build folder.
- Now We have index.html file inside our build folder and
  main.ts file inside src , so on compilation all the tsx => js should be converted and stored in build folder.
- For Achieving above we will use `tsconfig.json` file.

- We will generate tsconfig file using tsc --init.
- This file includes a lot of settings , we will use according to our need.

- We need to following points :
  - rootDir : place for typescript files
  - outDir : place for javascript files
  - Command : tsc -w , it picks all the files under rootDir
  - Now also the files are using ES6 since `target:ES2016` in tsconfig file.
  - If we change it back to `ES5` , it will shift to older version.

Note: If we delete any typescript file , the js file will not be deleted automatically and we have to that manually.

- Files outside `src` folder are considered and converted to js file but not in the desired path i.e. `build/js`.
  - We want to ignore this to happen , so we add another feature in tsconfig file `"include": [
"src"
]`
  - So now typescript all the files except `src` folder.
