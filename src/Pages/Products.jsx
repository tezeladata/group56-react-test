import {useEffect, useState} from "react";

const Products = () => {
    const [products, setProducts] = useState([]);

    const getData = async (apiLink) => {
        try {
            const response = await fetch(apiLink);
            const data = await response.json();
            setProducts(data);
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getData("https://fakestoreapi.com/products");
    }, [])

    return (
        <section>
            <h1>Our products:</h1>
            <ul>
                {
                    products.map((product) => (
                       <li key={product.id}>
                           <h2>{product.title}</h2>
                           <p><b>Description:</b> {product.description.split(" ").slice(0, 5).join(" ")}</p>
                           <i><b>Price: </b> {product.price}</i>
                       </li>
                    ))
                }
            </ul>
        </section>
    )
};

export default Products;