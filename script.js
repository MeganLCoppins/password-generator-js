// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// variables
var lowercase="abcdefghijklmnopqrstuvwyz";
var uppercase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChars= "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var numericChars= "0123456789";

// Write password to the #password input
function writePassword() {

// object with properties including prompts/confirms for user input
  var params = {
    length: prompt("Choose a password length between 8 and 128 characters long"),
    uppercase: confirm("Would you like to use uppercase characters in your var password?"),
    lowercase: confirm("Would you like to use lowercase characters in your password?"),
    specialChars: confirm("Would you like to use special characters in your password?"),
    numericChars: confirm("Would you like to use numeric characters")
  };
  // setting up password length requirements to a minimum of 8 characters and maximum of 128 characters as well as converting input into a number rather than a string
      while (
        params.length <8 ||
        params.length >128 ||
        params.length === undefined
      ) {

        params.length = parseInt(
          prompt("Choose a password length between 8 and 128 characters long")
        );
      }
        var password = generatePassword(params);
        var passwordText = document.querySelector("#password");

        passwordText.value = password;
  }

// Randomizing character types to be included in password based on what user chose using getRandomValue function 
  function generatePassword(params) {
    var password = "";

    for (let i=0; i < params.length; i++) {
      if (params.uppercase) {
        password += getRandomValue(uppercase);
      }
      if (params.lowercase) {
        password += getRandomValue(lowercase);
      }
      if (params.numericChars) {
        password += getRandomValue(numericChars);
      }
      if (params.specialChars) {
        password += getRandomValue(specialChars);
      }
    }
// using .slice array method to take selected elements in an array and return them in a new one
    return password.slice(0, params.length);
  }
// function used to randomize what characters are chosen and what order for the password generated
  function getRandomValue(str) {
    return str[Math.floor(Math.random() * str.length)];
  }