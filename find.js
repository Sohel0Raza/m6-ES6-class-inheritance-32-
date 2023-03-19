const numbers = [87, 67, 40, 83, 47, 26, 378, 35, 28, 53, 28, 287];
const fives = numbers.find(num => num % 5 === 0);
const fivesAll = numbers.filter(num => num % 5 === 0);
console.log('fivesAll :', fivesAll);
console.log('fives :', fives);
const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 2, name: 'mobile', price: 15000},
    {id: 3, name: 'watch', price: 5000},
    {id: 4, name: 'tablet', price: 145000}
]
const cheap = products.find(p => p.price < 20000);
console.log('cheap :', cheap);
