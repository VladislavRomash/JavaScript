//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.

const repeatStringCycle = (string, n, separator) => {
    let newString = ''
    for (let i = 0; i < n; i++) {
        newString += `${string}${separator}`
    }
    return newString.trim()
}

const repeatStringWithRepeat = (string, n, separator) => {
    return `${string}${separator}`.repeat(n).trim()
}

console.log(repeatStringCycle("yo", 4, "")) // yoyoyoyo
console.log(repeatStringWithRepeat("yo", 4, "")) // yoyoyoyo

//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.

const checkStartStartsWith = (string, substring) => {
    return string.toLowerCase().startsWith(substring)
}

const checkStartCycle = (string, substring) => {
    let str = ''
    for (let i = 0; i < substring.length; i++) {
        if (string[i].toLowerCase() === substring[i].toLowerCase()) {
            str += substring[i]
        }
    }
    return substring === str
}

const checkStartIndexOf = (string, substring) => {
    return string.toLowerCase().indexOf(substring) === 0
}

const checkStartSlice = (string, substring) => {
    return string.toLowerCase().slice(0, substring.length) === substring
}

console.log(checkStartStartsWith("Incubator", "inc")) // true
console.log(checkStartStartsWith("Incubator", "yo")) // false
console.log(checkStartCycle("Incubator", "inc")) // true
console.log(checkStartCycle("Incubator", "yo")) // false
console.log(checkStartIndexOf("Incubator", "inc")) // true
console.log(checkStartIndexOf("Incubator", "yo")) // false
console.log(checkStartSlice("Incubator", "inc")) // true
console.log(checkStartSlice("Incubator", "yo")) // false

//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.

const truncateStringSlice = (string, n) => {
    return `${string.slice(0, n)}...`
}

const truncateStringCycle = (string, n) => {
    let newStr = ''
    for (let i = 0; i < n; i++) {
        newStr += string[i]
    }
    return `${newStr}...`
}

console.log(truncateStringSlice("Всем студентам инкубатора желаю удачи!", 10)) // "Всем студе..."
console.log(truncateStringCycle("Всем студентам инкубатора желаю удачи!", 10)) // "Всем студе..."

//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка, то возвращает null.

const getMinLengthWordSort = (string) => {
    const arr = string.split(' ')
    return string !== '' ? [...arr].sort((a, b) => a.length - b.length)[0] : null
}

const getMinLengthWordReduce = (string) => {
    const arr = string.split(' ')
    return string !== '' ? arr.reduce((acc, el) => acc.length < el.length ? acc : el) : null
}

console.log(getMinLengthWordSort("Всем студентам инкубатора желаю удачи!")) // "Всем"
console.log(getMinLengthWordSort("")) // null
console.log(getMinLengthWordReduce("Всем студентам инкубатора желаю удачи!")) // "Всем"
console.log(getMinLengthWordReduce("")) // null

//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.

const setUpperCaseMap = (string) => {
    const arr = string.toLowerCase().split(' ')
    return arr.map(m => m[0].toLocaleUpperCase() + m.slice(1)).join(' ')
}

console.log(setUpperCaseMap("всем стУдентам инкуБатора Желаю удачИ!")) // "Всем Студентам Инкубатора Желаю Удачи!"

//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учётом
// повторяющихся символов.
//* попробовать учитывать повтор символов в подстроке

const isIncludesFn = (string, substring) => {
    let str = ''
    for (let i = 0; i < substring.length; i++) {
        if (string.toLowerCase().includes(substring.toLowerCase()[i])) {
            str += substring[i]
        }
    }
    return str === substring
}

console.log(isIncludesFn("Incubator", "Cut")) // true
console.log(isIncludesFn("Incubator", "table")) // false
console.log(isIncludesFn("Incubator", "inbba")) // true
console.log(isIncludesFn("Incubator", "inba")) // true
console.log(isIncludesFn("Incubator", "Incubatorrr")) // true