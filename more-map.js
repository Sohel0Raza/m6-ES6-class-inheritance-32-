const numbers = [12, 56, 87, 44]
const half = numbers.map(n => n/2);
const third = numbers.map(n => n/3);
// console.log('half :', half);
// console.log('third :', third);

const friends = ['Tom', 'Jerry', 'Gopal', 'Motu', 'Shiba']
const firstLetters = friends.map(friend => friend[0])
// console.log('firstLetters :', firstLetters);
const nameLength = friends.map(friend => friend.length)
// console.log('nameLength :', nameLength);

const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 2, name: 'mobile', price: 15000},
    {id: 3, name: 'watch', price: 5000},
    {id: 4, name: 'tablet', price: 145000}
]
const items = products.map(product => product.name)
console.log('items :', items);