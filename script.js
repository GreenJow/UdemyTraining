'use strict';

var number = 5;
var string = "Hello!";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};

let something;
console.log(number);
console.log(something);

let person = {
    name: "John",
    age: 25,
    isMarried: false
}

console.log(person.name);
console.log(person["name"]);

let arr = ['plum.png','orange.jpg','apple.bmp'];

console.log(arr[2]);

alert("Hello world!");

let answer = prompt("18+?", "ДА!");
console.log(typeof(answer));