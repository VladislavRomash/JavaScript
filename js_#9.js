// Closures

globalLE --> { name: 'Alex', foo: Function } --> null

const name = 'Alex'

const foo = () => {
    // [[Environment]] --> globalLE
    // fooLE --> { bar: Function, greeting: 'Hello' } --> [[Environment]]

    const greeting = 'Hello'

    function bar(age) {
        // [[Environment]] --> fooLE
        // barLE --> { age: 20 } --> [[Environment]]

        console.log(`${greeting} ${name} ${age}`)
    }

    bar(20)
}

foo() // 'Hello Alex 20'


globalLE --> { counter: Function, counter_2: Function } --> null

const counterCreator = () => {
    // [[Environment]] --> globalLE
    // [[Environment]] --> globalLE
    // counterCreatorLE_1 --> { count: 0 } --> [[Environment]]
    // counterCreatorLE_2 --> { count: 0 } --> [[Environment]]

    let count = 0

    return () => {
        // [[Environment]] --> counterCreatorLE_1
        // [[Environment]] --> counterCreatorLE_2
        // { } --> [[Environment]]
        // { } --> [[Environment]]

        console.log(++count)
    }
}

const counter = counterCreator()

const counter2 = counterCreator()

counter() // 1
counter() // 2

counter_2() // 1
counter_2() // 2


// Recursion

const a = () => {
    b()
}
const b = () => {
    c()
}
const c = () => {
}

a()


const pow = (constantValue, power) => {
    if (power === 1) {
        return constantValue
    } else {
        return constantValue * pow(constantValue, power - 1)
    }
}

pow(2, 3) // 8
pow(2, 2) // 4
pow(2, 1) // 2

const factorial = (num) => {
    if (num === 0) return num
    if (num === 1) return num
    else return num * factorial(num - 1)
}

factorial(3) // 6
factorial(4) // 24
factorial(5) // 120

function squaresNeeded(grains) {
    if (grains === 0) return grains
    else return 1 + squaresNeeded(Math.floor(grains / 2))
}

squaresNeeded(0) // 0
squaresNeeded(1) // 1
squaresNeeded(2) // 2
squaresNeeded(3) // 2
squaresNeeded(4) // 3
squaresNeeded(31) // 5