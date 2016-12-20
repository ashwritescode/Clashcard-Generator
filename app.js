var inquirer = require('inquirer');
var fs = require('fs');
var BasicCard = require("./BasicFlashcard");
var ClozeCard = require("./ClozeFlashcard")
//Prompts
inquirer.prompt([
    
    {
        type:"list",
        message:"Which card would you like to make",
        choices:["Basic" , "Cloze"],
        name:"chosen"
    },
    {
        type:"input",
        name:"question",
        message:"Type your Question: "   
    },
    {
        type:"input",
        name:"answer",
        message:"The answer is: "
    }

]).then(function (answers){
    //if Basic was chosen
    if(answers.chosen === "Basic"){    
        var  bCard = new BasicCard(answers.question, answers.answer);
        bCard.printInfo();
        fs.appendFile("usersave.txt", answers.question +  " " + answers.answer + "\n");
    }else{ //if Cloze was chosen
        var cCard = new ClozeCard(answers.question, answers.answer);
        cCard.printInfo();
        fs.appendFile("usersave.txt", answers.question + " " + answers.answer + "\n");
    }
});

