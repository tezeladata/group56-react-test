import { Route, Routes } from "react-router";
import Home from "./Pages/Home.jsx"
import About from "./Pages/About.jsx";
import Profile from "./Pages/Profile.jsx";
import Navbar from "./Components/Navbar.jsx";

const App = () => {
    return (
        <main className="min-h-screen bg-slate-950 text-slate-100 font-sans">
            <Navbar />

            <div className="px-4 py-10 md:px-10 lg:px-16">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </div>
        </main>
    )
};

export default App;