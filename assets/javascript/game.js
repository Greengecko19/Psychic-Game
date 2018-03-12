
// Set up variables
var userInput;
var userChoices = [];
var guessesLeft = 9;

var possible = "abcdefghijklmnopqrstuvwxyz0123456789";
var compSelect = possible.charAt(Math.floor(Math.random() * possible.length));
console.log("compSelect:  " + compSelect);


function main() {

    // activated by any key press
    document.onkeyup = function(keyListen) {
        userInput = keyListen.key;
        console.log("userInput:  " + userChoices);
        guessesLeft--;
        userChoices.push(userInput);
        document.getElementById("user-text").innerHTML = userChoices;
        document.getElementById("guesses-left").innerHTML = guessesLeft;

        // if match, celebrate and stop script
        if (userInput == compSelect) {
            document.getElementById("bingo").innerHTML = ("BINGO!!\n\nYou got it right!!");
            
            if (guessesLeft == 9) {
                console.log(guessesLeft);
                userChoices = [];
            }
        }

        // press Enter to restart game
        if (parseInt(event.keyCode,10) == 13) {
            location.reload(true);
            guessesLeft = 9;
            userChoices = [];
            return true;
        }
    }

}

main();