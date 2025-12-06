import { useEffect, useState } from "react";

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetch("https://fakestoreapi.com/products");
                const res = await data.json();
                setProducts(prev => [...res])
            } catch(err) {
                console.log(err)
            }
        };
        getData()
    }, []);


    return (
        <>
            <ul>
                {
                    products.map(prodObj => (
                        <li key={prodObj.id}>
                            <p><b>ID:</b> {prodObj.id}</p>
                            <h2><b>Product:</b> {prodObj.title}</h2>
                            <h3><b>Product description:</b> {prodObj.description.split(" ").slice(0, 5).join(" ")}</h3>
                            <img src={prodObj.image} alt={prodObj.title} style={{"height": "200px"}} /><br />
                            <i><b>Price:</b> {prodObj.price}</i>
                            <hr />
                        </li>
                    ))
                }
            </ul>
        </>
    )
};

export default Shop