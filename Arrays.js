const array=['1',2,3,4,5,5];
//we can also create arrray in another way
// var arr=new Array[null];
// arr[0]='swetav'
//to access the element we use
console.log(array[0]);
//to push the element in the last we use
array.push('abx');
console.log(array);
//to remove the element from the lasr
array.pop();
console.log(array);
//to check whether the variable is array or not
console.log(Array.isArray(array));
//to place the element in the starting of the array
array.unshift('yo');
console.log(array);
//to check whether what is the index of the element 
console.log(array.indexOf(6));
