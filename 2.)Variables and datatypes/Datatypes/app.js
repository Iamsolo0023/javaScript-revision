// // primitive
// let num = 42;
// console.log(typeof num); //number
// let fullName = "Lebron";
// console.log(typeof fullName); //string
// let isFollow = true; 
// console.log(typeof isFollow); //boolean
// let a; 
// console.log(typeof a); //undefined
// let b = null; 
// console.log(typeof b); //object-absence of an object
// let c = BigInt("123");
// console.log(typeof c); //Bigint
// let d = Symbol("Hello!");
// console.log(typeof d) //Symbol

//Non-primitive - objects - arrays and functions 

// object creation
const Student = {
    fullName : "Lebron",
    age : 24,
    cgpa : 7.04,
    isPass : true,
}
// we have succesfully created our object.
// to access a particular key of the object
console.log(Student)
console.log(Student.fullName);
// or
console.log(Student["age"]);
// to update the value of a key inside the object.
Student.age = Student.age + 1;
console.log(Student.age);