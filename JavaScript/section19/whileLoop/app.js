let count = 0;
while (count < 10){
    count++;
    console.log(count)
}

// const secret = "BabyShark";

// let guess = prompt("enter the secret code...");
// while( guess !== secret){
//     guess = prompt("enter the secret code...");
// }
// console.log("You got the secret!!")

let input = prompt("Hey, say something!")
while (true){
    input = prompt(input);
    if (input.toLowerCase() === "stop") break;
}
console.log("Okay, you win!")
