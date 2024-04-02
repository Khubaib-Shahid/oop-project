
class Person {

    private personality : string

    constructor() {
        this.personality = "mystery";
    }


    public askQuestion(answer : number) : void {
        if (answer === 1) {
            this.personality = "Extrovert";
        } else if (answer === 2) {
            this.personality = "Introvert";
        } else {
            this.personality = "still mystery";
        }
    }

    get getPersonality() : string {
        return this.personality;
    }
}

export default Person;