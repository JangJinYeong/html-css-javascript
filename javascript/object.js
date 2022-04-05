// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Obeject
// object = { key : value }

// 1. Literals and properties
const obj1 = {} // 'object literal' syntax
const obj2 = new Object() // 'object constructor' syntax

function print(person) {
  console.log(person.name)
  console.log(person.age)
}

const jinyeong = { name: 'Jinyeong', age: 4 }
print(jinyeong)

jinyeong.hasJob = true
console.log(jinyeong.hasJob)

// with JavaScript magic (dynamically typed languege)
// can add properties later
delete jinyeong.hasJob
console.log(jinyeong.hasJob)

// 2. Computed properties
// key should be always string
console.log(jinyeong.name)
console.log(jinyeong['name'])
jinyeong['hasJob'] = true
console.log(jinyeong.hasJob)

function printValue(obj, key) {
  console.log(obj[key])
}

printValue(jinyeong, 'name')
printValue(jinyeong, 'age')

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 }
const person2 = { name: 'steve', age: 3 }
const person3 = { name: 'dave', age: 4 }
const person4 = new Person('Jinyeong', 31)
console.log(person4)

// 4. Constructor Function
function Person(name, age) {
  // this = {};
  this.name = name
  this.age = age
  // return this
}

// 5. in operator: property existence check (key in obj)
console.log('name' in jinyeong)
console.log('age' in jinyeong)
console.log('random' in jinyeong)
console.log(jinyeong.random)

// 6. for..in vs for..of
// for (key in obj)
for (key in jinyeong) {
  console.log(key)
}

// for (value of iterable)
const array = [1, 2, 4, 5]
for (value of array) {
  console.log(value)
}

// 7. Cloneing
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'Jinyeong', age: '31' }
const user2 = user
user.name = 'coder'
console.log(user)

// old way
const user3 = {}
for (key in user) {
  user3[key] = user[key]
}
console.log(user3)

const user4 = Object.assign({}, user)
console.log(user4)

// another example
const fruit1 = { color: 'red' }
const fruit2 = { color: 'blue', size: 'big' }
const mixed = Object.assign({}, fruit1, fruit2)
console.log(mixed)
