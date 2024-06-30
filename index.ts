#! /usr/bin/env node
import inquirer from "inquirer";

//1...COMPUTER WILL GENERATE A RANDOM NUMBER

//2...USER INPUT GUSSEING NUMBER

//3...COMPARE USER INPUT WITH COMPUTER GUSSESING NUMBER
const randomNumber =Math.floor(Math.random()* 10+1);


const answers =await inquirer.prompt([
    {
     name:"useraGussesingNumber",
     type: "number",
     message:"plz guest a number 1 to 10"
     }
]);
console.log(answers);
if(answers.useraGussesingNumber === randomNumber)
    {
        console.log("CONGRATUALATION  IS GUSSEING RIGHR NUMBER")
    }
    else
    {
    console.log("your guest wrong number")
    }

 

