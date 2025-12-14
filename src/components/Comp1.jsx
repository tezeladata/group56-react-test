import { useEffect, useState } from "react";

const Comp1 = () => {
    const [products, setProducts] = useState([]);

    const getData = async (apiLink) => {
        try {
            const data = await fetch(apiLink);
            const result = await data.json();

            setProducts(result)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData("https://fakestoreapi.com/products")
    }, [])

    return (
        <>
            <section>
                {
                    products.map((el, i) => (
                        <div key={i}>
                            <h1>{el.title}</h1>
                            <p>{el.description.split(" ").slice(0, 10).join(" ")}</p>
                            <p><b>Category:</b> {el.category}</p>

                            <br /><br />

                            <img src={el.image} alt={el.description.split(" ").slice(0, 10).join(" ")} style={{"maxWidth": "400px"}} />

                            <br /><br />

                            <p><b>Price:</b> {el.price}</p>
                            <button>Buy now</button>
                        </div>
                    ))
                }
            </section>
        </>
    )
};

export default Comp1