
// Set up variables
var userText;
var compText;
var guessesLeft = 9;

var possible = "abcdefghijklmnopqrstuvwxyz0123456789";
var compSelect = possible.charAt(Math.floor(Math.random() * possible.length));
console.log("compSelect:  " + compSelect);


// This function is run whenever the user presses a key.
document.onkeyup = function(keyListen) {
    userText = keyListen.key;
    console.log("userText:  " + userText);
    document.getElementById("user-text").innerHTML = userText;
    

    // Allow 9 guesses and calculate wins and losses
    for (i = 0; i < 10; i++) {    
        if (userText === compSelect) {
            document.getElementById("bingo").innerHTML = ("BINGO!!<p>The computer chose:  " + compSelect);
            return false;

        } else {
            guessesLeft--;
        }
    }

};

