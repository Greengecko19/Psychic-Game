
// Set up variables
var userInput;
var userChoices = [];
var guessesLeft = 9;

var possible = "abcdefghijklmnopqrstuvwxyz0123456789";
var compSelect = possible.charAt(Math.floor(Math.random() * possible.length));
console.log("compSelect:  " + compSelect);


// This function is run whenever the user presses a key.
document.onkeyup = function(keyListen) {
    userInput = keyListen.key;
    console.log("userInput:  " + userChoices);
    guessesLeft--;
    userChoices.push(userInput);
    document.getElementById("user-text").innerHTML = userChoices;
    document.getElementById("guesses-left").innerHTML = guessesLeft;

    if (parseInt(event.keyCode,10) == 13) {
        location.reload(true);
    }
    else {
        // Allow 9 guesses and calculate wins and losses
        for (i = 0; i < 10; i++) {    
            if (userInput == compSelect) {
                document.getElementById("bingo").innerHTML = ("BINGO!!\n\nYou got it right!!");
                return false;
            }
        }
    }

};

