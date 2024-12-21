# Unexpected String Concatenation in JavaScript

This repository demonstrates a common JavaScript bug caused by implicit type coercion. The function `foo` is intended to add two numbers, but due to type coercion, it concatenates them as strings when a number and a string are passed as arguments. 

## Bug Description
The function `foo` unexpectedly concatenates strings instead of performing numerical addition when one of its arguments is a number and the other is a string.  This is a result of JavaScript's loose typing and automatic type coercion.

## How to Reproduce
1. Clone this repository.
2. Open `bug.js`.
3. Run the code in a JavaScript environment (e.g., Node.js, browser's console).
4. Observe the unexpected output.

## Solution
The solution involves explicitly converting both arguments to numbers before performing the addition, ensuring consistent numerical operations.