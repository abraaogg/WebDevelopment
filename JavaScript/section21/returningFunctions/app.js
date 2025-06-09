function makeMysteryFunc(){
    const rand = Math.random();
    if(rand > 0.5){
        return function(){
            console.log('Congrats, i am a good function!')
            console.log("you win a million dollars")
        }
    } else{
        return function(){
            alert("You have been infected by a virus")
            alert("bleeehhh ")
        }
    }
}