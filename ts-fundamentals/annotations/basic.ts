let str: string = 'welcome, learning TS'
let b: boolean = true
let n: number = 10

console.log(`${str}`)
console.log(`Is learning TS is fun ? : ${b}`)
console.log(`what is value of number n : ${n}`)

// str = 10  // error here

let x = 27
// x = 'this is movie title' // error here,( type inference)

/**------------------ any type --------------------- */
let s: any = 'x'
s = 'welcome'

// example where any is used
const movies = ['avengers', 'IT', 'lucy']
let foundMovie: string
for (let movie of movies) {
    if (movie === 'IT') {
        foundMovie = movie
    }
}
