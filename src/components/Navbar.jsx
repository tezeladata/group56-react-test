const Navbar = () => {
    return (
        <nav className="w-screen h-[5vh] bg-emerald-600 flex items-center justify-between px-10 py-5 uppercase font-bold oswald text-white">
            <div className="w-[50%] text-2xl">
                <p>your logo</p>
            </div>

            <div className="w-[50%] flex items-center justify-between text-lg">
                <p>home</p>
                <p>about</p>
                <p>testimonials</p>
                <p>pricing</p>
                <p>contact</p>
                <p>social</p>
            </div>
        </nav>
    )
};

export default Navbar;