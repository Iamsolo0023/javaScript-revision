let str = "Lebron"; //one way
let str1 = 'Lebron'; //second way
let length = console.log(`${str.length}`); //gives the length of the string named str.
// suppose we want to access the character at the index 3 then what we can do is
let index3 = str[3];
console.log(index3); // this will give us the output as 'r'

console.log(`hello\nworld`); //breaks line
console.log(`\thello\n\tworld`); //gives tab space

// string built in functions
let upperCase = str.toUpperCase();//converts our string to uppercase 
console.log(upperCase)
// lets try to print our original string named str.
console.log(str); //we will see that the our original string is not changed.
                  //the reason is that in javascript the strings are immutable.

// Similary we have a funtion to convert our string to lower case
let lowerCase = str.toLowerCase();
console.log(lowerCase);

// We have a trim method too in which it removes all the white spaced from start and last of a string
let str2 = "         Hello    This     IS     JavaScript               ";
console.log(str2.trim());

//slice method
let slice = str.slice(1,3);
console.log(slice); // output = eb and not ebr as the ending value is not inclusive in js. 

// concatination method
let concatinate = str1.concat(str1);
console.log(concatinate); //it will join str1 with str.
 
//Search and replace
let searchReplace  = str.replace("Lebron","Westbrook");
console.log(searchReplace);

// charAt
let charAtIndex = str.charAt(5);
console.log(charAtIndex);