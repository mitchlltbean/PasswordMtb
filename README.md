# PasswordMtb


## Links

<br>
Live Site - https://mitchlltbean.github.io/PasswordMtb/
<br>
GitHub Repo - https://github.com/mitchlltbean/PasswordMtb

<br>
<br>

Task

This week’s homework requires you to create an application that an employee can use to generate a random password based on criteria they’ve selected by modifying starter code. This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean and polished user interface that is responsive, ensuring that it adapts to multiple screen sizes.


![Screenshot](Capture.PNG)



GIVEN I need a new, secure password
WHEN I click the button to generate a password

## button was generated before project along with html and css

THEN I am presented with a series of prompts for password criteria
included prompts and alerts for users to enter information (how many charectors you would like, lowercase letter, uppercase letter, number, or special charectors )

WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters

## a prompt will ask for a length between 8-128 charectors if answered truthfully function will continue. However if flase statement detected an alert if prompt for user to renenter a correct value and reload.

WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters

## creates a true false statement on selection(lowercase letter, uppercase letter, number, or special charectors) if true these values were randomized collected and placed into an variable with an empty array(newPassarray) for storage to be used) if false not included

WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
 
 ## if true these values were pulled from an array containg specific criteria based on an if statement to each prompt randomized collected and placed into an variable with an empty array(newPassarray) for storage to be used

WHEN all prompts are answered
THEN a password is generated that matches the selected criteria

## The password i can currently gereate only include one of each of the selected criteria instead of desired length and is returned to the page displayed properly however with commas seperating and not generating

WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

i can display to page with my incomplete password also including commas between collected criteria stored in the empty array. 

I am currently stuck trying to get the information in empty array (newPassarray) to interact with the password legnth criteria to create a full valid password(maybe loop, while loop filling in array based on which criteria was pushed to empty array (newPassarray) -->

