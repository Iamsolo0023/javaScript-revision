// Array creation
let marks = [97 , 25, 58, 78, 100];
console.log(marks)
// to find the length of the array
let arrayLength = marks.length;
console.log(`The length of the array is ${arrayLength}`);
// The type of array is object.
let typeOfArray = typeof marks;
console.log(`The type of the array is ${typeOfArray}`);
// Array indices
let arrayIndex1 = marks[1];
console.log(`The value at index 1 is ${arrayIndex1}`);
//To update the value of any indices of an array then 
marks[2] = 55;
console.log(`The upadted marks at index 2 is ${marks}`)
// for in loop
for(let i in marks){
    console.log(marks[i])
}
// for of loop
for(let i of marks){
    console.log(i);
}
// for loop
for(let i =0; i<arrayLength; i++){
    console.log(marks[i]);
}

// question
// for a given array with marks of students => [85, 97, 44, 37, 76, 60] fins the average marks of the class
let classMarks = [85, 97, 44, 37, 76, 60];
let average = 0;
for(let i in classMarks){
    average = average + classMarks[i];
}
console.log(average/classMarks.length)

// For a given array with prices of 5 items => [2250, 645, 300, 900, 50]. All items have an offer of 10% OFF on them.Change the array to store final price after applying offer.
let price = [250, 645, 300, 900, 50];
let offer = 1/10;
for(let i in price){
    let discountedPrice = price[i]*offer;
    price[i] -= discountedPrice;
}
console.log(price)

// array methods
// push() : add to end
let veggies = ["potato", "tomato", "carrot", "raddish"];
veggies.push("Brinjal", "bittergourd");
console.log(veggies);

// pop() : delete items from end.
let deletedItem = veggies.pop();
console.log(deletedItem);
console.log(veggies)

// tostring() : converts the array to an string.
let tostring = veggies.toString();
console.log(tostring);

// concat() : joins multiple arrays & returns result
let marks1 = [1,2,3,4];
let combinedArrays = veggies.concat(marks1);
console.log(combinedArrays);
//doesnot changes the original arrays
console.log(veggies) // to verify if our original array changes or not.

// Unshift(): add to start equivalent to push methods only difference is it adds to start.
marks1.unshift(44);
console.log(marks1)

// shift() :deletes the element from first.
marks1.shift();
console.log(marks1);

// slice method
// slice() : returns a piece of the array
// slice(startindex, endindex)
console.log(marks1.slice(1,3));
// same a slicing of strings the end index is inclusive.


// Splice() : change original array (add, remove, replace)
let arr = [1,2,3,4,5,6,7,8,9,10];
arr.splice(1,2,101,102);
console.log(arr);

// add element
arr.splice(2,0,101);
console.log(arr);

// delete element
arr.splice(2,1);
console.log(arr);

// replace element
arr.splice(2,1,103);
console.log(arr);

// if we just pass the starting index to the splice
arr.splice(4);
// it will work as slice and will delete the elements from index 4.
console.log(arr);




