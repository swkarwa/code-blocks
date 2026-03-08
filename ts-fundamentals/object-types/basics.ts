let dog: { name: string; breed: string; age: number } // defining an object type
dog = {
    name: 'Elton',
    breed: 'Lab',
    age: 0.5
}

console.log(`${dog}`)

// method 2
type Dog = {
    name: string; breed: string; age: number
}

let dog2: Dog
dog2 = {
    name: 'Elton',
    breed: 'Lab',
    age: 0.5
}
console.log(`${dog2}`)

console.log(`object as type mentioned to params`)
function printName(person: { firstName: string; lastName: string }) {
    console.log(`${person.firstName} ${person.lastName}`)
}

function printDog(dog: Dog) {
    console.log(`printing dog`)

    for (let key in dog) {
        console.log(`${key} : ${dog[key as keyof Dog]}`)
    }
    console.log(`using keys-------`)
    for (let key of Object.keys(dog)) {
        console.log(`${key} : ${dog[key as keyof Dog]}`)
    }
    console.log(`using values------`)
    for (let value of Object.values(dog)) {
        console.log(`${value}`)
    }
    console.log(`using entries-----`)
    for (const [key, value] of Object.entries(dog)) {
        console.log(`${key} : ${value}`)
    }
}


printName({ firstName: 'Swapnil', lastName: 'Karwa' })
printDog(dog2)