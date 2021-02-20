// Assignment code here
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var specialChar = '!@#$%^&*?><:~`;/{}][]|+-)(';
var numberReq = "0123456789";

var lowAnswer = false;
var upAnswer = false;
var specAnswer = false;
var numAnswer = false;

var userChoices = "";
var randomPassword;


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

//password length
function generatePassword() {

var lowAnswer = false;
var upAnswer = false;
var specAnswer = false;
var numAnswer = false;
var userChoices = "";

//number count
  var charlength = window.prompt('How long will you like your password? Pick between 8 through 128');{
      if (charlength >= 8 && charlength < 128) {
        var specAnswer = window.confirm('Would you like to include special characters? ex: @8+!');
      }
      else {
        window.alert('Please enter a number between 8-128 to continue.')
      }
    }
  };


  

// var lowercaseReq = window.confirm('Would you like to include lowercase letters?');
// var uppercaseReq = window.confirm('Would you like to include UPPERCASE letters?');
// var numberReq = window.confirm('Would you like to include numbers? ex:123');