#! /usr/bin/env node 
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log("Welcome To Number Guessing Game");
const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "please guess a number",
    }
]);
if (answer.userGuessNumber === randomNumber) {
    console.log("You are the winner congratulations you guessed the right number .");
}
else {
    console.log("you guessed a wrong number please try again.");
}
