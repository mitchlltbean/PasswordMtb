//TODO:create variables with arrays lower case, uc, special charect and numbers

//var lowerCase = []

//var special = []
//var numbers = []
//var final =  





//TODO:
//TODO: use mathrandom to pull from array var's

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//TODO:create a generatePassword funtion with all logic inside

function generatePassword(){
  
  //TODO: create confirm to ask user if they want capital letters set to a variable
  var upperselect = confirm("Would u like uppercase letters in password?")
            
    if(upperselect === true){
      var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
      
      var finalArrayupper = (Math.floor(Math.random() * upperCase.length-1));
      
      console.log(finalArrayupper)

      return(finalArrayupper)
    }

    //if(upperselect === false){


    //}



  //TODO: create confirm to ask user if they want lower letters set to a variable


  //TODO: create confirm  to ask user if they want numbers set to a variable


  //TODO: create confirm  to ask user if they want special charecters set to a variable

  
  //TODO: create prompt  to ask user how long they want password tobe and set to var. Also user edge case of 8 to 128 charectors.

  




  //TODO: create a condition to make sure that the user has chosen at least 1 type of charector.

  //var passLength = prompt("How long ? (8-128)")

  //TODO: create an empty array for user requested charecters
  

  //TODO: create if statements, that checks if the user said y or n to diffent confirms they answered, and base on thiere response push those specific charectors to the empty array

  //TODO:create a var to hold Final Results

  //var finalPassword;
  
  //TODO: I need a for loop to loop over my final array, it should run based on relts of the prompt when we asked user how many charectors they like password. Choose randomly from final array that holds the charectors user wanted and save them to finalPassword Var.

  //Math.floor(Math.random() * upperCase.length) //inside of for loop

    //for (var i= 0; i < passLength ; i++)
  


  //return data last

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
