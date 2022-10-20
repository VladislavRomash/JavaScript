const names = ['Donald', 'Alex', 'Bob', 'ann', '100', 'Юрий', 'игорь']

console.log(names.sort()) // ['100', 'Alex', 'Bob', 'Donald', 'ann', 'Юрий', 'игорь']

console.log(names.sort() === names) // true
console.log([...names].sort() === names) // false

const numbers = [100, 1000, 9, 88]

console.log(numbers.sort()) // [100, 1000, 88, 9]

const compareFn = (a, b) => a < b ? -1 : 1 // (a, b) => a - b
const compareFn2 = (a, b) => a > b ? -1 : 1 // (a, b) => b - a

console.log(numbers.sort(compareFn)) // [9, 88, 100, 1000]
console.log(numbers.sort((a, b) => a - b)) // [9, 88, 100, 1000]

console.log(numbers.sort(compareFn2)) // [1000, 100, 88, 9]
console.log(numbers.sort((a, b) => b - a)) // [1000, 100, 88, 9]
console.log(numbers.sort((a, b) => a - b).reverse()) // [1000, 100, 88, 9]

const students = [
    {
        name: 'Ann',
        age: 20,
        isMarried: true,
        scores: 68,
    },
    {
        name: 'Bob',
        age: 21,
        isMarried: true,
        scores: 95,
    },
    {
        name: 'Helga',
        age: 22,
        isMarried: false,
        scores: 73,
    },
    {
        name: 'Max',
        age: 23,
        isMarried: false,
        scores: 88,
    },
    {
        name: 'alex',
        age: 17,
        isMarried: false,
        scores: 75,
    },
]

const ageSort = students.sort((a, b) => a.scores - b.scores)
console.log(ageSort)

const nameSort = students.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1)
console.log(nameSort)

console.log('Alex'.localeCompare('Bob')) // -1
console.log('John'.localeCompare('Ann')) // 1

const nameSort_2 = students.sort((a, b) => a.name.localeCompare(b.name))
console.log(nameSort_2)


// bubble sort (basic)
const numBasic = [12, 45, 91, 23, 34, 9, 77, 1]

for (let j = 0; j < numBasic.length; j++) {
    for (let i = 0; i < numBasic.length - 1; i++) {
        if (numBasic[i] > numBasic[i + 1]) {
            let temporary = numBasic[i]
            numBasic[i] = numBasic[i + 1]
            numBasic[i + 1] = temporary
        }
    }
}
console.log(numBasic)

// bubble sort (modified)
const numModified = [12, 45, 91, 23, 34, 9, 77, 1]

for (let j = 0; j < numModified.length - 1; j++) {
    let isSorted = true
    for (let i = 0; i < numModified.length - 1 - j; i++) {
        if (numModified[i] > numModified[i + 1]) {
            isSorted = false;
            [numModified[i], numModified[i + 1]] = [numModified[i + 1], numModified[i]]
        }
    }
    if (isSorted) break
}
console.log(numModified)