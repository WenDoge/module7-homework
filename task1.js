// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.

function func (a)
{
  for (let key in a)
    {
      if (a.hasOwnProperty(key))
      {
        console.log(`key: ${key}, property: ${a[key]}`);
      }
    }
}
const obj =
 {
   name: "Victor",
   surname: "Sergeev",
   age: 24
 }
const obj2 = Object.create(obj);
obj2.city = "Rostov";
obj2.isStudent = true;

func(obj2);