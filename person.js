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
export default Person;
