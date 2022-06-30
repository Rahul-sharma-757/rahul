//////1. Ways to print in javascript//////
// console.log('hello world');
// alert('me');
// document.write("this is document write")

//////2. javaScript console API//////
// console.log('hello world');
// console.warn("this is a warning");
// console.error("this is an error");
// console.clear();
// console.assert(4==4);

// // //3. JavaScript Variables  // // //
// What are Variables? =ans= Container to store data values.

/* Multi 
line 
comment */

/*var number1 = 34;
var number2 = 56;
console.log(number1 + number2);

// // //4. Data types in JavaScript // // //

//1a Numbers//
var num1 = 455;
var num2 = 56.76;
console.log(num1);
//b Strings //

var str1 = "This is a string";
var str2 = 'This is also a string';
console.log(str1);

//2c  Object //
var marks = {
    ravi: 34,
    subham: 56,
    rahul: 97.7773
}
console.log(marks);

//3d Booleans //
var a = true;
var b = false;
console.log(a, b);

//4e Undefined//
// var und = undefined;
var und;
console.log(und);

//5f NULL //
var n = null;
console.log(n);

/*
At a very high level, there are two types of data types in JS.
1. Primitive data types: undefined, null, numbers, string, boolean, symbol
2. Reference data types: Arrays and Objects

// // // // Array // // // //
var arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(arr[0]);
*/

// oprations in js //
//Arithmetic operations //
// var a = 100;
// var b = 10;
// console.log("The value of a + b is ", + a + b);
// console.log("The value of a - b is ", + a - b);
// console.log("The value of a * b is ", + a * b);
// console.log("The value of a / b is ", + a / b);

// Assignment Operators//
// var c = b;
// c += 2; // c = c + 2 
// c -= 2; // c = c - 2
// c *= 2; // c = c * 2
// c /= 2; // c = c / 2
// console.log(c);

// Comparision Operators //
// x = 34;
// y = 56;

// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x < y);
// console.log(x > y);

// Logical Operators //
// Logical AND
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// Logical OR
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

//Logical NOT
// console.log(!true);
// console.log(!false);

// // // Functions // // //
// DRY = Do not repeat yourself
// function avg(a, b){
//     c = (a + b)/2;
//     return c;
// }
// c1 = avg(4, 6);
// c2 = avg(14, 16);
// console.log(c1, c2);

// Conditionals in JS

// var age = 77;
// Single if Statement//
// if (age > 18){
    //     console.log("you are not a kid");
// }

// if - else statement
// if (age > 18){
//     console.log("you are not a kid");
// }else{
//     console.log("you are a kid");0
// }

// if - else ladder

// if(age > 18){
//     console.log('you are not a kid');
// }
// else if(age < 18){
//     console.log('you are a kid');
// }
// else if(age == 18){
//     console.log('yeaah! you are now young');
// }
// else{
//     console.log('You are so small');
// }

function getAge() {
    let age = document.getElementById('agePerson').value;
    if(age >= 18){
        document.getElementById('note').innerHTML = "You are able to drink rasana water";
    }
    else{
        document.getElementById('note').innerHTML = "You are too small to drink rasana water";
    }
}

// JS Loops //
//1. for loop //
//  var arr = [1, 4, 6, 67, 657, 90, 8];
//  for (let i = 0; i < arr.length; i++) {
//      if (i == 2) {
//         //  break;
//         continue;
//      }
//     console.log(arr[i]);
//  }

// 2. for each loop
// arr.forEach(element => { // arr.forEach(function(element){console.log(element);})
//     console.log(element);
// });

// While loop //
// let j = 0;
// while (j<arr.length) {
//     console.log(arr[j]);
//     j++;
// } 

// do-while loop //
// let j = 0;
// do {
//     console.log(arr[j]);
//     j++;
// } while (j<arr.length);

// Array Methods //
// let myarr = ["Fan", 34, null, 'rahul', true, 34.6]
// console.log(myarr.length);
// myarr.pop();
// myarr.push('rahul');
// myarr.shift();
// myarr.unshift('rahul');
// console.log(myarr);
// console.log(myarr.sort());


// String methods in JS //
// let mystr = "Rahul Sharma Sharma";
// console.log(mystr.length);
// console.log(mystr.indexOf('Sharma'));
// console.log(mystr.lastIndexOf('Sharma'));
// console.log(mystr.slice(0, 5));
// console.log(mystr.replace('Sharma', 'Rahul'));

// JS Dates //
// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getTime());
// console.log(myDate.getDay());
// console.log(myDate.getHours());

// DOM Manipulation//
// let elem = document.getElementById('click');
// let elem = document.getElementsByClassName('container');
// elem[0].style.backgroundColor = "Red";
// elem[0].classList.add("bg-primary");
// console.log(elem[0].innerHTML);
// console.log(elem[0].innerText); 
// console.log(elem);

// let tn = document.getElementsByTagName('div');
// console.log(tn);
// let createdElement = document.createElement('b');
// createdElement.innerHTML = "This is a created peragraph";
// tn[0].appendChild(createdElement); // create element
// tn[0].removeChild(createdElement); // remove created element


///Selecting using qury///
// let sel = document.querySelectorAll('.container');
// console.log(sel);

// Events in Javascript //
// function clicked() {
//     console.log('the button was clicked')
// }
// window.onload = function() {
//     console.log('document loaded');
// }
// let a = document.getElementById('firstContainer');
// a.addEventListener('click', function() {
//     document.querySelectorAll('.btn')[0].innerHTML = "<b>clicked</b>";
//    console.log('clicked on container');
// });
// a.addEventListener('mouseover', function() {
//    console.log('mouseover on container'); 
// });
// a.addEventListener('mouseout', function() {
//     console.log('mouseout out container'); 
//  });
//  a.addEventListener('mouseup', function() {
//     console.log('mouseup of container');
//     document.querySelectorAll('.btn')[0].innerHTML = "<b>click me</b>";
//  });
//  a.addEventListener('mousedown', function() {
//     document.querySelectorAll('.btn')[0].innerHTML = "<b>clicked</b>";
//     console.log('mousedown of container'); 
//  });

// arrow function 
// function sum(a, b) {
//     return a + b;
// }
// sum = (a,b) =>{
//     return a + b;
// }
// console.log(sum(35, 5));

// set timeout and set setInterval
// logKaro = () => {
//     console.log("I'm your log");
//     document.querySelectorAll('.btn')[0].innerHTML = "<b>clicked</b>";
// }
// // setTimeout(logKaro, 2000);
// let clr = setInterval(logKaro, 2000); //use clearTimeout() to cancel setInterval or setTimeout

// jS localStorage
// localStorage.setItem('name', 'Rahul Sharma');
// console.log(localStorage.getItem('name'));
// localStorage.removeItem('name');
// localStorage.clear();

// // JSON
// obj = {name: 'rahul', length: 1}
// jso =  JSON.stringify(obj);
//  console.log(typeof jso);
//  console.log(jso);


// backticks template-literals
a =34;
console.log(`this is my ${a}`);