// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var passwordLength = prompt("Choose a password length between: 8 & 128")
  var options= ["abcdefghijklmnopqrstuvwxyz"]
  var number

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// for (i = 0; i < 5; i++) {
//   text += "The number is " + i + "<br>";
// }