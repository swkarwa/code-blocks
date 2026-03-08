/**
 * =========================================================
 * TypeScript Arrays Guide
 * =========================================================
 *
 * Concepts covered:
 * 1. Typed arrays
 * 2. Empty arrays
 * 3. Tuple-like empty arrays
 * 4. Arrays of objects
 * 5. Iterating arrays
 * 6. Any type arrays
 * 7. Alternate array syntax
 */



/**
 * =========================================================
 * 1. Typed Arrays
 * =========================================================
 *
 * Define an array that can only contain strings
 */

let names: string[] = [
    "swapnil",
    "pooja",
    "sagar",
    "jyeshtha",
    "kanishtha"
]

console.log(names)



/**
 * =========================================================
 * 2. Empty Arrays
 * =========================================================
 *
 * Create an empty array that will only accept numbers
 */

let numbers: number[] = []

numbers.push(10)
numbers.push(20)

console.log(numbers)



/**
 * =========================================================
 * 3. Empty Array Type []
 * =========================================================
 *
 * This means the array must always stay empty
 */

let friends: [] = []

// friends.push("jyeshtha") ❌ Error
// Because the type [] means an empty tuple with no elements



/**
 * =========================================================
 * 4. Arrays of Objects
 * =========================================================
 */

type Point = {
    x: number
    y: number
}

let points: Point[] = [
    { x: 100, y: 100 },
    { x: 90, y: 90 }
]



/**
 * =========================================================
 * 5. Iterating Arrays
 * =========================================================
 */

for (const point of points) {
    console.log(point)
}



/**
 * =========================================================
 * 6. Arrays with Multiple Types (any[])
 * =========================================================
 *
 * any[] disables type safety
 */

let anyArray: any[] = ["swapnil", 90]

console.log(anyArray)



/**
 * =========================================================
 * 7. Alternative Syntax for Arrays
 * =========================================================
 *
 * Array<T> is a generic syntax
 */

let names2: Array<string> = [
    "swapnil",
    "subhash",
    "karwa"
]

console.log(names2)

/**
 * =========================================================
 * 8. Multi dimentional array
 * =========================================================
 */

const directions: number[][] = [[1, 0], [-1, 0], [0, 1], [0, -1]]
console.log(directions)

const grid: string[][] = [['X', 'O', 'X'], ['X', 'X', 'O'], ['O', 'O', 'X']]
console.log(grid)
/**
 * =========================================================
 * Summary
 * =========================================================
 *
 * string[]       → array of strings
 * number[]       → array of numbers
 * Point[]        → array of objects , also known as array of types
 * any[]          → array of any type (avoid when possible)
 * []             → empty tuple (cannot add elements)
 * Array<string>  → generic array syntax
 * multi-dimentional array  → number[][]
 */