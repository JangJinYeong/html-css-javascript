// 'use strict'
// Object-oriendted programming
// class: template
// object: instance of a class
// JavaScript classes
//  - introduced in ES6
//  - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
  // constructor
  constructor(name, age) {
    // fields
    this.name = name
    this.age = age
  }

  // methods
  speak() {
    console.log(`${this.name}: hello!`)
  }
}

const jinyeong = new Person('Jinyeong', 31)
console.log(jinyeong.name)
console.log(jinyeong.age)
jinyeong.speak()

// 2. Getter and setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }

  get age() {
    return this._age
  }

  set age(value) {
    // if (value < 0) {
    //   throw Error('age can not be negative')
    // }
    this._age = value < 0 ? 0 : value
  }
}

const user1 = new User('Steve', 'Job', -1)
console.log(user1.age)

// 3. Fields (public, private)
// Too soon!
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes/Private_class_fields
class Experiment {
  publicField = 2
  #privateField = 0
}
const experiment = new Experiment()
console.log(experiment.publicField)
console.log(experiment.privateField)

// 4. Static properites and methods
// Too Soon!
class Article {
  static publsher = 'Dream Coding'
  constructor(articleNumber) {
    this.articleNumber = articleNumber
  }

  static printPublisher() {
    console.log(Article.publsher)
  }
}

const article1 = new Article(2)
const article2 = new Article(1)
console.log(article1.publsher)
console.log(Article.publsher)
Article.printPublisher()

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
  constructor(width, height, color) {
    this.width = width
    this.height = height
    this.color = color
  }

  draw() {
    console.log(`drawing ${this.color} color!`)
  }

  getArea() {
    return this.width * this.height
  }
}

class Rectiangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw()
    console.log('🔺️')
  }
  getArea() {
    return (this.width * this.height) / 2
  }
  toString() {
    return `Triangle: color: ${this.color}`
  }
}

const rectangle = new Rectiangle(20, 20, 'blue')
rectangle.draw()
console.log(rectangle.getArea())
const triangle = new Triangle(20, 20, 'red')
triangle.draw()
console.log(triangle.getArea())

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectiangle)
console.log(triangle instanceof Rectiangle)
console.log(triangle instanceof Triangle)
console.log(triangle instanceof Shape)
console.log(triangle instanceof Object)
console.log(triangle.toString())
