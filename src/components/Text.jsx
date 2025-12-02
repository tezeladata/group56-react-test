import { useState } from "react";

const Text = () => {
    const [textIndex, setTextIndex] = useState(0);

    const texts = [
        "text 1",
        "text 2",
        "text 3",
        "text 4",
        "text 5",
        "text 6",
        "text 7",
        "text 8",
        "text 9",
        "text 10",
    ];

    const nextQuestion = () => {
        if (textIndex === 9) {
            setTextIndex(0)
        } else {
            setTextIndex(prev => prev + 1)
        }
    }
    const previousQuestion = () => {
        if (textIndex === 0) {
            setTextIndex(9)
        } else {
            setTextIndex(prev => prev - 1)
        }
    }

    return (
        <div>
            <p>{texts[textIndex]}</p>

            <button onClick={nextQuestion}>Next text</button>
            <button onClick={previousQuestion}>Previous text</button>
            <button onClick={() => setTextIndex(prev => 0)}>Reset</button>
        </div>
    )
};

export default Text;