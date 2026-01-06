import { useContext } from "react";
import { MyContext } from "../context/MyContext";

const Comp = () => {
    const {count} = useContext(MyContext);
    console.log(count)

    return (
        <>
            <hr />
            <p>{count}</p>
            <hr />
        </>
    )
};

export default Comp;