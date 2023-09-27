let discount = {
    hasDiscount : true,
    discount_avail : 30,
    checkDiscount: function () {
        return this.hasDiscount == true ? `Your discount is  %${this.discount_avail}` 
        : `Not Has Discount`
    }
}

const animal = {
    makeSound() {
    //   console.log(this.sound);
    }
  };
  
  const cat = Object.create(animal);
//   console.log(cat)
//   cat.sound = 'Meow';
//   cat.makeSound(); // Output: "Meow"
function details(name,age, height) {
    this.name   = name
    // this.age    = age
    // this.height = height


}
details.prototype.sendLove = function () {
    return `I send love for you , ${this.name}`
}
let newDetail = new details('Abdo Reda')
// console.log(newDetail.sendLove())


let Users = {
    name:'Abdo',
    email: 'abdo@gmail.com'
}
Object.defineProperty(Users, 'age', {
    writable:true, 
    enumerable:true, 
    configurable:true,
    value:26
})

for(prop in Users) {
    // console.log(`${prop} => ${Users[prop]}`)
}
// console.log(Users)
 
function Iphone(serial) {
    this.serial = serial
}
let Iphone_14_proMAX = new Iphone('5a4s8f2')
// console.log(Iphone_14_proMAX instanceof Iphone)


// {"name":"ahmed"} => {name:ahmed} 



let myName = 's'
String.prototype.check = function () {
    return this == 'abdo' ? true : false
}

class AllUsers {
    static count = 0
    constructor(name, email) {
        this.name = name
        this.email = email

    }
        get showEmail () {
        return `Email is : ${this.email}`
    }
 
    
}

let userOne = new AllUsers('sayed', 'sayed@gmail.com')
// let userOnse = new AllUsers('sayed', 'sayed@gmail.com')

let video1 = new Promise((resolve,reject) => {
    resolve('Video 1 Done')
})

let video2 = new Promise((resolve,reject) => {
    resolve('Video 2 Done')
})

let video3 = new Promise((resolve,reject) => {
    resolve('Video 3 Done')
})

Promise.all([
    video1,
    video2,
    video3
]).then((resolve) => {
    // console.log(resolve)
}).catch((error) => {
    console.log(error)
})

// 

async function getContext() {
    console.log('start')
    await new Promise((res, rej) => {
        setTimeout(() => {
            // res('DOne')
        },9000)
    }).then((message) => {
        console.log(message)
    })
    console.log('end')
}
// getContext()


  

// ========================== Strings =========================
// charAt() Returns the character at the specified index.
// concat() Returns a string that contains the concatenation of two or more strings.
// endsWith()
// includes()
// indexOf() Return Index of character start from the beginning
// lastIndexOf() Return Index of character start search form end to start
// replace()
// split() Make String to Array
// slice() 
// startwith()
// substring()

// ==================== Array ===================
// concat()
/* copywithin(target, start, end) 
    Target : The index you want to start from it, And Put
    Element Between [Start, end ] in this index and 
    resaume array element
    ex :
    let arr = [1, 2, 3, 4, 5, 6, 7, 8]
    console.log(arr.copyWithin(0,4,6))

    Output: [5, 6, 3, 4, 5, 6, 7, 8]

*/

/* every(element, index, array) Return True if all Element in array fulfills the condition

*/

// filter() - includes() - indexOf() - some()
// pop() - push() > shift - unshift
// reduce(prev, element, index, array)


// Object.create() => copy object with spec prototype
// Object.assign(target,source ) Get Object and you can add prop and values
// Object.entries() => Returns an array of key/values of the enumerable properties of an object




var a ={},
    b   = {key:'b'},
    c   = {key:'c'};
    a['b']= 123;
    a[c]=456;
console.log( a);