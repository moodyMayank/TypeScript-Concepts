# Lesson - 1 Notes

- First we need to compile the typescript file to js file and link the js file to html file.

- tsc main.ts => compiles into main.js
- Problems we see :-

  - If we open both files side by side main.js and main.ts. We can see error in typescript file because we cannot redeclare block scoped variable again.
  - username in main.js is declared using `var` and not `let`.
  - If we make changes to main.ts file , they will not be reflected in the main.js file automatically and we have to recompile manually.
  - So we need to Watch the changes as they change and update main.js accordingly
  - TO make automatic : `tsc main.ts -w`

- This is Good only when we are doing for 1-2 files.
- But We need better Approach , we should define some config that will work automatically on all files => ` Concept 2`.
