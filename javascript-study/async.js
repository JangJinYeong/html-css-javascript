// async & await
// clear sytle of using promise

// 1. async
async function fetchUser() {
  // do network request in 10 secs....
  return 'Jinyeong'
}

const user = fetchUser()
user.then(console.log)

// 2. await
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function getApple() {
  await delay(1000)
  return '🍎'
}

async function getBanana() {
  await delay(1000)
  return '🍌'
}

// function pickFruit() {
//   return getApple().then((apple) => {
//     return getBanana().then((banana) => `${apple} + ${banana}`)
//   })
// }
async function pickFruit() {
  const applePromise = getApple()
  const bananaPromise = getBanana()
  const apple = await applePromise
  const banana = await bananaPromise
  return `${apple} + ${banana}`
}

pickFruit().then(console.log)

//  3. useful Promise APIs
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(' + ')
  )
}
pickAllFruits().then(console.log)

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()])
}
pickOnlyOne().then(console.log)
