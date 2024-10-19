// 1. переменные и типы данных
let userName = "sasha"; //string
let age = 26; //number
let city = "moscow"; //string
console.log (typeof userName, typeof age, typeof city);

// 2. Конкатенация строк
let firstName = "sasha";
let lastName = "strechie";
let fullName =  firstName + " " + lastName;
console.log (fullName);

// 3. Преобразование типов
let strNumber = "57";
let number = Number(strNumber);
console.log(Number.isInteger(number));

//4. Методы строк
let str = "JavaScript is fun!";
console.log(str.substring(13, 17).toUpperCase(13, 17));

// 5. Шаблонные строки
let product = "яблоко";
let price = 50;
let greeting = `цена на ${product} составляет ${price} рублей`;
console.log(greeting);

// 6. Работа с числами
console.log(Math.round(48.93824));

// 7. Сравнение значений
let num1 = 10;
let num2 = 20;
let isNum1Bigger = num1 > num2;
console.log(isNum1Bigger);

// 8. Написание литералов
let person = {
    name: "sasha",
    age: 26,
    favColor: "grey"
};
console.log(person);

// 9. Методы чисел
let num = 5.34947;
console.log(num.toFixed(2));

// 10. Преобразование строки в массив
let fruits = "apple, orange, banana";
let fruitsArray = fruits.split(", ");
console.log(fruitsArray);

// 11. Проверка на NaN
let invalidOperation = "строка" / 2;
console.log(isNaN(invalidOperation));

//12. Многострочный текст
let csv = "name,age,city";
let headers = csv.split(",");
console.log(headers);

//13. Преобразование данных
let booleanValue = true;
let booleanAsString = String(booleanValue);
console.log(typeof booleanAsString);

//14. Использование Symbol 
let id = Symbol("id");
let user = {
  [id]: 123,
  name: "sasha"
};
console.log(user);

//15. Работа с массивом
let arr = [1, 2, 3, 4, 5];
console.log(arr.length);
