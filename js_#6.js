const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 90,
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120,
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100,
    },
    {
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110,
    },
    {
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105,
    },
];

const user = {
    name: "Bob",
    age: 23,
    isMarried: false,
    friends: ["Alex", "Nick", "John"],
};


//1. Поверхностная копия user
const copyUser = {...user}
console.log(user === copyUser) // false
console.log(user.friends === copyUser.friends) // true

//2. Полная (глубокая) копия user
const deepCopyUser = {...user, friends: [...user.friends]}
console.log(user === deepCopyUser) // false
console.log(user.friends === deepCopyUser.friends) // false

//3. Поверхностная копия students
const copyStudents = [...students]
const copyStudents2 = students.slice(0)

console.log(students === copyStudents) // false
console.log(students === copyStudents2) // false
console.log(students[0] === copyStudents[0]) // true

//4*. Полная (глубокая) копия students
const deepCopyStudents = students.map(m => ({...m}))
const deepCopyStudents2 = JSON.parse(JSON.stringify(students))
console.log(students === deepCopyStudents) // false
console.log(students[0] === deepCopyStudents[0]) // false
console.log(students[0] === deepCopyStudents2[0]) // false

//Далее все преобразования выполняем не модифицируя исходный массив students

//5. Отсортируйте студентов по успеваемости (лучший идёт первым)
const sortByScores = students.map(m => ({...m})).sort((a, b) => b.scores - a.scores)
console.log(sortByScores)
console.log(students)

//5a. Отсортируйте студентов по алфавиту
const sortByName = students.map(m => ({...m})).sort((a, b) => a.name.localeCompare(b.name))
console.log(sortByName)
console.log(students)

//6. Сформируйте массив студентов, у которых 100 и более баллов
const bestStudents = students.filter(f => f.scores >= 100)
const bestStudent2 = students.reduce((acc, el) => {
    if (el.scores >= 100) {
        acc.push(el)
    }
    return acc
}, [])
console.log(bestStudents)
console.log(bestStudent2)

//6a.Сформируйте массив из трёх лучших студентов
const topStudents = sortByScores.slice(0, 3)
console.log(topStudents)

//6b. Объедините массивы deepCopyStudents и topStudents так,
// чтоб сохранился порядок сортировки
const newDeepCopyStudents = deepCopyStudents.concat(topStudents)
const newDeepCopyStudents2 = [...deepCopyStudents, ...topStudents]
console.log(newDeepCopyStudents)
console.log(newDeepCopyStudents2)

//7. Сформируйте массив холостых студентов
const notMarriedStudents = students.filter(f => !f.isMarried)
const notMarriedStudents2 = students.reduce((acc, el) => {
    if (!el.isMarried)
        acc.push(el)
    return acc
}, [])
console.log(notMarriedStudents)
console.log(notMarriedStudents2)

//8. Сформируйте массив имён студентов
const studentsNames = students.map(m => m.name)
const studentsNames2 = students.reduce((acc, el) => {
    acc.push(el.name)
    return acc
}, [])
console.log(studentsNames)
console.log(studentsNames2)

//8a. Сформируйте строку из имён студентов, разделённых
// - пробелом
// - запятой
const nameWithSpace = students.map(m => m.name).join(' ')
console.log(nameWithSpace);
const namesWithComma = students.map(m => m.name).toString()
console.log(namesWithComma);

//9. Добавьте всем студентам свойство "isStudent" со значением true
const trueStudents = students.map(m => ({...m, isStudent: true}))
const trueStudents2 = students.reduce((acc, el) => {
    const updateStudents = {...el, isStudent: true}
    acc.push(updateStudents)
    return acc
}, [])
console.log(trueStudents)
console.log(trueStudents2)

//10. Nick женился. Выполните преобразование массива students
const studentsWithMarriedNick = students.map(m => m.name === 'Nick' ? {...m, isMarried: true} : m)
console.log(studentsWithMarriedNick)


//11. Найдите Студентку по имени Ann
const ann = students.find(f => f.name === 'Ann')
console.log(ann)
console.log(students)

//12. Найдите студента с самым высоким баллом
const bestStudentOne = students.map(m => ({...m})).sort((a, b) => b.scores - a.scores)[0]
const bestStudentTwo = students.reduce((acc, el) => acc.scores > el.scores ? acc : el)
console.log(bestStudentOne)
console.log(bestStudentTwo)

//12a. Найдите 2 студента с самым высоким баллом
let bestStudent_1 = students.map(m => ({...m})).sort((a, b) => b.scores - a.scores)[0]
let bestStudent_2 = students.map(m => ({...m})).sort((a, b) => b.scores - a.scores)[1]
console.log([bestStudent_1, bestStudent_2])
console.log(students.map(m => m.scores))

//13. Найдите сумму баллов всех студентов
const scoresSum = students.reduce((acc, el) => acc + el.scores, 0)
console.log(scoresSum)

// 14.Напишите функцию addFriends, которая принимает параметром массив students и возвращает новый массив, при этом добавляет в каждому студенту свойство .friends, значением которого является массив имён всех остальных студентов из массива, за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.

function addFriends(students) {
    return students.map(m => (
        {...m, friends: students.map(m => m.name).filter(f => f !== m.name)}
    ))
}

console.log(addFriends(students))


console.log(user)
console.log(students)
