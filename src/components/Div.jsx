import { useState } from "react";

const Div = () => {
    const [clickCount, SetClickCount] = useState(0);

    const handleHover = () => {
        SetClickCount(prev => prev + 1)
    };

    return (
        <div style={{"width": "500px", "height": "500px", "display": "flex", "textAlign": "center", "alignItems": "center", "backgroundColor": "black", "color": "white"}} onMouseOver={handleHover}>
            <p style={{"textAlign": "center", "fontSize": "40px"}}>{clickCount}</p>
        </div>
    )
};

export default Div;