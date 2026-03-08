/**
 * =========================================================
 * TypeScript Object Types - Complete Guide (Single File)
 * =========================================================
 * This file demonstrates:
 *
 * 1. Inline object types
 * 2. Type aliases
 * 3. Function parameters with object types
 * 4. Iterating objects (loops)
 * 5. Function returning object types
 * 6. Excess property checking
 * 7. Index signatures (dynamic properties)
 * 8. Optional properties
 *
 * Language: TypeScript
 */


/**
 * =========================================================
 * 1. Defining Object Type Inline
 * =========================================================
 */

let dog: { name: string; breed: string; age: number }

dog = {
    name: "Elton",
    breed: "Lab",
    age: 0.5
}

// printing object
console.log("---- Inline Object Type ----")
console.log(dog)



/**
 * =========================================================
 * 2. Defining Reusable Object Types using `type`
 * =========================================================
 */

type Dog = {
    name: string
    breed: string
    age: number
}

let dog2: Dog = {
    name: "Elton",
    breed: "Lab",
    age: 0.5
}

console.log("---- Using Type Alias ----")
console.log(dog2)



/**
 * =========================================================
 * 3. Object Types in Function Parameters
 * =========================================================
 */

function printName(person: { firstName: string; lastName: string }) {
    console.log(`${person.firstName} ${person.lastName}`)
}

printName({ firstName: "Swapnil", lastName: "Karwa" })



/**
 * =========================================================
 * 4. Iterating Object Properties
 * =========================================================
 */

function printDog(dog: Dog) {

    console.log("---- Iterating Object ----")

    console.log("using for...in")

    for (let key in dog) {
        console.log(`${key} : ${dog[key as keyof Dog]}`)
    }

    console.log("using Object.keys()")

    for (let key of Object.keys(dog)) {
        console.log(`${key} : ${dog[key as keyof Dog]}`)
    }

    console.log("using Object.values()")

    for (let value of Object.values(dog)) {
        console.log(value)
    }

    console.log("using Object.entries()")

    for (const [key, value] of Object.entries(dog)) {
        console.log(`${key} : ${value}`)
    }
}

printDog(dog2)



/**
 * =========================================================
 * 5. Functions Returning Object Types
 * =========================================================
 */

type CoordinateType = {
    x: number
    y: number
}

function getCoordinates(): CoordinateType {

    return {
        x: Math.random(),
        y: Math.random()
    }

}

console.log("---- Function Returning Object ----")
console.log(getCoordinates())



/**
 * =========================================================
 * 6. Excess Property Checking
 * =========================================================
 */

type Person = {
    first: string
    last: string
}

const getName = function (person: Person) {
    console.log(`${person.first} ${person.last}`)
}

/**
 * This will cause an error
 *
 * Because TypeScript checks object literals strictly
 */

// getName({ first: "swapnil", last: "karwa", age: 34 })


/**
 * This works because the object is stored in a variable first
 */

const person = {
    first: "swapnil",
    last: "karwa",
    age: 34
}

getName(person)



/**
 * =========================================================
 * 7. Index Signatures (Allow Dynamic Properties)
 * =========================================================
 */

type Employee = {
    first: string
    last: string
    [key: string]: any
}

function getEmployee(employee: Employee) {

    console.log("---- Index Signature Example ----")

    for (const [key, value] of Object.entries(employee)) {
        console.log(`${key} : ${value}`)
    }

}

getEmployee({
    first: "swapnil",
    last: "karwa",
    age: 34
})



/**
 * =========================================================
 * 8. Optional Properties
 * =========================================================
 */

type Point = {
    x: number
    y: number
    z?: number
}

function printCoordinates(point: Point) {

    console.log("---- Optional Properties ----")

    for (const [key, value] of Object.entries(point)) {
        console.log(`${key} : ${value}`)
    }

}

printCoordinates({ x: 100, y: 100 })
printCoordinates({ x: 100, y: 100, z: 200 })


/**
 * This will cause an error
 *
 * Because 'm' is not defined in Point
 */

// printCoordinates({ x: 100, y: 100, z: 200, m: 100 })


/**
 * =========================================================
 * 9. Nested Object
 * =========================================================
 */

type P = {
    first: string, last: string
}
type ParentName = {
    father: P
    mother: P
}
type DescribePerson = {
    name: string
    age: number
    parentNames: ParentName
}

const displayPerson = (person: DescribePerson) => {

    const pJson = JSON.stringify(person, null, 2)
    console.log(pJson)
    console.log(`---------------------------`)
    console.log(person)

}

const p: DescribePerson = {
    name: 'swapnil',
    age: 34,
    parentNames: {
        father: {
            first: 'subhash', last: 'karwa'
        },
        mother: {
            first: 'sushma', last: 'karwa'
        }
    }
}

displayPerson(p)


/**
 * =========================================================
 * 10. Read only
 * =========================================================
 */

type User = {
    readonly id: number,
    first: string
    last: string
}

type CreateUser = {
    first: string,
    last: string
}

function getUser(person: CreateUser): User {
    return { id: Math.random(), first: 'swapnil', last: 'karwa' }
}


const result = getUser({ first: 'swapnil', last: 'karwa' })
console.log(result)

/**
 * =========================================================
 * 11. Intersection Types
 * =========================================================
 */

type Circle = {
    radius: number
}
type ColorFull = {
    color: string
}
type ColorfullCricle = Circle & ColorFull // combined types
type ColorFullCircleWithDia = Circle & ColorFull & {
    dia: number
}

// passing multiple types
const coloredCircle = (circle: ColorfullCricle | ColorFullCircleWithDia) => { console.log(circle) }
coloredCircle({ radius: Math.random(), color: 'red' })
coloredCircle({ radius: Math.random(), color: 'blue', dia: 200 })

/**
 * =========================================================
 * Summary
 * =========================================================
 *
 * 1. Inline Object Types
 * 2. Reusable Type Aliases
 * 3. Object Types in Function Parameters
 * 4. Iterating Objects
 * 5. Function Return Types
 * 6. Excess Property Checking
 * 7. Index Signatures
 * 8. Optional Properties
 * 9. Nested Object types
 * 10. ReadOnly Modifier
 *
 * These are fundamental concepts of TypeScript objects.
 */