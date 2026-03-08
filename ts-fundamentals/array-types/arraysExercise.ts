// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
let ages: number[] | undefined;

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
let gameBoard: string[][] | undefined;

// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a Product type that contains a name and a price.
// An example product could be:
// {name: "coffee mug", price: 11.50}
type Product = {
    name: string,
    price: number
}

// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
function getTotal(products: Product[]): number {
    return products.reduce((total, product) => { return total + product.price }, 0)
}

const result = getTotal([{
    name: 'coffee', price: 10
}, {
    name: 'tea', price: 5
}])

console.log(`total of all products is : ${result}`)