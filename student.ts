import Person from "./person.js";

class Student extends Person {
    private name : string;

    constructor () {
        super();
        this.name = "";
    }

    get getName() : string {
        return this.name;
    }

    set getName(value) {
        this.name = value;
    }

}

export default Student;