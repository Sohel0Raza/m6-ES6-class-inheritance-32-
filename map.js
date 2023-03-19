const numbers = [6, 8, 9, 5, 7, 4];
function getDoubles(numbers) {
    const output = [];
    for (const number of numbers) {
        const doubled = doubledItNew(number);
        output.push(doubled);
    }
    return output;
}

function doubledIt(num){
    return num * 2;
}

const doubledItNew = num => num * 2;

const makeDoubled = numbers.map(doubledIt);
const makeDoubledDirect = numbers.map(num => num * 2);
const makeDoubledDirect2 = numbers.map(x => x * 2);

const fiveTimes = [1, 6, 3, 8, 2].map(x => x * 5);
console.log('fiveTimes :', fiveTimes);

console.log('makeDoubled :', makeDoubled);

const result = getDoubles(numbers);
// console.log('result :', result);
