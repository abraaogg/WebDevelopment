import { use, useState } from "react";
import './Toggler.css';

export default function ToggleCounter() {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count - 1)
    const reset = () => setCount(0)

    return (
        <div>
            <p className="Count">
                {count}
            </p>
            <div className="countButton">
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
            </div>
            <br />
            <button className="resetButton" onClick={reset}>Reset</button>
        </div>
    );
}
