const students = [
    {
        id: 1,
        name: 'Ann',
        age: 20,
        isMarried: true,
        scores: 70,
    },
    {
        id: 2,
        name: 'Bob',
        age: 21,
        isMarried: true,
        scores: 80,
    },
    {
        id: 3,
        name: 'Helga',
        age: 22,
        isMarried: false,
        scores: 90,
    },
    {
        id: 4,
        name: 'Max',
        age: 23,
        isMarried: false,
        scores: 100,
    },
]

const mapFn = (arr, fn) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        // newArr[i] = fn(arr[i])
        newArr.push(fn(arr[i]))
    }
    return newArr
}

console.log(mapFn(students, (el) => el.name)) // ['Ann', 'Bob', 'Helga', 'Max']
console.log(students.map(el => el.name)) // ['Ann', 'Bob', 'Helga', 'Max']
console.log(mapFn(students, (el) => el.age)) // [20, 21, 22, 23]
console.log(students.map(el => el.age)) // [20, 21, 22, 23]

const filterFn = (arr, fn) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i])) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(filterFn(students, (el) => el.age >= 22)) // [{id:3, ...}, {id:4, ...}]
console.log(students.filter(el => el.age >= 22)) // [{id:3, ...}, {id:4, ...}]
console.log(filterFn(students, (el) => el.isMarried)) // [{id:1, ...}, {id:2, ...}]
console.log(students.filter(el => el.isMarried)) // [{id:1, ...}, {id:2, ...}]

const findFn = (arr, fn) => {
    let value
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i])) {
            return arr[i]
        }
    }
}

console.log(findFn(students, (el) => el.name === 'Bob')) // {id: 2, name: 'Bob', age: 21, isMarried: true, scores: 80}
console.log(students.find(el => el.name === 'Bob')) // {id: 2, name: 'Bob', age: 21, isMarried: true, scores: 80}
console.log(findFn(students, (el) => el.scores > 80)) // {id: 3, name: 'Helga', age: 22, isMarried: false, scores: 90}
console.log(students.find(el => el.scores > 80)) // {id: 3, name: 'Helga', age: 22, isMarried: false, scores: 90}


const arrayOfName = ['Ann', 'Bob', 'Helga', 'Max']

const joinFn = (arr, separator) => {
    let string = ''
    for (let i = 0; i < arr.length; i++) {
        string += arr[i] + separator
    }
    return string.slice(0, -1)
}

console.log(joinFn(arrayOfName, ' ')) // 'Ann Bob Helga Max'
console.log(arrayOfName.join(' ')) // 'Ann Bob Helga Max'
console.log(joinFn(arrayOfName, '-')) // 'Ann-Bob-Helga-Max'
console.log(arrayOfName.join('-')) // 'Ann-Bob-Helga-Max'


const includesFn = (arr, searchValue) => {
    let test = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === searchValue) {
            test.push(arr[i])
        }
    }
    return test.length !== 0
}

console.log(includesFn(arrayOfName, 'Bob')) // true
console.log(arrayOfName.includes('Bob')) // true
console.log(includesFn(arrayOfName, 'Nick')) // false
console.log(arrayOfName.includes('Nick')) // false


const popFn = (arr) => {
    const deletedValue = arr[arr.length - 1]
    delete arr[arr.length - 1]
    arr.length = arr.length - 1
    return deletedValue
}

console.log(popFn(arrayOfName)) // 'Max'
console.log(arrayOfName) // ['Ann', 'Bob', 'Helga']

console.log(arrayOfName.pop()) // 'Helga'
console.log(arrayOfName) // ['Ann', 'Bob']
