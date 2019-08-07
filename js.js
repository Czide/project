'use strict';

a= 5;
console.log(a);


let persone = {
    name: "John", 
    age: 25, 
    isMarried: false
};

console.log(persone["name"]);

let arr = ['plum.png','orange.jpeg','apple.bmp'];
console.log(arr[0]);

//alert("Hellow world!");

//let answer = confirm("Are you here?");
//console.log(answer);

let answer = +prompt("Есть ли вам 18?", "Да");

/*console.log(typeof(answer));

console.log("arr" + " - object");
console.log(4 + +" - object"); */

let incr = 10,
    decr = 10;

console.log(incr++);
console.log(decr--);

console.log(5%2);
console.log("2" === 2);

let isChecked = true,
    isClose = false;

console.log(isChecked || !isClose);