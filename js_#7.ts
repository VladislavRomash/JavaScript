// Reducer

export type StateType = number

export type ActionType = {
    type: 'SUM' | 'SUB' | 'MUL' | 'DIV' | 'TEST',
    n: number
}


export const reducerOne = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case 'SUM':
            return state + action.n
        case 'SUB':
            return state - action.n
        case 'MUL':
            return state * action.n
        case 'DIV':
            return state / action.n
        default:
            return state
    }
}


export type ActionTypeAlternative = addACType | subACType

export const reducerTwo = (state: StateType, action: ActionTypeAlternative): StateType => {
    switch (action.type) {
        case 'ADD':
            return state + action.payload.b
        case 'SUB':
            return state - action.b
        default:
            return state
    }
}

type addACType = ReturnType<typeof addAC>
export const addAC = (b: number) => {
    return {
        type: 'ADD',
        payload: {b}
    } as const
}

type subACType = ReturnType<typeof subAC>
export const subAC = (b: number) => {
    return {
        type: 'SUB', b
    } as const
}

// Test

test('SUM', () => {
    // 1. Тестовые данные
    const a: StateType = 50
    const b: ActionType = {
        type: 'SUM',
        n: 50
    }

    const test: ActionType = {
        type: 'TEST',
        n: 50
    }

    // 2. Выполнение тестируемого кода
    const result = reducerOne(a, b)

    // 3. Проверка результата
    expect(result).toBe(100)
    expect(reducerOne(a, test)).toBe(a)
})

test('SUB', () => {
    const a: StateType = 20
    const b: ActionType = {
        type: 'SUB',
        n: 50
    }

    const result = reducerOne(a, b)

    expect(result).toBe(-30)
})

test('MUL', () => {
    const a: StateType = 20
    const b: ActionType = {
        type: 'MUL',
        n: 50
    }

    const result = reducerOne(a, b)

    expect(result).toBe(1000)
})

test('DIV', () => {
    const a: StateType = 100
    const b: ActionType = {
        type: 'DIV',
        n: 50
    }

    const result = reducerOne(a, b)

    expect(result).toBe(2)
})


test('SUM2', () => {
    const a: number = 50
    const b: number = 50

    const result = reducerTwo(a, addAC(b))

    expect(result).toBe(100)
})

test('SUB2', () => {
    const a: number = 50
    const b: number = 50

    const result = reducerTwo(a, subAC(b))

    expect(result).toBe(0)
})


// Test Suites: 1 passed, 1 total
// Tests:       6 passed, 6 total

