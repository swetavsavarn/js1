//swap two no using third variable
var a=20,b=30,temp;
temp=a;
a=b;
b=temp;
console.log(a,b);

//swap two variables without using third

a=a^b;
b=a^b;
a=a^b;
console.log(a,b);
