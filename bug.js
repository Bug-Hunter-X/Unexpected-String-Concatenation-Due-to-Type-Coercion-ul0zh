function foo(a,b){return a+b;}
console.log(foo(1, "2")); // Output: "12"
This happens because JavaScript uses type coercion, it will convert the number 1 to a string and then concatenate it with the string "2".