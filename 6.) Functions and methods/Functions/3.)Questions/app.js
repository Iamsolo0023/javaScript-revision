// Question - create a function using the function keyword that takes a string as a argument & returns the number of vowels in the string.
function countVowelsInString(str){
   let lowerCaseString =  str.toLowerCase();
   let vowelArray = ["a","e","i","o","u"];
   let arryToString = vowelArray.toString();
    let count = 0;
    for(let i =0; i<arryToString.length; i++){
        for(let j = 0; j<lowerCaseString.length; j++){
            if(arryToString.charAt(i) === lowerCaseString.charAt(j)){
                count++;
            }
        }
    }
    // Generic Solution
    // for(let val of lowerCaseString){
    //     if(val === "a" || val === "e" || val === "i" || val === "o" || val === "u" ){
    //         count++;
    //     }
    // }
    return count;
}

let countVowelsInStringArrowFunction = (str) =>{
    let lowerCaseString =  str.toLowerCase();
    let vowelArray = ["a","e","i","o","u"];
    let arryToString = vowelArray.toString();
    let count = 0;
    for(let i =0; i<arryToString.length; i++){
        for(let j = 0; j<lowerCaseString.length; j++){
            if(arryToString.charAt(i) === lowerCaseString.charAt(j)){
                count++;
            }
        }
    }
    return count;
}

let str  = "Lebron James";
let str1 = "AEIou";
let countVowels = countVowelsInString(str);
let countVowelsInArrowFunction = countVowelsInStringArrowFunction(str1);
console.log(`The number of vowels in string "${str}" is ${countVowels}`);
console.log(`The number of vowels in string "${str1}" is ${countVowelsInArrowFunction}`);


// For a given array of numbers,print the square of each value using the foreach loop.
// one way
let numberArray = [1,2,3,4,5,6,7,8,9,10];
numberArray.forEach((val=>{
    let square = val*val;
    console.log(`The square of ${val} is ${square}`);
}))

// another way to do the same thing is 
let calculateSquare = (numberArray) =>{
    let square = numberArray*numberArray;
    console.log(square)
}
numberArray.forEach((calculateSquare)); //passing a function to a callback function and we can obtain the same solution.



