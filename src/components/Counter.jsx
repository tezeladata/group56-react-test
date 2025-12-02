import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleClick = num => setCount(prev => prev + num)

    return (
        <div>
            <p>{count}</p>

            <button onClick={() => handleClick(-1)}>-1</button>
            <button onClick={() => handleClick(-count)}>Reset</button>
            <button onClick={() => handleClick(1)}>+1</button>
        </div>
    )
};

export default Counter;