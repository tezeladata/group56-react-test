import Div from "./Div.jsx"

const Members = () => {
    return (
        <section className="amore h-[35vh] w-screen py-10 flex flex-col justify-center items-center">
            <h2 className="text-4xl uppercase pb-2">our team members</h2>
            <p className="max-w-[700px] text-center pb-8">Lorem ipsum dolor Sit amet consectetur ad•pisc.ng ellt. Curabltur nec nisl odio, Mauns vehicula at nunc ld posuere.</p>

            <div className="grid grid-cols-2 gap-4 w-[60vw]">
                <Div bg="#f3e1e0" />
                <Div bg="#e2f1dc" />
                <Div bg="#fdf7e5" />
                <Div bg="#dcedf7" />
            </div>
        </section>
    )
};

export default Members