// function a() {
//  return function (x) {
//   return function (y) {
//     return function (z) {
//       return x + y + z
//     }
//   }
//  }
// }

const { error } = require("console");

// let ai = a()
// console.log(ai(1)(2))

// var name = 'Amras'

// function sayMyName(){
//   console.log(`My name is ${this.name}`)
// }

// sayMyName()

// Array.prototype.myLength = function() {
//   return this.length
// }

// let arr = [1,2,3,4,5,5,5]\\

// function sayHi() {
//   console.log(name);
//   console.log(age);
//   var name = 'Lydia';
//   console.log(name);
//   let age = 21;
// }

// sayHi();
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 2000);
// }

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }

// console.log(typeof sayMyName.prototype)

// const shape = {
//   radius: 10,
//   diameter() {
//     return this.radius * 2;
//   },
//   perimeter: () => 2 * Math.PI * shape.radius,
// };

// console.log(shape.diameter());
// console.log(shape.perimeter());

// function bark() {
//   console.log('Woof!');
// }

// bark.animal = 'dog';

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// const lydia = new Person('Lydia', 'Hallie');
// const sarah = Person('Sarah', 'Smith');

// console.log(lydia);
// const foo = () => console.log('First');
// const bar = () => setTimeout(() => console.log('Second'));
// const baz = () => console.log('Third');

// bar();
// foo();
// baz();

// console.log(Number(2) === Number(2));
// console.log(Boolean(false) === Boolean(false));
// console.log(Symbol('foo') === Symbol('foo'));
// async function getData() {
//     return Promise.resolve('I made it!');
//   }

//   async function main() {
//     const result = await getData();
//     console.log(result);
//   }
//   main()
//   console.log(result);
// const one = false || {} || null;
// const two = '' || null || false ;
// const three = [] || 0 || true;

// console.log(one, two, three);
// console.log("Hello\bWorld");
// Output: HellWorld

// let name = {
//     fName: 'Amras',
//     lName: 'Hameed'
// }

// function fullName(place, state) {
//     console.log(this.fName + " " + this.lName + ", " + place + " ," + state)
// }

// Function.prototype.myBind = function(...args) {
//     let obj = this
//     let params = args.slice(1)
//     return function(...args2) {
//         obj.apply(args[0],[...params, ...args2])
//     }
// }

// let callFn2 = fullName.myBind(name,'Kannur')
// callFn2('Kerala')

// let callFn = fullName.bind(name,'Kannur')
// callFn('Kerala')

// function* myFn() {
//     yield 'Amras'
//     yield 'Hameed'
// }
// let val = myFn()
// console.log(val.next().value)
// console.log(val.next().value)

// const promise1 = Promise.resolve('First');
// const promise2 = Promise.reject('Second');
// Promise.all([promise1, promise2]).then(results => console.log(results)).catch(error => console.log(error));

// const user = [[],[[[],[3],[4]],[[5],[6]]]]

// console.log(user[0]?.[0]?.[0]?.[0])

// for (let i = 1; i <= 3; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, i * 1000);
// }

// function sum(...numbers) {
//     console.log(numbers[2])
//     return numbers.reduce((acc, num) => acc + num, 0);
// }

// console.log(sum(1, 2, 3, 4, 5, 5));

// function* x() {
//     yield "Hello"
//     yield "World"
// }
// let gen = x()
// let val = gen.next().value
// let val1 = gen.next().value
// console.log(val,val1)

// Creating a Map
// let myMap = new Map();
// myMap.set('name', 'John');
// myMap.set(1, 'One');
// let objKey = { id: 1 };
// myMap.set(objKey, 'Object Key');
// let map1 = new Map(myMap)
// console.log(map1)

// let num = 123.456789;
// console.log(typeof num.toFixed(0));

// function factorial(n) {
//     if(n == 0 || n == 1) {
//         return n
//     }
//     return n * factorial(n - 1)
// }

// console.log(factorial(5))

// function fin(n) {
//     if(n == 0) {
//         return n
//     }
//     fin(n - 1)
//     console.log(n)
// }

// fin(10)

// function reverse (str, i) {
//     if(str.length == i) {
//         return ""
//     }
//     return reverse(str, i + 1) + str[i]
// }

// console.log(reverse('amras', 0))

// let obj = {}
// function sum(a,b) {
//     if(obj[a + b]) {
//         console.log(`Fetching result from cache `);
//         return obj[a + b]
//     }
//     console.log(`Calculating`);
//     obj[a + b] = a + b
//     return obj[a + b]
// }

// console.log(sum(1,2))

// let arr = [1,2,3]
// let arr2 = [...arr]

// arr2.push(4)
// console.log(arr)

// const find = () => {
//     let num = Math.round(Math.random() * 10000000).toString(16)
//     return '#' + num
// }

// console.log(find())

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// Person.prototype.display = function () {
//   console.log(this.name, this.age);
// };
// function Employee(name, age, salary) {
//   Person.call(this, name, age);
//   this.salary = salary;
// }
// Object.setPrototypeOf(Employee.prototype,Person.prototype)
// const emp = new Employee("Mike", 20, 4000);
// console.log(Employee.prototype.constructor)
// emp.display()

// let count = 10;
// let timer = setInterval(() => {
//   console.log(count);
//   count--
//   if(count === 0)clearInterval(timer)
// },1000);

// let obj1 = { name: "Amras", place: "Chalad" };
// const obj2 = { name: "Rezin", place: "Varam" };
// const obj3 = { name: "Rashi", place: "Areela" };

// const weak = new WeakMap([
//   [obj1, "obj1"],
//   [obj2, "obj2"],
//   [obj3, "obj3"],
// ]);

// function logWeakMap(weakMap, keys) {
//   keys.forEach((key) => {
//     console.log(key, weakMap.get(key));
//   });
// }
// logWeakMap(weak, [obj1, obj2, obj3]);

// console.log(weak.has(obj1));

// let arr = [
//   [12, 14],
//   [16, 18],
//   [20, 22],
// ];

// let newArr = arr.flatMap((x) => x.map(x=>x*2));
// console.log(newArr);


// const target = { name: "Amras", place: "Chalad" };

// const handler = {
//     get(target, prop, reciever) {
        
//         return target[prop].split('').map((val,i) => target[prop].charCodeAt(i))
//     }
// }


// const proxy = new Proxy(target, handler)


// const obj1 = {
//     name: 'Amras',
//     getName(){
//         return `Hi ${this.name}`
//     } 
// }

// const obj2 = {
//     name:'Rashid'
// }

// obj2.__proto__ = obj1

// // Object.setPrototypeOf(obj2,obj1)
// console.log(obj2.getName())



