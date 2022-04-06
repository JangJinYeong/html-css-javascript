'use strict'

// JavaStript is synchronous. (동기적)
// Execute the code block by orger after hoisting.
// hoisting된 이후부터 code가 작성한 순서에 맞춰서 하나하나씩 동기적으로 실행
// hoisting: var, function declaration
console.log('1')
setTimeout(() => console.log('2'), 1000)
console.log('3')

// Synchronous callback
function printImmediately(print) {
  print()
}
printImmediately(() => console.log('hello'))

// Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout)
}
printWithDelay(() => console.log('async callback'), 2000)

// Callback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === 'jinyeong' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ) {
        onSuccess(id)
      } else {
        onError(new Error('not found'))
      }
    }, 2000)
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'jinyeong') {
        onSuccess({ name: 'Jinyeong', role: 'admin' })
      } else {
        onError(new Error('no access'))
      }
    }, 1000)
  }
}

const userStorage = new UserStorage()
const id = prompt('enter your id')
const password = prompt('enter your password')
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(user, (userWithRole) => {
      alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`)
    })
  },
  (error) => {
    console.log(error)
  }
)
