// Assignment code here
function runPrompts () {
  var promptIntro = window.alert('You need to choose the criteria for your password.')
  var promptLength = window.prompt('Choose a password length between 8 and 128 characters.');
  var promptCharacterOptions= window.prompt('Choose to include the following characters: "LOWERCASE", "UPPERCASE", "NUMERIC", and/or "SPECIAL CHARACTERS." Must choose least one option.');
}

var generatePassword = function() {
   var characterNumber =  6;
   var characterType = 'lowercase';

   return [characterNumber, characterType];

}

var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * characterNumber);

  return value;
};

//if lowercase chosen return a random number of letters based on characterType 
//if uppercase chosen return a random of letters based on characterType
//if numeric return a random number of letters based on characterType 
//if special characters return random of special characters based on characterType. 
//else return combination? 


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
 //something for output of character length 
  //output random of lowercase, uppercase 

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", () => {  
    runPrompts();
    writePassword();
});