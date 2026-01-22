import {Route, Routes} from "react-router";
import Home from "./Pages/Home.jsx";
import Contact from "./Pages/Contact.jsx";
import Products from "./Pages/Products.jsx";
import Navbar from "./components/Navbar.jsx";


const App = () => {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/products" element={<Products />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </>
    )
}

export default App;