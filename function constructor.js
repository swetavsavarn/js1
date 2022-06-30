// to create a function constructor we need to name the function constructor with the capital letter
function Person(firstname,lastname,dob)
{
    this.firstname=firstname;
    this.lastname=lastname;
    this.dob=new Date(dob); //to get dob in orignal format we have date object
    // this is how if we have to create a function inside a functional constructor
    // this.getfullname=function(){
    //     return `${this.firstname}${this.lastname}`
    // }
    
    //but this is the not the correct way to create a function inside a functional constructor , we have t0 use protype
    

}
Person.prototype.getfullname=function(){
    return `${this.firstname}${this.lastname}`
}
//we can also create the object of the functional constructor
const person1=new Person('swetav','savarn','01-10-1999');
const person2=new Person('xyz','abc','01-10-1989');
console.log(person1.lastname);
console.log(person2.dob.getFullYear());
console.log(person1.getfullname());
