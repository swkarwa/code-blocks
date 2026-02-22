let x:number = 10
let s:string = 'swapnil'
let b:boolean = true

console.log(x,s,b)

/* 
var vs let vs const
    * var is not recommended to use var
    * use let when variable value will be changing
    * const used, when variable value does not change
    
- scope
    * functional scope and block scope
    * functional scope is, variable declared inside a function is only available inside a function
    * block scope is, variable declared inside {} is called blocked scope

    * var is functional scope
    * let and const are blocked scope
    
- decleration or value assignment
- re-descleration
- re-assignment/re-initialiazation
- hoisting

*/

function varScope(){
    if(true){
        var msg = 'this is a var variable inside functional scope'
        console.log(msg , '-> accessing msg variable in same block')
    }
    console.log(msg , 'accessing msg variable outside block scope') // can be accessed here as well
}

function letScope(){
    if(true){
        let msg = 'this is a let variable inside functional scope'
        console.log(msg , '-> accessing msg variable in same block')
    }
    console.log('variables with let keyword cannot be accessed outside block') // can be accessed here as well
}

varScope()
letScope()