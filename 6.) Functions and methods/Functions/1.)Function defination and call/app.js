// Function declaration or function defination

function addFunction(num1 , num2){
    // parametres num1 and num2 is a local variables for this funtion and will be put in use only inside this function block.
    // It cannot be accesed globally.
    let sum = num1+num2;
    console.log("Before Return");
    return sum; //used to return some value from the funtion
    // one thing at a time can only be returned from a function.
    console.log("After Return"); // this particular line will never be executed as function has already returned a value.
};


// function call to invoke the AddFunction
let sum = addFunction(1,2);
console.log(`The sum of ${1} and ${2} is ${sum}`);