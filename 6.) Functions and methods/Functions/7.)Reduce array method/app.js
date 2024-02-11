// Reduce
// Performs some operations & reduces the array to a single value. It returns that single value
//sum
// let arr = [1,2,8,4];
// let reducedArray = arr.reduce((result,currentValue)=>{
//     return result+currentValue;
// })
// console.log(reducedArray);
// // to find the largest number in an array 
// let largestNumInArray = arr.reduce((largestNum, currentNum)=>{
//     return currentNum>largestNum? currentNum : largestNum
// });
// console.log(largestNumInArray);

// Question
// We are given array of marks of students.Filter out of the marks of students that scored 90+.
/*
let marksOfStudentArray = [99,80,75,66,98,95,97,22,54,63,78,96,100];
let marksAbove90Array = marksOfStudentArray.filter((marks)=>{
    return marks > 90;
});
console.log(marksAbove90Array);
*/

// Question
// Take a number n as input from UserActivation. Create an array of numbes from 1 to n.
// use the reduce method to calculate sum of all numbers in the array.
// use the reduce method to calculate product of all numbers in the array.

let n = prompt("Please enter the value of n");
let arr = [n];
for(let i =1; i<=n; i++){
    arr[i-1] = i;
}

let newSumArray = arr.reduce((result,current) =>{
    return result+current;
})
console.log(`The sum of the array is ${newSumArray}`);

let newProductArray = arr.reduce((result,current) =>{
    return result*current;
})
console.log(`The multiplication of the array is ${newProductArray}`);
