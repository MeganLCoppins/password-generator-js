// Assignment Code
var generateBtn = document.querySelector("#generate");


// Variables
// Object with properties 
var params={
  length: prompt("How long would you like your password to be?"),
  upperCase: confirm("Would you like to use uppercase characters in your password?"),
  lowerCase: confirm("Would you like to use lowercase characters in your password?"),
  specialChars: confirm("Would you like to use special characters in your password?"),
  numericChars: confirm("Would you like to use numeric characters"),
}
if(params.length<=8 || params.length>=128){
  prompt("Please enter a password length that is at least 8 characters long and no longer than 128 characters");
}

console.log(params);
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
