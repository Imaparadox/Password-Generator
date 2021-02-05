// Assignment Code
var generateBtn = document.querySelector("#generate");

var letterU = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var letterL = ["abcdefghijklmnopqrstuvwxyz"];
var number = [123456789];
var specialCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var password = [letterU, letterL, number, specialCharacters];

// Write password to the #password input
function writePassword() {
  
  var confirmLength = prompt("Pick a length between 8 & 128");
  // console.log(confirmLength);
  // return true/false 
  var confirmUpperCase = confirm("Upper-case Letters?");
  // console.log(confirmUpperCase); 
  // return true/false 
  var confirmLowerCase = confirm("Lower-case Letters?");
  // console.log(confirmLowerCase);
  // return true/false 
  var confirmNumber = confirm("Number?");
  // console.log(confirmNumber);
  // return true/false 
  var confirmspecialCharacters = confirm("Special character?");
  // console.log(confirmNumber);
  // return string
  // if (confirmLength )
  var password = [letterU, letterL, number, specialCharacters];
  return password;

};

writePassword();

function generatePassword() {
var {
  confirmUpperCase,
  confirmLowerCase,
  confirmNumber,
  specialCharacters,
};


};

// (Math.floor(Math.random() * confirm.length);

generatePassword(); 



// writePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// addEventListener();





// var password = generatePassword();
//   var passwordText = document.querySelector("#password");
//   var passwordLength = prompt("Choose a password length between: 8 & 128")
// for (i = 0; i < 5; i++) {
//   text += "The number is " + i + "<br>";
// }

// passwordText.value = password;