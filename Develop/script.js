// Assignment code here

var length = Number(prompt("How many characters will your password be? Enter a number between 8 and 128"));

//ask for character type
var charType = prompt("Enter a character type: special, numeric, uppercase, lowercase.");

//generate password
function generatePassword() {
  //evaluate character type
  var charSet = "";
  switch (charType) {
    case "lowercase":
    case "LOWERCASE":
    charSet = "abcdefghijklmnopqrstuvwxyz";
    break;
    case "uppercase":
    case "UPPERCASE":
    charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    break;
    case "numeric":
    case "NUMERIC":
    charSet = "0123456789";
    break;
    case "special":
    case "SPECIAL":
    charSet = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    break;
  }
  //return value
  var retVal = "";
  for (var i = 0; i < length; i++) {
    //picks a character within charSet at index of random number
    retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  return retVal;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());