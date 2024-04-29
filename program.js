#! /usr/bin/env node
import inquirer from "inquirer";
let ans = await inquirer.prompt([
    { message: "type 1 if you like to talk others and type 2 if you would rather keep to yourself", name: "ans", type: "number" }
]);
class Person {
    personality;
    constructor() {
        this.personality = "mystery";
    }
    askQuestion(answer) {
        if (answer === 1) {
            this.personality = "Extrovert";
        }
        else if (answer === 2) {
            this.personality = "Introvert";
        }
        else {
            this.personality = "still mystery";
        }
    }
    get getPersonality() {
        return this.personality;
    }
}
class Student extends Person {
    name;
    constructor() {
        super();
        this.name = "";
    }
    get getName() {
        return this.name;
    }
    set getName(value) {
        this.name = value;
    }
}
let myPerson = new Person();
myPerson.askQuestion(ans.ans);
console.log(myPerson.getPersonality);
let user = await inquirer.prompt([
    { message: "Enter your name", name: "name", type: "input" }
]);
let myStudent = new Student();
myStudent.getName = user.name;
console.log("your name is " + myStudent.getName + " and your personality is " + myStudent.getPersonality);
