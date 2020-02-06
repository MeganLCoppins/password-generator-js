// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  // Variables
  var pwUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var pwLowerCase = "abcdefghijklmnopqrstuvwxyz";
  var pwSpecialChars = "!@#$%^&*()?><,./?"; 
  var pwNumericChars = "1234567890";
// Object with properties 
  var params={
    length: prompt("How long would you like your password to be?"), 
    upperCase: confirm("Would you like to use uppercase characters in your password?"),
    lowerCase: confirm("Would you like to use lowercase characters in your password?"),
    specialChars: confirm("Would you like to use special characters in your password?"),
    numericChars: confirm("Would you like to use numeric characters")
  };
  var password = generatePassword(params);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  console.log(params);
 
  
}
function generatePassword(options) {
  if(options.upperCase){
  }
  return "supersecretpassword";
} 