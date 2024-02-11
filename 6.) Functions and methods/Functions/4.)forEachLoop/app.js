let arr = ["pune","mumbai","Bhopal"];
arr.forEach((val)=>{
    console.log(val);
});
// every call back has three parametres that can be passed and it is optional.
let names = ["Captain America","Thor","Antman","Ironman"];
names.forEach((val, index, arr) =>{
    console.log(val.toUpperCase(),index,arr);
});
// forEach is a higher order function/method which takes a function as a parametre or returns a function.

