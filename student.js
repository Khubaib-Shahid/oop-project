import Person from "./person.js";
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
export default Student;
