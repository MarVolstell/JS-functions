function sayHello(){ //Void doesnt return anything
    console.log("haiiii :3")
}

sayHello();



const sum = (a, b, c) => {
    //return a + b + c;
    return [a, b, c];
}

console.log(sum(4,54,6))



function printArray(array){
    for(value of array){
        console.log(value)
    }
}

printArray(sum(22, 1, 5))


let i = 0
const suma = (...numbers)=>{//'...' is a spread operator
    if(numbers.length == 0){
        return "no numbers"
    }
    let sum = 0;
    for(let number of numbers){
        if(number > 60){
        sum += number;
        }
    }
    return sum
}

console.log(suma(23, 45, 45, 67, 89, 12, 345, 654, 23))



//1

const toMilesPerHour = (kilometersPerHour)=>{
    if(kilometersPerHour < 0){
        return -1
    }
    let i = Math.round(kilometersPerHour / 1.609)
    Math.round(i)
    return i
}

console.log(toMilesPerHour(75.114))

//2

const printConversion = (kilometersPerHour)=>{
    let xx =kilometersPerHour
    if(kilometersPerHour < 0){
        console.log("invalid value")
    }
    let yy = Math.round(kilometersPerHour / 1.609)
    Math.round(i)
    console.log(xx + "km/h = " + yy + "mi/h")
}

console.log(printConversion(75.114))

//3

function more20 (x) {
    if(x < 0){
        return "no"
    }
    if(x % 20 == 1 || x % 20 == 2){
        return true
    }
    return false
}

console.log(more20(121))

//4

function minCat(string1, string2) {
    if(string1.length == string2.length){
    }
    if(string1.length > string2.length){
        string1 = string1.split('', string2.length)
    }
    if(string1.length < string2.length){
        string2 = string2.split('', string1.length)
    }
    return string1.concat("", string2)
}

console.log(minCat("thisss", "screw"))



/*
( ()=> {
    pop, shift, push , unshift, splice, split, join
    yea whatever
}
)()
*/