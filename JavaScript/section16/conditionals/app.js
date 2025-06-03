console.log("Before conditional")
let random = Math.random()
if (random < 0,5){
    console.log("Your number is less than 0,5")
    console.log(random)
}
console.log("After conditional")

const age = 4;

if (age < 5){
    console.log("You are a baby")
} else if( age <= 10){
    console.log("you are a child")
} else if (age > 10){
    console.log("You are a adult")
} else if (age >= 65){
    console.log("You are a senior")
}