import { useState } from "react";

const Comp = ({ compName }) => {
    const [crash, setCrash] = useState(false);

    if (crash) {
        throw new Error("Error happened");
    }

    return (
        <>
            <p>Component N{compName}</p>
            <button onClick={() => setCrash(true)}>
                Click here for error
            </button>
            <hr />
        </>
    );
};

export default Comp;