// Calculate the sum of first n natural numbers
// let n = prompt("Enter the nth number");
let sum = 0;

// for loop
/*
for(let i = 1; i<=n; i++){
    // The variable declared inside the loop is valid only inside this block scope after this scope if we try to access i it will throw an error.
    sum+=i;
}
console.log(`The sum of first ${n} natural numbers is ${sum}`);
// console.log(i); //app.js:9 Uncaught ReferenceError: i is not defined
*/


// while loop
/*
let i = 1; //initialization condition
while(i<=n){ //stopping condition
    sum += i;
    i++; // updation
};
console.log(`The sum of first ${n} natural numbers is ${sum}`);
*/


// Do while loop
/*
let i = 0;
do{
    sum += i;
    i++;
}while(i<=n);
console.log(`The sum of first ${n} natural numbers is ${sum}`);
*/

// For-of loop.
/*
let str = "Lebron";
// if we want ot find the size of our string then we can initialize a varibale called size with value 0.
let size = 0;
for(let val of str){
    console.log(`val = ${val}`);
    size++;
}
console.log(`The size of the string is ${size} .`);
*/

// for in loop
/*
let student = {
    name:"Lebron",
    age:24,
    cgpa:7.04,
    isPass:true,
}

for (let key in student){
    console.log(`key = ${key} and value = ${student[key]}`);
}
*/

// question-print all the even numbers from 0 to 100.
/*
let nth = 100;
for(let i = 2; i<=nth; i++){
    if(i%2==0){
        console.log(i);
    };
}
*/

// question - Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters the correct value.
/*
const randomNumber = 4;
let gussedNumber;
while(randomNumber != gussedNumber){
    gussedNumber=prompt("Guess the number");
}
if(gussedNumber==randomNumber){
    console.log("You gussed the correct number");
}
*/