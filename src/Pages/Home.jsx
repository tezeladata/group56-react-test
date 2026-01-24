import {useNavigate} from "react-router";

const Home = () => {
    const navigate = useNavigate();

    return (
        <section className="max-w-5xl mx-auto text-center space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-400">Tailwind powered experience</p>
            <h1 className="text-4xl md:text-5xl font-semibold text-white">Welcome to our website</h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, dolore?
            </p>

            <button
                className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:scale-105"
                onClick={() => navigate("/profile")}
            >
                Go To Profile
            </button>
        </section>
    )
};

export default Home;