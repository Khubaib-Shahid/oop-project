#! /usr/bin/env node

import inquirer from "inquirer";
import Person from "./person.js";
import Student from "./student.js";

let ans = await inquirer.prompt([
    {message : "type 1 if you like to talk others and type 2 if you would rather keep to yourself", name : "ans", type : "number"}
])

let myPerson = new Person();

myPerson.askQuestion(ans.ans);
console.log(myPerson.getPersonality);

let user = await inquirer.prompt([
    {message : "Enter your name", name : "name", type : "input"}
])

let myStudent = new Student();

myStudent.getName = user.name;

console.log("your name is " + myStudent.getName + " and your personality is " + myStudent.getPersonality);