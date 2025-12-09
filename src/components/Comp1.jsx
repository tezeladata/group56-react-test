import { useEffect, useState } from "react"

const Comp1 = () => {
    const [intervalTime, setIntervalTime] = useState(null);
    const [count, setCount] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault();

        setIntervalTime(prev => parseInt(e.target.timeInput.value))
    }

    useEffect(() => {
        if (!intervalTime) return;

        const intervalId = setInterval(() => {
            setCount(prev => prev + 1)
        }, intervalTime)

        return () => {
            clearInterval(intervalId)
        }
    }, [intervalTime])

    return (
        <div>
            <p>Time: {count}</p>

            <form onSubmit={handleSubmit}>
                <input type="number" placeholder="Enter miliseconds" required name="timeInput" />
                <button type="submit">submit</button>
            </form>

            <button onClick={() => setIntervalTime(prev => 0)}>Stop timer</button>
            <button onClick={() => setCount(prev => 0)}>Reset time</button>
        </div>
    )
};

export default Comp1