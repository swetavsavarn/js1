//object literal are used to store values like key value pair ...like in java there is hash map
const object1={
    firstname:'swetav',
    lastname:'savarn',
    //we can also create object inside the object
    address:{
        city:'kathara',
        pincode:829116
    }


}
//now if we want to fetch the value of object
console.log(object1);
console.log(object1.lastname);
console.log(object1.address.city)
//we can also add the element in object
object1.hobbies=['laura','delahsun']
console.log(object1.hobbies[1]);
//we can also change the objects literal to the data type
var {firstname,lastname,address:{city}}=object1;
console.log(firstname);
//we can also create object literal array
const movie=[
    {
        name12:'swetav',
        city1:'kathara'
    },
    {
        name12:'swetav1',
        city1:'kathara1'
    }
]
console.log(movie[0].city1);
//if we want to convert object literal into json format
const objec11=JSON.stringify(object1);
