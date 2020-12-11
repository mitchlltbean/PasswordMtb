//TODO:create variables with arrays lower case, uc, special charect and numbers

//var lowerCase = []

//var special = []
//var numbers = []
//var finalArray =  
//TODO: create an empty array for user requested charecters
var newPassarray = []
//var bigArray= []



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
 
 // var passLength = prompt("How long ? (8-128)")
 //   if (passLength<8 || passLength>128){
 //     alert("plz select a proper charector")
 //     return
 //   }
  
  //TODO: create confirm to ask user if they want capital letters set to a variable
  var upperselect = confirm("Would u like uppercase letters in password?")
            
    if(upperselect === true){
      var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
      
      var finalArrayupper = (Math.floor(Math.random() * upperCase.length));
      
      //var finalArrayupper = getRandomElement(upperCase[]);
      
      console.log(upperCase[finalArrayupper])

      newPassarray.push(upperCase[finalArrayupper])

      //bigArray = bigArray.concat(upperCase)
      
    }
 // return(newPassarray)   
    

//     //if(upperselect === false){

//     //}


//   //TODO: create confirm to ask user if they want lower letters set to a variable

  var lowerselect = confirm("Would u like lowercase letters in password?")
            
  if(lowerselect === true){
    var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ,];
    
    var finalArrayupper = (Math.floor(Math.random() * lowerCase.length));
    
    //var finalArrayupper = getRandomElement(upperCase[]);
    
    console.log(lowerCase[finalArrayupper])
      //push whole ar
    newPassarray.push(lowerCase[finalArrayupper])
//     bigArray = bigArray.concat(lowerCase)
    

//   //  return(newPassarray)
//  // }

//   //TODO: create confirm  to ask user if they want numbers set to a variable

  var numselect = confirm("Would u like numbers in password?")
            
  if(numselect === true){
    var number = ["1" , "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9" ,];
    
    var finalArrayupper = (Math.floor(Math.random() * number.length));
    
    //var finalArrayupper = getRandomElement(upperCase[]);
    
    console.log(number[finalArrayupper])
      //push whole ar
    newPassarray.push(number[finalArrayupper])
//     bigArray = bigArray.concat(number)
    
  
//   //  return(newPassarray)

//   //}
//   //TODO: create confirm  to ask user if they want special charecters set to a variable

  var charselect = confirm("Would u like special charectors in password?")
            
    if(charselect === true){
      var char = ["~" , "`" , "!" , "@" , "#" , "$" , "%" , "^" , "&" , "*" , "(" , ")" , "_" , "-" , "+" , "=" , "{" , "[" , "}" , "]" , "|" , ":" , ";"];
      
      var finalArrayupper = (Math.floor(Math.random() * char.length));
      
      //var finalArrayupper = getRandomElement(upperCase[]);
      
      console.log(char[finalArrayupper])
        //push whole ar
      newPassarray.push(char[finalArrayupper])
      bigArray = bigArray.concat(char)
//       console.log(bigArray)
       return(newPassarray)
//     }
  
//   //TODO: create prompt  to ask user how long they want password tobe and set to var. Also user edge case of 8 to 128 charectors.

  




//   //TODO: create a condition to make sure that the user has chosen at least 1 type of charector.

  
//  // var passLength = prompt("How long ? (8-128)")
//    // if (passLength<8 || passLength>128){
//    //   alert("plz select a proper charector")
      
//  //   }

  

  

//   //TODO: create if statements, that checks if the user said y or n to diffent confirms they answered, and base on thiere response push those specific charectors to the empty array

//   //TODO:create a var to hold Final Results

//   //var finalPassword;
  
//   //TODO: I need a for loop to loop over my final array, it should run based on relts of the prompt when we asked user how many charectors they like password. Choose randomly from final array that holds the charectors user wanted and save them to finalPassword Var.

//   //*****
//   //var randNum = Math.floor(Math.random() * newPassarray) 
//   //inside of for loop (finalpassword = finalPassword + newPassarray[randNum])

//     //for (var i= 0; i < passLength ; i++)
  


//   //"return" data last outside of for loop

// }

  }

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
