/**
 * =========================================================
 * TypeScript Functions Guide
 * =========================================================
 * Concepts covered:
 *
 * 1. Function parameter types
 * 2. Function return types
 * 3. Arrow functions
 * 4. Default parameters
 * 5. Type inference
 * 6. Union return types
 * 7. Anonymous functions
 * 8. Array functions with types
 * 9. Never type
 * 10. Error handling
 */


/**
 * =========================================================
 * 1. Function with Parameter and Return Type
 * =========================================================
 */

function square(n: number): number {
    return n * n
}

console.log(square(2))

// console.log(square("hello")) ❌ Error
// Argument of type 'string' is not assignable to parameter of type 'number'

console.log(square(3.14))



/**
 * =========================================================
 * 2. Function Returning String
 * =========================================================
 */

function greet(name: string): string {
    return `hello ${name}!`
}

console.log(greet("swapnil"))



/**
 * =========================================================
 * 3. Arrow Functions
 * =========================================================
 */

const doSomething = (person: string, age: number, isFunny: boolean) => {

}

console.log(doSomething("swapnil", 34, true))

// Since there is no return statement,
// return type is automatically inferred as `void`.
// Output → undefined



/**
 * =========================================================
 * 4. Default Parameters
 * =========================================================
 */

function defaultVal(num: number = 10): void {
    console.log(`default value is : ${num}`)
}

defaultVal()
defaultVal(100)

// defaultVal("string") ❌ Error



/**
 * =========================================================
 * 5. Type Inference
 * =========================================================
 */

function twice(num: number) {

    console.log("TypeScript infers return type automatically")

    return num * 2
}

// inferred return type = number



/**
 * =========================================================
 * 6. Void Functions
 * =========================================================
 */

function voidFunction() {
    console.log("This function returns nothing")
}

// inferred return type = void



/**
 * =========================================================
 * 7. Function with Multiple Return Types
 * =========================================================
 */

function random(num: number): string | number {

    if (Math.random() < 0.5) {
        return num.toString()
    }

    return num
}

console.log(random(10))



/**
 * =========================================================
 * 8. Function Expression (Anonymous Function)
 * =========================================================
 */

const add = function (a: number, b: number): number {

    return a + b

}

console.log(add(9, 10))



/**
 * =========================================================
 * 9. Anonymous Functions with Arrays
 * =========================================================
 */

console.log("Anonymous Functions Example")

const colors = ["yellow", "orange", "red"]

const uColors: string[] =
    colors.map(color => color.toUpperCase())

console.log(uColors)



/**
 * =========================================================
 * 10. Never Type
 * =========================================================
 *
 * A function with return type `never`
 * never successfully finishes execution.
 *
 * It either:
 * 1. throws an error
 * 2. runs infinitely
 */

function neverType(): never {

    throw new Error("this function never returns")

}



/**
 * =========================================================
 * 11. Error Handling
 * =========================================================
 */

try {

    neverType()

}

catch (error: unknown) {

    if (error instanceof Error) {

        console.log(error.message)

    }

}



/**
 * =========================================================
 * Summary
 * =========================================================
 *
 * 1. Function parameter typing
 * 2. Return type annotations
 * 3. Arrow functions
 * 4. Default parameters
 * 5. Type inference
 * 6. Union return types
 * 7. Function expressions
 * 8. Array callbacks
 * 9. Never type
 * 10. Error handling with unknown
 *
 * These are fundamental TypeScript function concepts.
 */