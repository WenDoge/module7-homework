// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.

function checkProp (str, obj)
{ 
   let count = 0;
   for (let key in obj)
   {
      if(obj[key] == str)
      { 
         return true;
      }
   }
   if (count == 0)
   {
      return false;
   }
}
const obj1 =
 {
   name: "Victor",
   surname: "Sergeev",
   age: 24
 }
console.log(checkProp(15, obj1));