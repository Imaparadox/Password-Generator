// Assignment Code
var generateBtn = document.querySelector("#generate");

var letterU= ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var letterL = ["abcdefghijklmnopqrstuvwxyz"];
var number = [123456789];
var specialCharacters =  !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var password = [letterU, letterL, number, specialCharacters];

// Write password to the #password input
function writePassword() {
  var confirmUpperCase = confirm
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// var password = generatePassword();
//   var passwordText = document.querySelector("#password");
//   var passwordLength = prompt("Choose a password length between: 8 & 128")
// for (i = 0; i < 5; i++) {
//   text += "The number is " + i + "<br>";
// }