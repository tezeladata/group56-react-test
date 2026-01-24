import {useNavigate} from "react-router";

const Profile = () => {
    const navigate = useNavigate();

    return (
        <section className="max-w-3xl mx-auto space-y-6">
            <div className="rounded-3xl border border-slate-800 bg-white/5 backdrop-blur shadow-2xl p-8">
                <h1 className="text-3xl font-semibold text-white mb-4">Profile page</h1>
                <div className="space-y-2 text-slate-200">
                    <p><span className="text-slate-400">Username:</span> David Tezelashvili</p>
                    <p><span className="text-slate-400">Email:</span> datatezelashvili8@gmail.com</p>
                    <p><span className="text-slate-400">Phone:</span> 123456789</p>
                </div>
            </div>

            <button
                className="inline-flex items-center justify-center rounded-full border border-emerald-400 px-6 py-2 text-sm font-semibold text-emerald-200 transition hover:bg-emerald-500/20"
                onClick={() => navigate("/")}
            >
                Back to Home
            </button>
        </section>
    )
};

export default Profile;