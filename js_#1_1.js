// 1. Simple object
let man = {
    name: 'John',
    age: 28
};

let manFullCopy = {...man} // your code
manFullCopy.age = 18

console.log(man === manFullCopy) // false
console.log(man.age) // 28
console.log(manFullCopy.age) // 18


// 2. Array of primitives
let numbers = [1, 2, 3];

let numbersFullCopy = [...numbers] // your code
numbersFullCopy[1] = 5

console.log(numbers === numbersFullCopy) // false
console.log(numbers) // [1, 2, 3]
console.log(numbersFullCopy) // [1, 5, 3]


// 3. Object inside an object
let man1 = {
    name: 'John',
    age: 28,
    mother: {
        name: 'Kate',
        age: 50
    }
};

let man1FullCopy = {...man1, mother: {...man1.mother}} // your code
man1FullCopy.mother.name = 'Ann'

console.log(man1.mother === man1FullCopy.mother) // false
console.log(man1.mother) // {name: 'Kate', age: 50}
console.log(man1FullCopy.mother) // {name: 'Ann', age: 50}


// 4. Array of primitives inside an object
let man2 = {
    name: 'John',
    age: 28,
    friends: ["Peter", "Steven", "William"]
};

let man2FullCopy = {...man2, friends: [...man2.friends]} // your code
man2FullCopy.friends[0] = 'Kate'

console.log(man2.friends === man2FullCopy.friends) // false
console.log(man2.friends) // ['Peter', 'Steven', 'William']
console.log(man2FullCopy.friends) // ['Kate', 'Steven', 'William']


// 5 Array of objects
let people = [
    {name: "Peter", age: 30},
    {name: "Steven", age: 32},
    {name: "William", age: 28}
];


let peopleFullCopy = people.map(m => ({...m})) // your code
peopleFullCopy[1].age = 40

console.log(people[1] === peopleFullCopy[1]) // false
console.log(people[1]) // {name: 'Steven', age: 32}
console.log(peopleFullCopy[1]) // {name: 'Steven', age: 40}


// 6 Array of objects inside object
let man3 = {
    name: 'John',
    age: 28,
    friends: [
        {name: "Peter", age: 30},
        {name: "Steven", age: 32},
        {name: "William", age: 28}
    ]
};

let man3FullCopy = {...man3, friends: [...man3.friends.map(m => ({...m}))]} // your code
man3FullCopy.friends[2].name = 'Helga'

console.log(man3.friends[1] === man3FullCopy.friends[1]) // false
console.log(man3.friends[2]) // {name: 'William', age: 28}
console.log(man3FullCopy.friends[2]) // {name: 'Helga', age: 28}


// 7 Object inside an object, inside an object
let man4 = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        }
    }
};

let man4FullCopy = {...man4, mother: {...man4.mother, work: {...man4.mother.work}}}// your code
man4FullCopy.mother.work.position = 'pilot'

console.log(man4.mother.work === man4FullCopy.mother.work) // false
console.log(man4.mother.work) // {position: 'doctor', experience: 15}
console.log(man4FullCopy.mother.work) // {position: 'pilot', experience: 15}

// 8 Array of objects inside object -> object
let man5 = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        },
        parents: [
            {name: "Kevin", age: 80},
            {name: "Jennifer", age: 78},
        ]
    }
};

let man5FullCopy = {
    ...man5,
    mother: {...man5.mother, work: {...man5.mother.work}, parents: [...man5.mother.parents.map(m => ({...m}))]}
} // your code

console.log(man5.mother.work === man5FullCopy.mother.work) // false
console.log(man5.mother.parents === man5FullCopy.mother.parents) // false

man5FullCopy.mother.work.experience = 30
man5FullCopy.mother.parents[0].name = 'Max'

console.log(man5.mother.work) // {position: 'doctor', experience: 15}
console.log(man5FullCopy.mother.work) // {position: 'doctor', experience: 30}
console.log(man5.mother.parents[0]) // {name: 'Kevin', age: 80}
console.log(man5FullCopy.mother.parents[0]) // {name: 'Max', age: 80}


// 9 Object inside an object -> array -> object ->  object
let man6 = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        },
        parents: [
            {
                name: "Kevin",
                age: 80,
                favoriteDish: {
                    title: "borscht"
                }
            },
            {
                name: "Jennifer",
                age: 78,
                favoriteDish: {
                    title: "sushi"
                }
            },
        ]
    }
};

let man6FullCopy = {
    ...man6,
    mother: {
        ...man6.mother,
        work: {...man6.mother.work},
        parents: [...man6.mother.parents.map(m => ({...m, favoriteDish: {...m.favoriteDish}}))]
    }
} // your code

console.log(man6.mother.work === man6FullCopy.mother.work) // false
console.log(man6.mother.parents === man6FullCopy.mother.parents) // false
console.log(man6.mother.parents[0] === man6FullCopy.mother.parents[0]) // false
console.log(man6.mother.parents[0].favoriteDish === man6FullCopy.mother.parents[0].favoriteDish) // false

man6FullCopy.mother.parents[0].favoriteDish.title = 'burger'
man6FullCopy.mother.work.position = 'driver'

console.log(man6.mother.parents[0].favoriteDish) // {title: 'borscht'}
console.log(man6FullCopy.mother.parents[0].favoriteDish) // {title: 'burger'}

console.log(man6.mother.work) // {position: 'doctor', experience: 15}
console.log(man6FullCopy.mother.work) // {position: 'driver', experience: 15}


//10 Array of objects inside an object -> object -> array -> object ->  object
let man7 = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        },
        parents: [
            {
                name: "Kevin",
                age: 80,
                favoriteDish: {
                    title: "borscht",
                    ingredients: [
                        {title: "beet", amount: 3},
                        {title: "potatoes", amount: 5},
                        {title: "carrot", amount: 1},
                    ]
                }
            },
            {
                name: "Jennifer",
                age: 78,
                favoriteDish: {
                    title: "sushi",
                    ingredients: [
                        {title: "fish", amount: 1},
                        {title: "rise", amount: 0.5}
                    ]
                }
            },
        ]
    }
};

let man7FullCopy = {
    ...man7,
    mother: {
        ...man7.mother,
        work: {...man7.mother.work},
        parents: [...man7.mother.parents.map(m => ({
            ...m,
            favoriteDish: {...m.favoriteDish, ingredients: [...m.favoriteDish.ingredients.map(m => ({...m}))]}
        }))]
    }
} // your code


console.log(man7 === man7FullCopy) // false
console.log(man7.mother.work === man7FullCopy.mother.work) // false
console.log(man7.mother.parents === man7FullCopy.mother.parents) // false
console.log(man7.mother.parents[0] === man7FullCopy.mother.parents[0]) // false
console.log(man7.mother.parents[0].favoriteDish === man7FullCopy.mother.parents[0].favoriteDish) // false
console.log(man7.mother.parents[0].favoriteDish.ingredients === man7FullCopy.mother.parents[0].favoriteDish.ingredients) // false
console.log(man7.mother.parents[0].favoriteDish.ingredients[1] === man7FullCopy.mother.parents[0].favoriteDish.ingredients[1]) // false

man7FullCopy.mother.work.position = 'teacher'
man7FullCopy.mother.parents[1].age = 67
man7FullCopy.mother.parents[1].favoriteDish.title = 'meat'
man7FullCopy.mother.parents[1].favoriteDish.ingredients[1].amount = 2

console.log(man7.mother.work) // {position: 'doctor', experience: 15}
console.log(man7FullCopy.mother.work) // {position: 'teacher', experience: 15}

console.log(man7.mother.parents[1]) // {name: 'Jennifer', age: 78, favoriteDish: {…}}
console.log(man7FullCopy.mother.parents[1]) // {name: 'Jennifer', age: 67, favoriteDish: {…}}

console.log(man7.mother.parents[1].favoriteDish) // {title: 'sushi', ingredients: Array(2)}
console.log(man7FullCopy.mother.parents[1].favoriteDish) // {title: 'meat', ingredients: Array(2)}

console.log(man7.mother.parents[1].favoriteDish.ingredients[1]) // {title: 'rise', amount: 0.5}
console.log(man7FullCopy.mother.parents[1].favoriteDish.ingredients[1]) // {title: 'rise', amount: 2}