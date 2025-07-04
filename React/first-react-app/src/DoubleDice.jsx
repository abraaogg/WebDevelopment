export default function DoubleDice(){
    const num1 = Math.floor(Math.random() * 3) + 1;
    const num2 = Math.floor(Math.random() * 3) + 1;
    const isWinner = num1 === num2;
    const style = {color: isWinner ? 'green' : 'red' };
          return (
        <div className="DoubleDice" style={style}>
            <h2>Double Dice</h2>
            {isWinner ? <h3>You Win!</h3> : <h3>You lose!</h3> }
            <p>Num1: {num1}</p>
            <p>Num2: {num2}</p>
        </div>
    );
    }