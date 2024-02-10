// Prompt the user to enter their full name. Generate a username for them based on the input. start user name with @, followed by their full name and ending with the fullname length.
let fullName = prompt("Please enter your full name");
let firstCharacter = "@";
let lastCharacter = fullName.length;
let userName = firstCharacter.concat(fullName + lastCharacter);
console.log(userName)
