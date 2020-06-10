




// Various Arrays of Characters 
var charSetLower = "abcdefghijklmnopqrstuvwxyz";
var charSetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charSetNum =  "0123456789";
var charSetSpec = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// Variable Declarations 
var confirmLength = "";
var confirmUpperCase; 
var confirmLowerCase;
var confirmNumeric;
var confirmSpecial;


//Generate Password Function 
function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to contain? Must be between 8-128 characters."));

  // Loop if answer is outside the parameters 
  if(confirmLength >= 8 && confirmLength <= 128) {
      alert(`Your password will have ${confirmLength} characters.`);
  } else {
      alert("Password length must be between 8-128 characters. Try again.");
      var confirmLength = (prompt("How many characters would you like your password to contain?"));
    }
      

    // Determine parameters of password 
    var confirmSpecial = confirm("Click OK to confirm if you would like to include 'SPECIAL' characters.");
    var confirmNumeric = confirm("Click OK to confirm if you would like to include 'NUMERIC' characters.");    
    var confirmLowerCase = confirm("Click OK to confirm if you would like to include 'LOWERCASE' characters.");
    var confirmUpperCase = confirm("Click OK to confirm if you would like to include 'UPPERCASE' characters.");
      // Loop if answer is outside the parameters 
      while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecial === false && confirmNumeric === false) {
        alert("You must choose at least one parameter.");
        var confirmSpecial = confirm("Click OK to confirm if you would like to include 'SPECIAL' characters.");
        var confirmNumeric = confirm("Click OK to confirm if you would like to include 'NUMERIC' characters.");    
        var confirmLowerCase = confirm("Click OK to confirm if you would like to include 'LOWERCASE' characters.");
        var confirmUpperCase = confirm("Click OK to confirm if you would like to include 'UPPERCASE' characters.");   
    };
 
  //return value
  //var retVal = "";
  //for (var i = 0; i < length; i++) {
    //picks a character within charSet at index of random number
   // retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
  //}
  //return retVal;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Listener Event to write password on click of "Generate Password" button
generateBtn.addEventListener("click", writePassword());


