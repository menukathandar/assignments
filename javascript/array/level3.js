//given the array, calculate sum of odd numbers using reduce method
const arr = [4, 2, 3, 5]

const sumOfOddNumbers = arr.reduce((accumulator, currentValue) => {
    if (currentValue % 2 !== 0) {
        return accumulator + currentValue
    } else {
        return accumulator
    }
}, 0)
console.log(sumOfOddNumbers)
