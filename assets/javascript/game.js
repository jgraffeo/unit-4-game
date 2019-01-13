//Crystal variables

var crystal = {
    blue: {
        name: "Blue",
        value: 0,
    },
    green: {
        name: "Green",
        value: 0,
    },
    red: {
        name: "Red",
        value: 0,
    },
    yellow: {
        name: "Yellow",
        value: 0
    }
}

//The scores to track stored in the following variables
var yourScore = 0;
var targetScore = 0;

//The wins and losses will be stored in the following variables
var winCount = 0;
var lossCount = 0;

/*This is the function used to help get random numbers. Parameters later inserted via
specifics set in objects (using object syntax format to target each crystal)*/

var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//
var startGame = function() {

    //Since this is the start game function, we want to reset the game to 0
    yourScore = 0;

    //Set a new target score (btw 19 and 20) using a randomizing function
    targetScore = Math.floor(Math.random () * (120 - 10 + 1)) + 19;

    //Set values for crystals (btw 1 and 12)
    crystal.blue.value      = getRandom(1, 12);
    crystal.green.value     = getRandom(1, 12);
    crystal.red.value       = getRandom(1, 12);
    crystal.yellow.value    = getRandom(1, 12);

    //Now we need to connect the JS code to the HTML IDs already established
    //Your score and target score will change according to what the values become
    $("#yourScore").html(yourScore);
    $("#targetScore").html(targetScore);
}

//Now we want to create a function that responds to clicks on the crystals
var addValues = function(crystal) {

    //We want to have the score change
    yourScore = yourScore + crystal.value;
    
    //Change HTML to reflect changes in score
    $("#yourScore").html(yourScore);

    //Call the checkWin function created below
    checkWin();
}

//This function determines if the user has won or lost and resets the game
var checkWin = function() {
    
    //Create a conditional to determine outcome if user loses or wins
    if(yourScore > targetScore) {
        alert("Uh oh! You lost! Try again.");
        console.log("You lost.");
    
    //Since you want the loss and win counters to track losses and wins, add to counter
    lossCount++;

    //The HTML needs to change to reflect this outcome
    $("#lossCount").html(lossCount);

    //Restart the game
    startGame();
    }
    else if (yourScore == targetScore) {
        alert("You won! Congratulations!");
        console.log("You won.");
    
    //Add to win counter
    winCount++;

    //HTML needs to change to reflect win
    $("#winCount").html(winCount);

    //Restart the game
    startGame();
    }
}

//More global scope functions
startGame();

//Click functions for crystals and add values from the addValues function

$("#blue").click(function() {
    addValues(crystal.blue);
});

$("#green").click(function() {
    addValues(crystal.green);
});

$("#red").click(function() {
    addValues(crystal.red);
});

$("#yellow").click(function() {
    addValues(crystal.yellow);
});