// Assignment code here

// function for creating the array that the password will use
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
  //create the array used for password generation
  // 1
  if (capitalConfirm &&
    lowerConfirm === false &&
    numberConfirm === false &&
    symbolConfirm === false) {

    var combinedArray = capitalConfirm;
    combinedArray = combinedArray.join('');

    return combinedArray;

  }
  // 2
  if (capitalConfirm === false &&
    lowerConfirm &&
    numberConfirm === false &&
    symbolConfirm === false) {

    var combinedArray = lowerConfirm;
    combinedArray = combinedArray.join('');

    return combinedArray;

  }
  // 3
  if (capitalConfirm &&
    lowerConfirm &&
    numberConfirm === false &&
    symbolConfirm === false) {

    var combinedArray = [...capitalConfirm, ...lowerConfirm];
    combinedArray = combinedArray.join('');

    return combinedArray;

  }
  // 4
  if (capitalConfirm === false &&
    lowerConfirm === false &&
    numberConfirm &&
    symbolConfirm === false) {

    var combinedArray = numberConfirm;
    combinedArray = combinedArray.join('');

    return combinedArray;

  }
  // 5
  if (capitalConfirm &&
    lowerConfirm === false &&
    numberConfirm &&
    symbolConfirm === false) {

    var combinedArray = [...capitalConfirm, ...numberConfirm];
    combinedArray = combinedArray.join('');

    return combinedArray;
  }
  // 6
  if (capitalConfirm === false &&
    lowerConfirm &&
    numberConfirm &&
    symbolConfirm === false) {

    var combinedArray = [...lowerConfirm, ...numberConfirm];
    combinedArray = combinedArray.join('');

    return combinedArray;
  }
  // 7
  if (capitalConfirm &&
    lowerConfirm &&
    numberConfirm &&
    symbolConfirm === false
  ) {

    var combinedArray = [...capitalConfirm, ...lowerConfirm, ...numberConfirm];
    combinedArray = combinedArray.join('');

    return combinedArray;
  }
  // 8
  if (capitalConfirm === false &&
    lowerConfirm === false &&
    numberConfirm === false &&
    symbolConfirm) {

    var combinedArray = symbolConfirm;
    combinedArray = combinedArray.join('');

    return combinedArray;

  }
  // 9
  if (capitalConfirm &&
    lowerConfirm === false &&
    numberConfirm === false &&
    symbolConfirm) {

    var combinedArray = [...capitalConfirm, ...symbolConfirm];
    combinedArray = combinedArray.join('');

    return combinedArray;
  }
  // 10
  if (capitalConfirm === false &&
    lowerConfirm &&
    numberConfirm === false &&
    symbolConfirm) {

    var combinedArray = [...lowerConfirm, ...symbolConfirm];
    combinedArray = combinedArray.join('');

    return combinedArray;
  }
  // 11
  if (capitalConfirm &&
    lowerConfirm &&
    numberConfirm === false &&
    symbolConfirm) {

    var combinedArray = [...capitalConfirm, ...lowerConfirm, ...symbolConfirm];
    combinedArray = combinedArray.join('');

    return combinedArray;
  }
  // 12
  if (capitalConfirm === false &&
    lowerConfirm === false &&
    numberConfirm &&
    symbolConfirm) {

    var combinedArray = [...numberConfirm, ...symbolConfirm];
    combinedArray = combinedArray.join('');

    return combinedArray;
  }
  // 13
  if (capitalConfirm &&
    lowerConfirm === false &&
    numberConfirm &&
    symbolConfirm) {

    var combinedArray = [...capitalConfirm, ...numberConfirm, ...symbolConfirm];
    combinedArray = combinedArray.join('');

    return combinedArray;
  }
  // 14
  if (capitalConfirm === false &&
    lowerConfirm &&
    numberConfirm &&
    symbolConfirm) {

    var combinedArray = [...lowerConfirm, ...numberConfirm, ...symbolConfirm];
    combinedArray = combinedArray.join('');

    return combinedArray;
  }
  // 15
  if (capitalConfirm &&
    lowerConfirm &&
    numberConfirm &&
    symbolConfirm) {

    var combinedArray = [...capitalConfirm, ...lowerConfirm, ...numberConfirm, ...symbolConfirm];
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
    window.alert("Please select a number between 8 and 128.");
    userLength = "";
    // Call function again so they can enter a new value
    passwordLength();
  }
  if (isNaN(userLength)) {
    window.alert("Please select a number between 8 and 128.");
    userLength = +userLength || passwordLength();
    delete (userLength);
    // Call function again so they can enter a new value

  }

  userLength = parseInt(userLength);

  console.log(userLength);

  return userLength;
};

// function to generate the password
function generatePassword() {
  // variable holding the password length
  var passLen = passwordLength();
  // variable holding the password array
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