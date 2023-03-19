const numbers = [87, 67, 83, 47, 26, 378, 35, 28, 53, 28, 287];
const bigNums = numbers.filter(Number => Number < 50);
const even = numbers.filter(number => number % 2 === 0);
// console.log('even :', even);
// console.log('bigNums :', bigNums);
const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 2, name: 'mobile', price: 15000},
    {id: 3, name: 'watch', price: 5000},
    {id: 4, name: 'tablet', price: 145000}
]
const expensive = products.filter(product => product.price > 20000000)
console.log('expensive :', expensive);