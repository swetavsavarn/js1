//classes are as same as functional constructor without having property of prototype
class person1{
    constructor(firstname,lastname,dob)
    {
        this.firstname=firstname;
        this.lastname=lastname;
        this.dob=new Date(dob);
    }
    getname()
    {
        return `${this.firstname} ${this.lastname}`
    }
}
const person=new person1('swetav','savarn ','06-01-2022');
console.log(person.getname());
