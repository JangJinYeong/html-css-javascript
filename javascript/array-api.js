// Q1. makea stirng out of an array
{
  const fruits = ['apple', 'banana', 'orange']
  const result = fruits.join()
  console.log(`join: ${result}`)
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒'
  const result = fruits.split(', ')
  console.log(`split: ${result}`)
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5]
  const result = array.reverse()
  console.log(`reverse: ${result}`)
  console.log(`array: ${array}`)
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5]
  const result = array.slice(2, 5)
  console.log(`slice: ${result}`)
  console.log(`array: ${array}`)
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name
    this.age = age
    this.enrolled = enrolled
    this.score = score
  }
}

const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
]

// Q5. find a student with the score 90
{
  const result = students.find((student) => student.score === 90)
  console.log(result)
}

// Q6. make an array of enrolled students
{
  const result = students.filter((students) => students.enrolled === true)
  console.log(result)
}

// Q7. make an array contianing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((student) => student.score)
  console.log(result)
}

// Q8. check if there is a student with the score lower than 50
{
  // 배열 중에 어떤 것이라도 하나 만족되는게 있는지 검사
  const result = students.some((student) => student.score < 50)
  console.log(`some: ${result}`)

  // 모든 배열의 조건이 만족되어야 할 경우
  const result2 = !students.every((student) => student.score >= 50)
  console.log(`every: ${result2}`)
}

// Q9. compute students' average score
{
  const result = students.reduce((prev, curr) => prev + curr.score, 0)
  console.log(`reduce: ${result / students.length}`)
}

// Q10. make a string conntaining all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students.map((student) => student.score).join()
  console.log(result)
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
    .map((student) => student.score)
    // .sort((a, b) => a - b)
    .sort()
    .join()
  console.log(result)
}
