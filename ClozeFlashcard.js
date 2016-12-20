

//Constructor for Cloze Card

function ClozeCard(text,cloze){
    this.text = text;
    this.cloze = cloze;
//cloze for deletion
    this.deletedCloze = function(){
 
    };

//Creates printInfo method and applies it to all Cloze Flashcards

    this.printInfo = function(){
          console.log("Cloze Question: " + this.text + "\nCloze: " + this.cloze)
    };
   
};
   
 
 ClozeCard();

 module.exports = ClozeCard;