function Student(firstname,lastname,sex,dob)
{
    this.firstname=firstname;
    this.lastname=lastname
    this.sex=sex;
    this.dob=new Date(dob);
    Student.prototype.getbirthyear_and_fullname=function()
    {
        return `${this.dob.getFullYear()} ${this.firstname} ${this.lastname}`
    }

}



const student1=new Student('s','b','m',('10-01-1999'))
const student2=new Student('d','c','r',('10-01-2000'))
const currentdate1=new Date('06-27-2022')
//let student1_age=Math.abs(currentdate.getFullYear()-student1.dob.getFullYear()
let ageoffirststudent=currentdate1.getFullYear()-student1.dob.getFullYear();
let ageofsecondstudent=currentdate1.getFullYear()-student2.dob.getFullYear();
if(ageoffirststudent>ageofsecondstudent)
{
    console.log(`${student1.firstname} ${student1.lastname}`);
}
else
console.log(`${student2.firstname}${student2.lastname}`)
console.log(student1.getbirthyear_and_fullname())
console.log(student2.getbirthyear_and_fullname())
Student.prototype.elible=function(minAge)
{
    if(ageoffirststudent>=minAge)
    {
        return 'student1 is elegible';
    }
    else
    {
        return`student two is elegible`
    }
}
console.log(student1.elible(18));
console.log(student2.elible(18));
