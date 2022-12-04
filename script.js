// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var lowercaseArray = ["a","b","c","d","e","f","g","h","i","j","k"];

var hasLowerCase = window.confirm("would you like your password lowercase?");

var passwordLengthPrompt = window.prompt("how long would you like your password to be?");

function getRandomIndex(arr = []) {
    console.log(arr)
    var idx = Math.floor(Math.random() * arr.length)
    return arr[idx]
}

// console.log(getRandomIndex(lowercaseArray));
function generatePassword() {
    console.log("generating a password with length" + passwordLengthPrompt + "characters")
    var possibleChars = []
    var guarateedChars = []
    var result = []
    var passwordLength = Number.parseInt(passwordLengthPrompt)
    if (Number.isNaN(passwordLength)) {
        console.log("password length is not a number")
        return null
    }

    if (hasLowerCase){
        console.log(hasLowerCase)
        possibleChars.push(lowercaseArray)
    }



    return result.join("")
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
