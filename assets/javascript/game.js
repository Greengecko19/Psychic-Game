
// Set up variables
var userText = document.getElementById("user-text");
var compText = document.getElementById("comp-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");

var wins = 0;
var losses = 0;
var guessesLeft = 9;


// This function is run whenever the user presses a key.
document.onkeyup = function(keyListen) {
    userText.textContent = keyListen.key;
    console.log(userText);
    
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var compSelect = possible.charAt(Math.floor(Math.random() * possible.length));
    console.log(compSelect);


    // Pass random selection to variable
    compText.textContent = compSelect;
    console.log(compText);
    

    // Allow 9 guesses and calculate wins and losses
    for (i = 0; i < 10; i++) {    
        if (userText === compSelect) {
            wins++;
        } else {
            losses++;
            guessesLeft--;
        }
    }

    winsText.textContent = wins;
    lossesText.textContent = losses;

}

