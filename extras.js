// callbacks

// setTimeout(() => {
//   console.log('test 2 seconds')
// }, 2000);

// const geocode = (add, callback) => {
//   setTimeout(() => {
//     const data = {
//       lat: 0,
//       long: 0
//     }
//     callback(data)
//   }, 2000);
// }

// geocode('melbourne', (data) => {
//   console.log(data)
// })

const add = (num1, num2, callback) => {
  callback( num1 + num2 )
}

add(1,4, (sum) => {
  console.log(sum)
})

// es6 object properties shorthand syntax

const name = 'Alex';
const userAge = '11';

const user = {
  name,
  age: userAge
}

console.log(user)

// object destructuring

const product = {
  label: 'milk',
  cost: 1,
  stock: 1000,
  price: 2.5
}

// const label = product.label;
// const stock = product.stock;

const { label:productLabel, stock, rating = 5 } = product;

// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transaction = (type, { label, stock }) => {
  console.log(type, label, stock)
}


transaction('order', product)