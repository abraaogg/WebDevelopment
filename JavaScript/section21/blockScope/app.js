let radius = 8;
if (radius > 0){
    const PI = 3.14
    let msg = 'HIII!'
}

console.log(radius);

//Higher order functions

    function callTwice(func){
        func();
        func();
    }

    function callTenTimes(){
        for (let i = 0; i < 10; i++){
            f()
        }
    }

    function rollDie(){
        const roll = Math.floor(Math.random() * 6) + 1
        console.log(roll)
    }

    callTwice(rollDie)