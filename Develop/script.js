// Assignment code here

makeid = function (length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}


function generatePassword() {
  passwordCriteria.reset();
  // passwordLength();
  makeid(passwordCriteria.length);
  return makeid(passwordCriteria.length);


};
// function to get length of password user wants
passwordLength = function () {

  var userLength = "";

  while (userLength === "" || userLength === null) {
    userLength = prompt("How long would you like your password? Please select between 8 and 128.");
  }
  if (userLength < 8 || userLength > 128) {
    window.alert("Please select a value between 8 and 128.");
    // Call function again so they can enter a new value
    // passwordLength();
  }
  userLength = parseInt(userLength);
  return userLength;
};
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var passwordCriteria = {
  characters: makeid(),
  reset: function () {
    this.length = passwordLength();
    this.characters = makeid();
  }
};

// console.log(makeid(passwordCriteria.length));
// console.log(passwordCriteria.length);
// console.log(passwordCriteria.characters);

