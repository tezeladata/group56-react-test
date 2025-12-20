import { useState } from "react"
import Comp1 from "../presentational/Comp1";

const Container = () => {
    const [count, setCount] = useState(0);
    const increase = () => {
        setCount(prev => prev + 1);
        console.log(count+1)
    };

    return <Comp1 count={count} increase={increase} />
};

export default Container;