// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword () {

  var result = '';

  var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var num = ['1','2','3','4','5','6','7','8','9','0'];
  var special = [']','<','>','?','!','@','#','$','%','^','&','*','(',')','_','+'];

  var characters = [] ;

  var charactersLength = characters.length;

  userInput = parseInt(prompt('How many characters long should this password be?', ''))

  if (!userInput) {
    alert('please specify length!');
  }
  else if (userInput < 8 || userInput > 128) {
    userInput = parseInt(prompt('please specify length between 8 and 128 characters.'))
  }
  var confirmNum = prompt('would you like to include numbers? (type y or n)', '')
  
  var confirmCap = prompt('would you like capital letters? (type y or n)', '')

  var confirmSpecial = prompt('would you like special characters? (type y or n)')
  
  if (confirmNum == 'y'){
    characters.concat(lowerCase, num);
  }
  if (confirmCap == 'y'){
    characters.concat(lowerCase, upperCase, num);
  }
  if (confirmSpecial == 'y') {
    characters.concat(lowerCase, upperCase, num, special);
  }
  for (var i = 0; i < userInput; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
    
  return result;
}
