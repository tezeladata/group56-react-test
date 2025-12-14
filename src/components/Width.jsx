import { useEffect, useState } from "react"

const Width = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight)

    const getCurrentWidth = () => setWidth(window.innerWidth);
    const getCurrentHeight = () => setHeight(window.innerHeight)

    useEffect(() => {
        window.addEventListener("resize", () => {
            getCurrentWidth();
            getCurrentHeight();
            console.log(window)
        })

        return  () => {
            window.removeEventListener("resize", () => {
                getCurrentWidth();
                getCurrentHeight()
            })
        }
    })

    return (
        <div>
            <p>Width: {width}px</p>
            <p>Height: {height}px</p>
        </div>
    )
};

export default Width;