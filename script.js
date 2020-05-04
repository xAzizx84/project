'use strict'; //это строгий режим ES6

var number = 5; //числовые значения
var string = "Hello!"; //строка (кавычки, это обязательный атребут)
var sym = Symbol(); //символ
var boolean = true; //логический тип данных(либо да-true, либо нет-false)
null; //когда в коде чего-то не существует
undefined; // объект существует, но не имеет никакого значения
var obj = {}; // колллекция данных, это структура которая используется для хранения любых данных


let something;
console.log(something);

let persone = {
    name: "John",
    age: 25,
    isMarried: false
};

console.log(persone["name"]);

let arr =['plum.png', 'orange.jpg', 'apple.bmp'];
console.log(arr[1]);

//alert("Hi people!"); //предупреждение

// let answer = confirm("Are you here?"); //Вызывает окошко с вопросом, на который нужно ответить

// console.log(answer);

// let answer = prompt("Вам есть 18?", "Да");

// console.log(typeof(null));

// console.log("arr" + " - object");

let incr = 10,
    decr = 10; // операто равенства "=", если один раз -это присваивание, если два -это проверка на равенство, три -это строгая проверка по типам данных "2" и 2 (разный тип)

// incr++; //Инкремент величивает значение
// decr--; //Декримент уменьшает значение

// console.log(++incr); //префиксная форма возвращает уже измененное значение
// console.log(--decr); // + и - это операторы

console.log(incr++); //постфиксная форма возвращает старое значение
console.log(decr--); 

let isCheked = true,
    isClose = true;

console.log(isCheked && isClose); //опертор && (и) возвращает правду, только тогда, когда оба или 3-4 аргумента являются правдивыми
                                  //оператор || (или) возвращает правду, если хотя бы один из аргументов true