// Tests

test('sum', () => {
    expect(sum(3, 5, 7, 6, 4, 9)).toBe(34)
    expect(sum(1, 1, 1, 6)).toBe(9)
})

test('get Triangle Type', () => {
    expect(getTriangleType(1, 1, 1)).toBe('10')
    expect(getTriangleType(2, 3, 3)).toBe('01')
    expect(getTriangleType(3, 3, 2)).toBe('01')
    expect(getTriangleType(4, 5, 3)).toBe('11')
    expect(getTriangleType(10, 2, 2)).toBe('00')
})

test('get Sum ', () => {
    expect(getSum(1000)).toBe(1)
    expect(getSum(0)).toBe(0)
    expect(getSum(1234)).toBe(10)
    expect(getSum(9999)).toBe(36)
})
test('is Even Sum Greater', () => {
    expect(isEvenIndexSumGreater([1, 100, 2, 200])).toBe(false)
    expect(isEvenIndexSumGreater([100, 1, 200, 2])).toBe(true)
    expect(isEvenIndexSumGreater([100, 1, 200, 2, 300, 4])).toBe(true)
    expect(isEvenIndexSumGreater([100, 1, 200, 2, 4])).toBe(true)
})
test('get Square Only Of Positive Integers', () => {
    const array = [4, 5.6, -9.8, 3.14, 10, 6, 8.34, -2]
    const len = array.length
    const result = getSquarePositiveIntegers(array)
    expect(result === array).toBe(false)
    expect(array.length).toBe(len)
    expect(result.length).toBe(3)
    expect(result[0]).toBe(16)
    expect(result[1]).toBe(100)
    expect(result[2]).toBe(36)
})
test('sum of first N numbers', () => {
    expect(sumFirstNumbers(0)).toBe(0)
    expect(sumFirstNumbers(4)).toBe(10)
    expect(sumFirstNumbers(10)).toBe(55)
})
test('get banknote list', () => {
    // надо бы проверять длинну резалтов и их сумму
    const result2500 = getBanknoteList(2500)
    const result23 = getBanknoteList(23)
    expect(result2500[0]).toBe(1000)
    expect(result2500[1]).toBe(1000)
    expect(result2500[2]).toBe(500)
    expect(result23[0]).toBe(20)
    expect(result23[1]).toBe(2)
    expect(result23[2]).toBe(1)

})


// Test Suites: 1 passed, 1 total
// Tests:       7 passed, 7 total


// Functions

// 1. Функция sum принимает параметром целые положительные
//    числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...nums: Array<number>): number {
    return nums.reduce((acc, el) => acc + el)
}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {
    if (a + b >= c && b + c >= a && a + c >= b) {
        if (a === b && b === c) return '10'
        if (a === b || b === c || c === a) return '01'
        if (a !== b && b !== c && c !== a) return '11'
    }
    return '00'
}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number {
    return number.toString().split('').reduce((acc, el) => acc + +el, 0)
}


// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    const sumEven = arr.filter((f, i) => i % 2 === 0).reduce((acc, el) => acc + el)
    const sumOdd = arr.filter((f, i) => i % 2 !== 0).reduce((acc, el) => acc + el)
    return sumEven > sumOdd
}


// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив.
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.

export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
    return array.filter(f => f === Math.trunc(f) && f > 0).map(m => Math.pow(m, 2))
}


// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {
    let sum = 0
    for (let i = 0; i <= N; i++) {
        sum += i
    }
    return sum
}

// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено

export function getBanknoteList(amountOfMoney: number): Array<number> {
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
    const arr: Array<number> = []
    for (let i = 0; i < banknotes.length; i++) {
        let temp = banknotes[i]
        while (amountOfMoney - temp >= 0) {
            amountOfMoney -= temp
            arr.push(temp)
        }
    }
    return arr
}