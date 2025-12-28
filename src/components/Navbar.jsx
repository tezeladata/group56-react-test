import logoImage from "../assets/images/logo.png"

const Navbar = () => {
    const handleClick = () => {
        window.location.reload();
    }

    return (
        <nav className="h-[10vh] w-screen flex items-center justify-between px-[5%]">
            <div className="w-[25%] flex items-center justify-start">
                <img src={logoImage} className="rotate-45 w-20 cursor-pointer" onClick={handleClick} />
            </div>

            <div className="w-[50%] flex items-center justify-center gap-8 font-bold text-lg">
                <p style={{color: "#dd7d8d"}} className="cursor-pointer">About</p>
                <p className="cursor-pointer">How it works</p>
                <p className="cursor-pointer">Features</p>
                <p className="cursor-pointer">Blog</p>
            </div>

            <div className="w-[25%] flex items-center justify-end gap-8 font-bold text-lg">
                <p className="border rounded-lg py-1 px-5 cursor-pointer">Sign up</p>
                <p className="border rounded-lg py-1 px-5 cursor-pointer bg-black text-white">Log in</p>
            </div>
        </nav>
    )
};

export default Navbar;