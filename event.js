// //events are the functions that happened on different actions . 
// //addEventListener is used to add event listner and function
// var textbox=document.querySelector('#submit');
// textbox.addEventListener('click',function onsubmi(e)
// {
//     e.preventDefault();
//     let abc=document.querySelector('p');
//     abc.textContent="teri maa ka jai ho"


// }
// )
var abc=document.querySelector('#submit');
abc.addEventListener('mouseover',function(e){
    e.preventDefault();
    var def=document.querySelector('#lastname');
    console.log(def.value);

})
