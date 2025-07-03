export default function DoubleDice(){
    const num1 = Math.floor(Math.random() * 3) + 1;
    const num2 = Math.floor(Math.random() * 3) + 1;
    const style = {color: num1 === num2 ? 'green' : 'red' }
    const result = num1 === num2 ? 'You win!' : 'YOu lose :(';
          return (
        <div className="DoubleDice" style={style}>
            <h2>{result}</h2>
            <p>Num1: {num1}</p>
            <p>Num2: {num2}</p>
        </div>
    );
    }