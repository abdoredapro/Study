/* 
//  var => global scope
//  let => function scope
//  Ex:-
//  let a = 'hello'; // function scoped
// var b = 'world'; // globally scoped
// console.log(window.a); // undefined
// console.log(window.b); // 'world'


// let color = 'red';

// const point = (() => {
//     return  {
//         changeColor: () => {
//             color:'red';
//             return color;
//         }
//     }
// });
// console.log(point().changeColor())


// const geneName = (name) => {
//     console.log('hello => ' + name)
// }
// const processName = (callback) => {
//     name = 'Ahmed';
//     callback(name);
// }
// processName(geneName)
// async function fetchUser() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/postss');
//     const users = await res.json();
//     const result = users.map(el=>el);
//     return new Promise((resolve,reject)=> {
//         if(result) {
//             resolve('You Have User')
//         } else {
//             reject(new Error('No User!'))
//         }
//     }).then(resultt =>console.log(resultt)).catch(() => )
// }
// fetchUser();

// function Bike(model,color) {
//     this.model = model;
//     this.color = color;
//     this.getDetails = () => {
//         return this.model + ' color is : ' + this.color
//     }
// }
// let Bike1 = new Bike('2021','red');
// console.log(Bike1)


// class Bike {
//     constructor(model,color) {
//         this.model = model;
//         this.color = color;

//     }
// }


// (function () { 
//     var foo = 'hello';
// console.log(foo);
//  })
// ();
// console.log(foo); //Error: foo is not defined

// if (true) {
//     // this 'if' conditional block doesn't create a scope

//     // name is in the global scope because of the 'var' keyword
//     var name = 'Hammad';
//     // likes is in the local scope because of the 'let' keyword
//     let likes = 'Coding';
//     // skills is in the local scope because of the 'const' keyword
//     const skills = 'JavaScript and PHP';
// }


// console.log(name); // logs 'Hammad'
// console.log(likes); // Uncaught ReferenceError: likes is not defined
// console.log(skills); // Uncaught ReferenceError: skills is not defined

// ========= ======================

/*
  Important Knowledge
  For Promises
  - Call Stack
  --- Mechanism To Make Interpreter Track Your Calls
  --- When You Call A Function Its Added To The Stack
  --- When Function Executed Its Removed From The Stack
  --- The Interpreter Continue Calling From The Last Point Reached
  --- Call Stack Detect Web API And Leave It To The Browser To Handle It
  - Web API
  --- Methods Available From Environment => Browser
  --- When Complete It Add The Callback To The Callback Queue
  - Event Loop
  --- Wait The Call Stack To Finish
  --- Get Callback From Callback Queue
  --- Add Callback To Call Stack
  - Callback Queue
*/

// Example One

// let i = 10;
// let j = 20;
// console.log(i + j);

// function first() {
//   console.log("Hello First");
// }

// function second() {
//   first();
//   console.log("Hello Second");
// }

// second();

// // Example Two

// window.setTimeout(() => console.log("Last"), 1000);
// console.log("One");
// window.setTimeout(() => console.log("Two"), 0);
// console.log("Three");

// // Example Three

// window.setTimeout(() => console.log(myVariable), 0); -> web API

// let myVariable = 100;

// myVariable += 200;

// myArray.copyWithin(target, start , end)
// ===================== Object =========
/* Object.entries(obj) => make object elementt
in Array



*/
let str = 'elie'
let arr = ["b","A","C"]
arr.fill()
console.log(3 ** 2)
/*
============= pop - push - shift - unshift =========
pop() => Remove last element in array
push() => add element in last array
shift() => remove the first element in array
unshift() => add element in first array


some(element, index, arr)
every(element, index, arr)
reduce (prev, current,currentindex, Array )




*/

