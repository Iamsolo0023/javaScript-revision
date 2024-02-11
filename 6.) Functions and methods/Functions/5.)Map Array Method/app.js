// map method
// Creates a new array with the results of some operations.The value its callback returns are used to form a new array.
// arr.map(callbackFnx(value,index,array))
let nums = [1,2,3,4,5,6];
nums.map((val)=>{
    console.log(val);
})

// to create a new array 
 let newNumsArray= nums.map((val)=>{
    return val*2;
 })
 console.log(newNumsArray);
