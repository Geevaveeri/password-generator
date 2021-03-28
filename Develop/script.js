// Assignment code here
var result = "";
function criteria() {

  //deciding if password will use capital letters
  var capitalConfirm = window.confirm("Would you like to use capital letters?");

  if (capitalConfirm) {
    capitalConfirm = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  }
  //decide if password will use lower case letters

  var lowerConfirm = window.confirm("Would you like to use lower case letters?");

  if (lowerConfirm) {
    var lowerConfirm = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  }
  // decide if password will use numbers

  var numberConfirm = window.confirm("Would you like to use numbers?");

  if (numberConfirm) {
    var numberConfirm = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  }
  // decide if password will use symbols

  var symbolConfirm = window.confirm("Would you like to use symbols?");

  if (symbolConfirm) {
    symbolConfirm = ["!", "#", "$", "%", "&", "(", ")", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_"];

  }
  // function to create the array used for password generation

  if (capitalConfirm &&
    lowerConfirm === false &&
    numberConfirm === false &&
    symbolConfirm === false) {

    var combinedArray = capitalConfirm;
    combinedArray = combinedArray.join('');

    return combinedArray;

  }

};

// Create the random password

// function to get length of password user wants
function passwordLength() {

  var userLength = "";

  while (userLength === "" || userLength === null) {
    userLength = prompt("How long would you like your password? Please select between 8 and 128.");

  }
  if (userLength < 8 || userLength > 128) {
    window.alert("Please select a value between 8 and 128.");
    // Call function again so they can enter a new value
    passwordLength();
  }
  userLength = parseInt(userLength);


  return userLength;
};

// function to generate the password
function generatePassword() {
  var passLen = passwordLength();
  var critString = criteria();
  createPassword();
  return createPassword();

  // Function to randomize the password arrays
  function createPassword() {
    var length = passLen,
      charset = critString,
      retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }

    return retVal;
  }

};




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);