function foo(a,b){
  return Number(a) + Number(b);
}
console.log(foo(1, "2")); // Output: 3
This version explicitly converts both `a` and `b` to numbers using `Number()` before adding them, solving the type coercion issue and ensuring the correct numerical result.