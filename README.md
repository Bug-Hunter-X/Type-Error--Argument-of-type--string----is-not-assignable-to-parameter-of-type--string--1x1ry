# Type Error in TypeScript
This repository demonstrates a common type error in TypeScript that occurs when passing an array to a function expecting a string. 
The error arises because the function `greeter` expects a single string argument, but the `user` variable is an array of strings. TypeScript's type system catches this mismatch, preventing runtime errors.
The solution involves either modifying the `greeter` function to accept an array or modifying the way the `user` variable is handled to provide a single string argument.