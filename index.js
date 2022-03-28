// // 1.Way to print in javascript
// // console.log("hello world");
// // alert("me");
// // document.write("this is document write");

// // 2. javascript console API

// // console.log("hello world", 4 + 7, "Another log");
// // console.warn("this is warning");
// // console.error("this is an error");

// // 3. javascript variables
// //  what are variables? - container to store data values.
// var number1 = 56;
// var number2 = 34;
// console.log(number1 + number2);

// 4. Datatypes in javascript.
// numbers
// var num1 = 100;
// var num2 = 200;
// console.log(num1, num2);

// 5.string
// var str1 = "this is a string";
// var str2 = 'this is also a string';
// console.log(str1, str2);

// 6.objects
// var marks = {
//     manish: 100,
//     rajan: 90,
//     ankit: 80
// }
// console.log(marks);

// 7.booleans
// var a = true;
// var b = false;
// console.log(a, b);

// 8.undefined
// var und;
// console.log(und);

// 9.null
// var n = null;
// console.log(n);


// At a very high level, there are two types of datatypes in javascript
// 1. primitive datatypes: String, number, boolean, Symbol, undefined, null
// 2. reference datatypes: Array, Objects

// 10.array
// var arr = [1, 2, "manish", 4, 5];
// console.log(arr);

// 11.operators in javascript
// arithmetic operators
// var m = 100;
// var j = 10;
// console.log("m + j is:", m + j);
// console.log("m - j is:", m - j);
// console.log("m * j is:", m * j);
// console.log("m / j is:", m / j);

// 12.assigment operators
// var m = j;
// m += 2; //m = m + 2;
// m -= 2;
// m *= 2;
// m /= 2;
// console.log(m);

// 13.comparison operators
// var l = 20;
// var t = 40;
// console.log(l == t);
// console.log(l >= t);
// console.log(l <= t);
// console.log(l > t);
// console.log(l < t);


// 14.logical operators
// logical and
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// *logical or
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// *logical not
// console.log(!true);
// console.log(!false);

// 15.Function in javascript
// function avg(a, b) {
//     c = (a + b) / 2;
//     return c;
// }
// DRY = Do not repeat yourself
// c1 = avg(10, 20);
// c2 = avg(37, 78);
// console.log(c1, c2);

// 16.conditionals in javascript
// var age = 41;
// *single if statement-
// if (age > 18) {
//     console.log("you can drink rasna water");
// }

// *if - else statement
// if (age > 18) {
//     console.log("you can drink rasna water");
// }
// else {
//     console.log("you cannot drink rasna water");
// }


// *if-else ladder
// age = 31;
// if (age > 18) {
//     console.log("you are not a kid");
// }
// else if (age > 26) {
//     console.log("bache nahi rhe");
// }
// else if (age > 26) {
//     console.log("yes bache nahi rhe");
// }
// else if (age > 18) {
//     console.log("18 bache nahi rhe")
// }
// else {
//     console.log("bache rhe");
// }
// console.log("End of ladder");

// 17.Loops in javascript
//var array = [1, 2, 3, 4, 5, 6, 7];
//console.log(array);

// *for loop
// for (var i = 0; i < array.length; i++){
//       console.log(array[i]);
// }

// *forEach loop
// array.forEach(function (element) {
//     console.log(element);
// })

// *while loop
// let k = 0;
// while (k < array.length) {
//     console.log(array[k]);
//     k++;
// }

// *do while loop
//  do{
//      console.log(array[k]);
//      k++;
//  }while(k < array.length);

// 18.break and continue in javascript

// var arr = [1,2,3,4,5,6,7,8];
// for(var i = 0; i< arr.length; i++){
//     if(i == 3){
//         break;  // use of break and continue
//     }
//     console.log(arr[i]);
// }

// *Another method of array in javascript
// let myArr = ["man","pan",10,20,true,null];
// console.log(myArr.length);
// console.log(myArr.pop()); //array ka sbse last wala work nikal ke dega
// console.log(myArr.shift()); //array ka first wala word nikal ke dega
// console.log(myArr.toString());

// 19.string method in javascript
// let myLovelyString = "Manish is a good boy";
// console.log(myLovelyString.length); // total length btayega 
// console.log(myLovelyString.indexOf("a")); // indexof ka mtlb ki a kon se position pe hai
// console.log(myLovelyString.slice(3, 5)); // slice means string mese letter ko cut krke deta hai.
// d = myLovelyString.replace("Manish", "Rishav"); //replace krega Manish ke jagah rishav.
// console.log(d);

// // 20.Date concept in javascript
// const myDate = new Date();
// console.log(myDate.getDate());
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getHours());

// **DOM Manupulation
// let elem = document.getElementById('click');
// console.log(elem);

// let elemClass = document.getElementsByClassName("container");
// console.log(elemClass);
// //elemClass[0].getElementsByClassName.background = "yellow";
//  elemClass[0].classList.add("bg-primary");
//  elemClass[0].classList.add("text-success");
//  console.log(elem.innerHTML);
//  console.log(elem.innerText);

//  console.log(elemClass[0].innerHTML);
//  console.log(elemClass[0].innerText);

//  tn = document.getElementsByTagName('div');
//  console.log(tn);
//  createdElement = document.createElement('p');
//  createElement.innerText = "this is a created para";
//  tn[0].appendChild(createElement);
//  createElement2 = document.createElement('b');
//  createElement2.innerText = "this is acreated bold";
//  tn[0] = replaceChild(createElement2, createElement);

//  // Selecting using query
//  sel = document.querySelector('.container');
//  console.log(sel);
//  sel = document.querySelectorAll('.container');
//  console.log(sel);

//  function clicked(){
//      console.log("The button was clicked");
//  }
//  window.onload = function(){
//      console.log('The document was loaded');
//  }

// Events in javascript
//  firstContainer.addEventListener('click', function(){
//      console.log("click hua");
//  })

//  firstContainer.addEventListener('mouseover', function(){
//     console.log("mouse on container");
//  })

//  firstContainer.addEventListener('mouseout', function(){
//     console.log("mouse out of container");
//  })

// *Arrow function
// function summ(a,b){
//     return a+b;
// }
// summ = (a,b)=>{
//     return a+b;
// }

// settimeout and setinterval

// **json
// obj = { name: "manish", length: 1 }
// jso = JSON.stringify(obj)
// console.log(jso);
// console.log(typeof jso);
// parsed = JSON.parse(`{"name":"manish", "length":1, "a":{"this":"that"}}`);
// console.log(parse);
















































































