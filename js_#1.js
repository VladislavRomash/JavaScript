const students = [
    {name: 'Nick', age: 25, address: {county: 'Lithuania', street: 'Austėjos street'}},
    {name: 'Mike', age: 24, address: {county: 'Lithuania', street: 'Barsukynės street'}},
    {name: 'Ann', age: 23, address: {county: 'Lithuania', street: 'Geležinio Vilko street'}},
    {name: 'Helga', age: 22, address: {county: 'Lithuania', street: 'Daškūnų street'}},
]

const copyStudents = students

console.log(students === copyStudents) // true

const lightCopy = [...students]
const lightCopy2 = Object.assign([], students)
const lightCopy3 = students.slice(0)
const lightCopy4 = students.map(m => ({...m}))

console.log(lightCopy === students) // false
console.log(lightCopy2 === students) // false
console.log(lightCopy3 === students) // false
console.log(lightCopy4 === students) // false
console.log(students === students) // true

const deepCopy = JSON.parse(JSON.stringify(students))
deepCopy[1].name = 'Sergey'
deepCopy[1].address.street = 'Žarijų street'

console.log(deepCopy[1].name === students[1].name) // false
console.log(deepCopy[1].address.street === students[1].address.street) // false

const deepCopy2 = students.map(m => ({...m, address: {...m.address}}))
deepCopy2[1].address.county = 'Latvia'
deepCopy2[1].address.street = 'Bebrenes iela'

console.log(deepCopy2[1].address === students[1].address) // false
console.log(deepCopy2[0].address === students[0].address) // false
console.log(deepCopy2[1].address.street === students[1].address.street) // false

const copyAndChange = students.map(m => m.name === 'Helga' ? {
    ...m,
    address: {...m.address, street: 'šv. Ignoto street'}
} : m)


console.log(copyAndChange[3].address.street === students[3].address.street) // false
