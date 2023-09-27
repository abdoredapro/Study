// let user = {
//     hasDiscount : true,
//     showDis: function ()  {
//       return `You ${this.hasDiscount ? '' : 'Don\'t '} Have Discount`
//     }
//   }
//   let obj2  = Object.assign(user, {name:'Ahmed'})
//   console.log(obj2)

// let user = {
//     name:'Ahmed',
//     age:26
//   }
//   delete user.name
//   console.log(user)

// let user = {
//     name:'Abdo',
//     age: 23
//   }
//   for (let el in user) {
//     // console.log(`this is prop ${el} => ${user[el]}`)
    
//   }

// function Phone(serial) {
//     this.serial = `#${serial}`
//   }
//   let phone1 = new Phone('56210000')
//   let phone2 = Phone('562100001')
//   console.log(phone1.serial)
//   console.log(phone2 instanceof Phone)



// function User(name, email, age,showEmail) {
//     this.name = name;
//     this.email = email;
//     this.age = age;
//     this.updateName = function (newName) {
//       if(age > 18) {
//         this.name = newName;

//       } else {
//         console.log('You Can\'t Update Name Because of age restriction')
//       }

//     }
//     this.showEmail = function () {
//       if(showEmail == true) {
//         return `Email is : ${this.email}`
//       } else {
//         return `Data is Private`
//       }

//     }

//   }

//   let user1 = new User('Abdo', 'abdo@gmail.com', 17, true)
//   // console.log(user1.showEmail())
//   user1.updateName('A')
//   // console.log(user1.name)
// let myString =  'Abdo'
// let myStr =  'sayed'
// String.prototype.helloMe = function () {
//     return `Hello my Friend ${this}`
// }


// console.log(myString.helloMe())

// class User {

//     static count = 0 // static خاصه بكل خاصيه تبع الكلاس نفسه مش تبع الى بتستدعيه


//     constructor(name, email, Phone) {
//         this.name = name;
//         this.email = email;
//         this.Phone = Phone
//         User.count++
//     }
//     showEmail() {
//         return `Email Is ${this.email}`
//     }

//     static countObj () {
//         return `${this.count} Object Created` 
//     }


// }

// class Admin extends User{
//     constructor(name, email) {
//         super(name, email) // name for parent constructor [Admin]
//     }
// }


// let user1 = new User('Abdo', 'mondyana@gmail.com')
// let Admin1 = new Admin('Abdo', 'mondyana@gmail.com')
// console.log(Admin1)

// console.log(User.countObj())



// class User {

//     static count = 0 // static خاصه بكل خاصيه تبع الكلاس نفسه مش تبع الى بتستدعيه

//     constructor(name, email, Phone) {
//         this.name = name;
//         this.email = email;
//         this.Phone = Phone
//         User.count++
//     }
//     get showEmail() {
//         return `Email Is ${this.email}`
//     }
//     set changeName (newName) {
//         this.name = newName
//         return `New name is ${newName}`
//     } 

// }


// let user1 = new User('Abdo', 'mondyana@gmail.com')
// user1.changeName = 'Saued'
// console.log(user1.name)

// /*
// [get] => turn method to prop
// [set] => you can add value to method

// */

// let myObj = {
//     a:1,
//     b:2
// }
// Object.defineProperty(myObj, 'c', {
//     writable:true,
//     enumerable:false,
//     configurable:true,
//     value:3
// })
// myObj.c = 'Abdo' // Can't writable
// // enumerable
// for (let prop in myObj) {
//     console.log(prop, myObj[prop])
// }


// delete myObj.c // configurable

// console.log(myObj)



