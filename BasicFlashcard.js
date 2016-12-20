var inquirer = require("inquirer");
var fs = require("fs");


// constructor function for basicflashcard
function BasicCard(question, answer) {
    this.question = question;
    this.answer = answer;
    // creates the printInfo method and applies it to all basicflashcard objects
    this.printInfo = function () {
        console.log("Question: " + this.question + "\nAnswer is: " + this.answer)
    };


};


BasicCard();



module.exports = BasicCard;
