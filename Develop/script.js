// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var password = [upperCase, lowerCase, numbers, specialCharacters];

// Write password to the #password input
function getPasswordOptions() {

  var confirmLength = parseInt(prompt("Pick a length between 8 & 128"));
  console.log(confirmLength);
  if (confirmLength < 8) {
    alert("Pick a password length over 7 characters");
    return;
  };

  if (confirmLength > 128) {
    alert("Pick a password length under 129 characters");
    return;

  };

  var confirmUpperCase = confirm("Upper-case Letters?");
  console.log(confirmUpperCase);
  // return true/false 
  var confirmLowerCase = confirm("Lower-case Letters?");
  console.log(confirmLowerCase);
  // return true/false 
  var confirmNumber = confirm("Number?");
  console.log(confirmNumber);
  // return true/false 
  var confirmspecialCharacters = confirm("Special character?");
  console.log(confirmNumber);
  // return string
  // if (confirmLength )

  if (
    confirmUpperCase === false &&
    confirmLowerCase === false &&
    confirmNumber === false &&
    confirmspecialCharacters === false) {
    alert("You must pick one character-type.")
    return;
  };

  var passwordOptions = {
    length: confirmLength,
    upperCase: confirmUpperCase,
    lowercase: confirmLowerCase,
    numbers: confirmNumber,
    special: confirmspecialCharacters
  }; return passwordOptions;
  console.log(passwordOptions);
};

function getRandomElement(array) {
  var index = Math.floor(Math.random() * array.length);
  var element = array[index];
  return element;

};


function generatePassword() {
  var pwdOptions = getPasswordOptions();
  var newPasswordArray = [];
  var possibleCharacters = [];
  var characters = [];

  if (pwdOptions.upperCase) {

  
   pwdOptions.push("");

  };
  console.log(pwdOptions)

};
//if statements
//concat function
//push function


// generatePassword();


var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// passwordText.value = password;

// getPasswordOptions();
// writePassword();