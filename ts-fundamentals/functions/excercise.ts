function twoFer(name: string = 'you') {
    return `one for ${name}, one for me`
}

function isLeapYer(year: number): boolean {
    return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)
}

console.log(twoFer('swapnil'))
console.log(twoFer())
console.log(isLeapYer(2012))