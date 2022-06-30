//there are  some predefined windows object to get the things 
//console.log(window);
//window.alert('hi')
//there are some predifined DOm i.e. Document object model which is used to perform certain activites around the document like locating element
console.log(document.getElementById('lastname')) //this will fetch all the ids with the same id
// console.log(document.querySelector('p')) // this will return the first element
// console.log(document.querySelectorAll('.items')) //this will return all the elemnts present in the tag name ..here '.' represents the class name
// // to iterate throught the these items 
var abc=document.querySelectorAll('.items');

// for(var i=0;i<abc.length;i++)
// {
//     console.log(abc[i])
// }
// // we can perform some of the task directly from here without using html document by the help of selectors

var def=document.querySelector('.items'); //it will return the array of the ul
//var efg=document.querySelector('p')
//def.firstElementChild.textContent='hello' //this is used to change the text part of the tag of the first content of ul
def.children[1].textContent-'lahsun';
def.lastElementChild.innerHTML='<h4>laura</h4>' //
abc[1].textContent="teri maa ki jai"
abc[1].style.background="red"; //this is how we can change the css of any element alsso
