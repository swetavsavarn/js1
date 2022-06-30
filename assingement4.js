const person={
    firstname:'jhon',
    lastname:'mathew',
    age:21,
    hobbies:['music','movies','sport'],
    address:
    {
        city:'delhi',
        state:'delhi'

    }
}
console.log(person.hobbies[1]);
console.log(person.address.state);
var{age}=person;
var{address:{state}}=person;
var{address}=person;
console.log(age);
console.log(state);
const todolist=[
    {
        text:'hii',
        id:12

    },
    {
        text:'hii1',
        id:13

    }
]
for(let i=0;i<todolist.length;i++)
{
    console.log(todolist[i].id)
}

