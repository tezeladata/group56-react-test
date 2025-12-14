import { useEffect, useState } from "react";

const Comp1 = () => {
    const [city, setCity] = useState("")

    const getData = async (apiLink) => {
        const data = await fetch(apiLink);
        const result = await data.json();
        console.log(result)
    }

    useEffect(() => {
        getData(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9f7bccc5ba28c48440a7cbf119764bd2`)
    }, [city])

    return (
        <>
            <form>
                <input type="text" placeholder="Enter city name: " onChange={({target}) => setCity(prev => target.value)} />
            </form>
        </>
    )
};

export default Comp1;