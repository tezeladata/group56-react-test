import { useEffect, useState } from "react";

const Comp1 = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(prev => prev + 2);

    useEffect(() => {
        console.log(count)
    })

    return (
        <>
            <p>Count: {count}</p>
            <button onMouseOver={increment}>Hover this button</button>
        </> 
    )
};

export default Comp1;