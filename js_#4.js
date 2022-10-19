const objID = 4
const objID2 = 6

const objStrID = '4'
const objStrID2 = '6'

const getNewKey = (value) => {
    return value * 2
}

const obj = {
    1: [1, 2, 3],
    2: [4, 5, 6],
    3: [7, 8, 9],
    [objID]: [1, 4, 7],
    objID: [2, 5, 8],
    [getNewKey(33)]: [3, 6, 9],
    [objID + objID2]: [1, 5, 9],
    [objStrID + objStrID2]: [1, 5, 9],
}

console.log(obj[2]) // [4, 5, 6]
console.log(obj['2']) // [4, 5, 6]
console.log(obj[1 + 1]) // [4, 5, 6]
console.log(obj[objID]) // [1, 4, 7]
console.log(obj.objID) // [2, 5, 8]
console.log(Object.keys(obj)) // (8) ['1', '2', '3', '4', '10', '46', '66', 'objID']


const todolistID1 = '1'
const todolistID2 = '2'

const todolists = [
    {id: todolistID1, title: 'What to learn', filter: 'all'},
    {id: todolistID2, title: 'What to buy', filter: 'all'},
]

const tasks = {
    [todolistID1]: [
        {id: '11', title: 'HTML', isDone: true},
        {id: '12', title: 'CSS', isDone: true},
        {id: '13', title: 'JS/TS', isDone: true},
    ],
    [todolistID2]: [
        {id: '21', title: 'Beer', isDone: true},
        {id: '22', title: 'Fish', isDone: true},
        {id: '23', title: 'Cheese', isDone: true},
    ],
}

console.log(Object.keys(tasks[todolistID1])) // ['0', '1', '2']
console.log(tasks[todolistID1][2].title) // 'JS/TS'
console.log(tasks[todolistID1][2]['title']) // 'JS/TS'
console.log(tasks[todolists[0]['id']][2]['title']) // 'JS/TS'

// Create => [...], concat
// Read => map, filter, sort
// Update => map
// Delete => filter

console.log([...tasks[todolistID1], {id: '14', title: 'REDUX', isDone: true}]) // Create // (4) [{…}, {…}, {…}, {id: '14', title: 'REDUX', isDone: true}]
console.log(tasks[todolistID2].concat({id: '24', title: 'Milk', isDone: true})) // Create // (4) [{…}, {…}, {…}, {id: '24', title: 'Milk', isDone: true}]

console.log(tasks[todolistID2].map(m => m)) // Read // (3) [{…}, {…}, {…}]
console.log(tasks[todolistID2].filter(f => f.id === '21')) // Read // [{id: '21', title: 'Beer', isDone: true}]
console.log(tasks[todolistID2].map(m => m.title).sort()) // Read // ['Beer', 'Cheese', 'Fish']

console.log(tasks[todolistID2].map(m => m.id === '22' ? {...m, title: 'Meat'} : m)) // Update // (3) [{…}, {id: '22', title: 'Meat', isDone: true}, {…}]

console.log(tasks[todolistID1].filter(f => f.id !== '12')) // Delete // (2) [{…}, {…}]


// reduce

const numbers = [1, 2, 3, 4, 5]

console.log(numbers.reduce((acc, el) => acc + el, 0)) // 15
// acc = 0, el = 1 => 1
// acc = 1, el = 2 => 3
// acc = 3, el = 3 => 6
// acc = 6, el = 4 => 10
// acc = 10, el = 5 => 15
// => 15

console.log(numbers.reduce((acc, el) => acc > el ? acc : el)) // => 5


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

// Read
console.log(students.reduce((acc, el) => acc.scores > el.scores ? acc : el).scores) // 100
console.log(Math.max(...students.map(m => m.scores))) // 100

// Update
console.log(
    students.reduce((acc, el) => {
        const updatedStudent = {...el, scores: el.scores + 10}
        acc.push(updatedStudent)
        return acc
    }, [])
) // [{…, scores: 80}, {…, scores: 90}, {…, scores: 100}, {…, scores: 110}]
console.log(students.map(m => ({...m, scores: m.scores + 10}))) // [{…, scores: 80}, {…, scores: 90}, {…, scores: 100}, {…, scores: 110}]

// Delete
console.log(
    students.reduce((acc, el) => {
        if (el.scores >= 90) {
            acc.push(el)
        }
        return acc
    }, [])
) // [{…, scores: 90}, {…, scores: 100}]
console.log(students.filter(f => f.scores >= 90)) // [{…, scores: 90}, {…, scores: 100}]

// newAssociativeArray
console.log(
    students.reduce((acc, el) => {
        acc[el.name] = {...el}
        delete acc[el.name].id
        delete acc[el.name].name
        return acc
    }, {})
) // {Ann: {…}, Bob: {…}, Helga: {…}, Max: {…}}