import { useState } from "react";

const Info = () => {
    const [username, setUsername] = useState("");

    const handleChange = e => setUsername(prev => e.target.value)

    return (
        <div>
            <p>{username}</p>
            <form>
                <input type="text" placeholder="Enter name" onChange={handleChange} />
            </form>
        </div>
    )
};

export default Info;