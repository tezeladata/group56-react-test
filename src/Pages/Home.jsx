import {useNavigate} from "react-router";
import {useState} from "react";

const Home = () => {
    const [count, setCount] = useState(0);

    const navigate = useNavigate();

    if (count === 5) {
        navigate("/products")
    }

    return (
        <main>
            <h1>Welcome to website</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, reprehenderit?</p>
            <button onClick={() => setCount(prev => prev + 1)}>+1</button>
        </main>
    )
};

export default Home;