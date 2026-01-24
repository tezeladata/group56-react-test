import {Link} from "react-router";

const Navbar = () => {
    return (
        <nav className="border-b border-slate-800 bg-slate-950/70 backdrop-blur sticky top-0 z-20">
            <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                <Link to="/" className="text-xl font-semibold tracking-wide text-white">React Tailwind</Link>

                <ul className="flex gap-6 text-sm font-medium text-slate-300">
                    <li>
                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:text-white transition-colors">About</Link>
                    </li>
                    <li>
                        <Link to="/profile" className="hover:text-white transition-colors">Profile</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;