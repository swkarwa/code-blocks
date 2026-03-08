function square(n: number): number {
    return n * n
}

function greet(name: string): string {
    return `hello ${name}!`
}

const doSomething = (person: string, age: number, isFunny: boolean) => { }

function defaultVal(num: number = 10): void {
    console.log(`default value is : ${num}`)
}

console.log(square(2))
// console.log(square('welcome')) // error here
console.log(square(3.14))
console.log(greet('swapnil'))
console.log(doSomething('swapnil', 34, true)) // no return type : undefined
defaultVal()
defaultVal(100)
// defaultVal('string') // error here

console.log(`-----------------------------------------------------------------`)

function twice(num: number) {
    console.log(`type inference return type is by default number`)
    return num * 2
}

function voidFunction() {
    console.log(`by default due to type inference , return type is void`)
}

// function with multiple return types
function random(num: number): string | number {
    if (Math.random() < 0.5) {
        return num.toString()
    }
    return num
}

const add = function (a: number, b: number): number {
    return a + b
}


console.log(add(9, 10))
console.log(random(10))

console.log(`anonymous functions`)

const colors = ['yellow', 'orange', 'red']
const uColors: string[] = colors.map(color => color.toUpperCase())
console.log(uColors)

console.log(`---------------------- Never type`)

function neverType(): never {
    throw new Error(`this does not returns anything`)
}

try {
    neverType()
} catch (error: unknown) {
    if (error instanceof Error) {
        console.log(error.message)
    }
}