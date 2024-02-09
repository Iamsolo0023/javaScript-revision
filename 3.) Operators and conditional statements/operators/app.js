// comments
// There are two types of comments in javascript.
// Single line comments and multi line comments.

//single line comments. => this is a single line comment.
/*
This is a multi line comment.
Which can be used to comment multiples lines at once without applying comments to each line one by one.
*/

// Operators in javascript
// Arithmetic operators

let a = 5;
let b = 6;

// console.log("a = ", a, " & b = ", b);
// console.log("a+b= ",a+b);
// console.log("a-b= ",a-b);
// console.log("a*b= ",a*b);
// console.log("a/b= ",a/b);
// console.log("a%b= ",a%b); //prints the remainder after the division of a with b.
// console.log("a**b= ",a**b); //a**b means a to the power b.


// unary operators
// a++ => post increment operator
// ++a => pre increment operator
// a-- => post decrement operator
// --a => pre decrement operator

// a++;
// console.log("a++ = ", a); //6
// ++a;
// console.log("++a = ", a); //7
// a--;
// console.log("a-- = ", a); //6
// --a;
// console.log("--a = ", a); //5

// assignment operator

/*
let c = 5; //5 is assigned to c. 
c += 6; // c = c + 6;
console.log("c+=6 is", c); //c=11
c-=6; // c = c - 6;
console.log("c-=6 is", c); //c=5
c*=6; // c = c * 6;
console.log("c*=6 is", c); // c=30
c%=4; // c = c % 6;
console.log("c%=6 is", c); // c=2
c**=6; //c = c**6;
console.log("c**6 is", c); // c=64
*/

// comparision operator
// used to compare 2 values
/*
console.log("a = ", a, " & b = ", b);
console.log(a==b); // false
console.log(a===b); // false
console.log(a!=b); // true
console.log(a!==b); // ture
console.log(a<b); //true
console.log(a>b); // false
console.log(a>=b); // false
console.log(a<=b); // true
*/

// logical operators
let cond1 = a===b;
console.log(cond1);
let cond2 = a==b;
console.log(cond2);

console.log(cond1 && cond2); // false.
console.log(cond1 || cond2); // false.
console.log(!(a===6)); //true