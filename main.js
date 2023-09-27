// function financial(x) {
//     return Number.parseFloat(x).toFixed(3);
//   }
// //   Math.trunc()

//   console.log(financial('123.456 ssad'));
//   // expected output: "123.46"

let obj = {
    a:1,
    b:2
}



let arr = ['a','b','b','c']
arr.fill('#',2,3)
// console.log(arr)




let myObj = {
    name:'Zucks',
    age: 26,
    getName() {
      return `my Name is ${this.name}`;
    }
  
  }
  
String.prototype.checkEmail = function () {
  // check email contain @
  let arr = ['gmail.com', 'hotmail.com' ,'outlook.com']
  let status = ''
  if(this.includes('@')) {
    status = 'This is Valid Email'
  } else {
    status = 'Not Valid'
  }
  let checkDomain = arr.some(el => {
    if(this.includes(el) == true) {
      status = 'This is Valid Email'
    } else {
      status = 'Not Valid'
    }
  })
  
  return status
}

class Email {
  
}

let email = 'abdooutlook.com'
console.log(email.checkEmail())

//

