let age: number | string = 21
age = 23
age = '24'



type Point = {
    x: number, y: number
}
type Loc = {
    lat: number,
    long: number
}

let co_ordinates: Loc | Point = {
    x: 100, y: 100
}

co_ordinates = {
    lat: 100, long: 100
}

console.log(`Union types with functions`)

function printAge(age: number | string) {
    console.log(`age is : ${typeof age}`)
}

printAge(23)
printAge('87')

console.log(`type narrowing`)

function calcTax(price: number | string) {
    let tax: number = 30 / 100
    if (typeof price === 'string') {
        return Number(price.replace('$', '')) * tax
    }
    return price * tax
}

console.log(calcTax(100))
console.log(calcTax('$100'))

console.log(`Array types`)
const nums: (number | string)[] = [1, 2, 3, '4']
const cords: (Loc | Point)[] = [{ x: 100, y: 100 }, { lat: 15, long: 20 }]

console.log(nums)
console.log(cords)