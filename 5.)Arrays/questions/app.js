// create an array to store companies => "Bloomberg" , "Microsoft" , "Uber" , "Google" , "IBM" , "Netflix"
// remove the first companu from the array
// remove Uber and  add ola in its place
// Add amazon to the end

let companies = ["Bloomberg" , "Microsoft" , "Uber" , "Google" , "IBM" , "Nrtflix"];
companies.splice(0,1);
console.log(companies);
companies.splice(1,1,"ola");
console.log(companies);
companies.splice(4,1,"Amazon")
console.log(companies);

let arr = [1,2,3,4,5,6,7,8,9,10];

arr.splice(2,1,103);
console.log(arr);