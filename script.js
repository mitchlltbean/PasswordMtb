//TODO:create variables
var lowerCase = []
var upperCase = []
var special = []
var charLength = 
var numbers = []



//TODO: use mathrandom

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
