var BasicCard = require("./Basiccard");
// imports the inqurier npm package
var inquirer = require("inquirer");
var basic = require("./BasicCard.json")
var cardDeck = [];
var usa;
var question = 0;
// we delcare a variable named usa and then we use the javaScript "new" operator to create a card using the BasicCard constructor function and we pass in a question and answer for the front and back parameters

function shuffle() {
	for (var i =0;i<basic.length;i++) {
    usa = new BasicCard(basic[i].front, basic[i].back);
	}
}

// var india = new BasicCard("When is India's independence date?", "August 15th");

// array of question objects
// loop over array and
// var questions = [usa, india]

function playGame(){
if (question <= cardDeck.length) {
// we use inquirer to display a prompt to the user
inquirer.prompt([

	{
// set type = input which indicates we except a user input
 	type: "input",
// set name attribute equal to "userInput" in order to store user guess
 	name: "userInput",
 // displays the answer from front of BasicCard
 	message: cardDeck[question].front
	}

// then() method returns a promise. It takes up two arguments: callback functions for the success and failure cases of the promise
// starts generating the response from the userInput
	]).then(function(answer, err){

	if(err){
	console.log(err)
	}
// console.log(answer)

// if the user gets the answer right then say correct!
	if(answer.userInput === cardDeck[question].back){
		console.log("correct!");
		question++;

// ask the user do you want to play again
	playGame()
	} else { 
	console.log("Incorrect! The correct answer is: " + cardDeck[question].back);
// ask the answer do you want to play again
	playGame();
	}
	});
  }
}

shuffle();
playGame();