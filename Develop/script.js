
// Various Arrays of Characters 
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// Variable Declarations 
var confirmLength = "";
var confirmUpperCase; 
var confirmLowerCase;
var confirmNumeric;
var confirmSpecial;
//Generate Password Function 
function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to contain? Choose between 8-128 characters."));
    if (confirmLength >= 8 && confirmLength <= 128) {
        alert(`Your password will have ${confirmLength} characters.`);
    } 
    else {
      alert("Password length must be between 8-128 characters. Try again.");
      var confirmLength = (prompt("How many characters would you like your password to contain? Choose between 8-128 characters."));
      return ["Restart and choose correct number of characters."];
    }

// Determine parameters of password
  var confirmSelection = alert("Choose at least one of the following character types to include: 'SPECIAL', 'NUMERIC', 'LOWERCASE', 'UPPERCASE.'");
  var confirmSpecial = prompt("Enter 'YES' to include 'SPECIAL' characters. Leave blank to exclude.");
  var confirmNumeric = prompt("Enter 'YES' to include 'NUMERIC' characters. Leave blank to exclude.");    
  var confirmLowerCase = prompt("Enter 'YES' to include 'LOWERCASE' characters. Leave blank to exclude.");
  var confirmUpperCase = prompt("Enter 'YES' to include 'UPPERCASE' characters. Leave blank to exclude."); 

  while (confirmSpecial === "" && confirmNumeric === ""  &&  confirmLowerCase === "" && confirmUpperCase === "") {
    alert("You must choose at least one character type.");
      var confirmSpecial = prompt("Enter 'YES' to include 'SPECIAL' characters. Leave blank to exclude.");
      var confirmNumeric = prompt("Enter 'YES' to include 'NUMERIC' characters. Leave blank to exclude.");    
      var confirmLowerCase = prompt("Enter 'YES' to include 'LOWERCASE' characters. Leave blank to exclude.");
      var confirmUpperCase = prompt("Enter 'YES' to include 'UPPERCASE' characters. Leave blank to exclude."); 
  }
//Assign action to password parameters 
  var passwordCharacters = []
      
  if (confirmSpecial === "YES" || confirmSpecial === "yes")  {
    passwordCharacters = passwordCharacters.concat(specialChar);
  }

  if (confirmNumeric === "YES" || confirmNumeric === "yes")  {
    passwordCharacters = passwordCharacters.concat(number);
  }
    
  if (confirmLowerCase === "YES" || confirmLowerCase === "yes") {
    passwordCharacters = passwordCharacters.concat(alphaLower);
  }

  if  (confirmUpperCase === "YES" || confirmUpperCase === "yes") {
    passwordCharacters = passwordCharacters.concat(alphaUpper);
  };

    console.log(passwordCharacters)

// Empty string to be filled based on for loop selecting random characters from the array
var randomPassword = ""
    
for (var i = 0; i < confirmLength; i++) {
  randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  console.log(randomPassword)
}
  return randomPassword;
};
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
};
// Listener Event to write password on click of "Generate Password" button
generateBtn.addEventListener("click", writePassword);

