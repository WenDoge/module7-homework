// Написать функцию, которая создает пустой объект, но без прототипа.

function ObjectCreate (a) 
{
 return a = Object.create(null);
}

let obj = new ObjectCreate;
console.log(obj);