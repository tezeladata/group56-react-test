import { useContext } from "react";
import { MyContext } from "../context/MyContext";

const Comp2 = () => {
    const info2 = useContext(MyContext);
    console.log(`II component: ${info2}`)

    return (
        <>
        
        </>
    )
};

export default Comp2;