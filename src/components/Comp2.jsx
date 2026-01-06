import { useContext } from "react";
import { MyContext } from "../context/MyContext";

const Comp2 = () => {
    const {setCount} = useContext(MyContext);

    return (
        <>
            <hr />
            <button onClick={() => setCount(prev => prev + 1)}>+1</button>
            <hr />
        </>
    )
};

export default Comp2;