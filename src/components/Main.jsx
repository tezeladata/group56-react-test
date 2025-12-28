import banner from "../assets/images/banner.png"

const Main = () => {
    return (
        <section className="h-[90vh] w-screen flex items-start justify-between px-[5%] py-10">
            <div className="w-[40%] h-full flex flex-col items-start justify-start gap-10">
                <h1 className="text-6xl font-bold"><span className="font-black">Boost Your</span> Startup Business Faster</h1>
                <p className="text-sm pb-14">Pharetra blandit augue volutpat libero augue semper. Non diam neque praesent sem senectus mauris lectus a urna. Tortor pel lentesque ipsum tincidunt enim.</p>
                <p className="text-3xl font-bold linearBg1 text-white py-4 px-16 rounded-[50px] cursor-pointer shadow1 border-2 capitalize">get started</p>
            </div>

            <div className="w-[50%] h-full">
                <img src={banner} className="cursor-pointer" />
            </div>
        </section>
    )
};

export default Main;