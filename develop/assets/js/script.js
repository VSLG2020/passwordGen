// Assignment code here
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var specialChar = '!@#$%^&*?><:~`;/{}][]|+-)(';
var numberReq = "0123456789";

var lowAnswer = false;
var upAnswer = false;
var specAnswer = false;
var numAnswer = false;

var userInput = "";
var ranPassGen;


//generator function
//password length
function generatePassword() {

  var lowAnswer = false;
  var upAnswer = false;
  var specAnswer = false;
  var numAnswer = false;
  var userInput = "";

  //number count
  var length = window.prompt('How long will you like your password? Pick between 8 through 128'); {
    if (length >= 8 && length < 128) {
      var specAnswer = window.confirm('Would you like to include special characters? ex: @*+!');
    }
    else {
      window.alert('Please enter a number between 8-128 to continue.');
      return
    }
    if (specAnswer) {
      specAnswer = true;
      userInput = userInput + specialChar;
    }else{
      specAnswer =false;
      userInput = userInput - specialChar;
    }
    //console.log(userInput);
  }

  //upperCase

  upAnswer = window.confirm('Would you like UPPERCASE letters in your password?'); {
    if (upAnswer) {
      upAnswer = true;
      userInput = userInput + upperCase;

    }else{
      upAnswer = false;
      userInput = userInput - upperCase;
    }
    //console.log(userInput);
  }
  //lowerCase
  lowAnswer = window.confirm('Would you like lowercase letters in your password?'); {
    if (lowAnswer) {
      lowAnswer = true;
      userInput = userInput + lowerCase;

    }else{
      lowAnswer = false;
      userInput = userInput - lowerCase;
    }
    //console.log(userInput);
  }

  //numbers

  numAnswer = window.confirm('Would you like numbers in your password?'); {
    if (numAnswer) {
      numAnswer = true;
      userInput = userInput + numberReq;

    } else{
      numAnswer = false;
      userInput = userInput - numberReq;
    }
   // console.log(userInput);
  }

  // must choose an option or startover

if (numAnswer !=true && specAnswer !=true && upAnswer !=true && lowAnswer !=true) {
  window.alert("You must select at least one option! Please try again.");
  generatePassword();
}

 ranPassGen = ""

for (var i = 0; i < length; i++) {
  var random = Math.floor(Math.random() * userInput.length);
  ranPassGen = ranPassGen + userInput.charAt(random);
  
  //random password generated
  
  return ranPassGen;
}
console.log(ranPassGen);


}//closing function


///starter code below///

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)


