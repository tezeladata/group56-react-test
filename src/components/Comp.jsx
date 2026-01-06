import { useContext } from "react";
import { MyContext } from "../context/MyContext";

const Comp = () => {
    // context-ში გაზიარებული ინფორმაცია გადმოვიტანოთ ამ კომპონენტში
    // ვიყენებთ useContext კაუჭს და მას გადავცემთ ჩვენს კონტექსტს
    const info = useContext(MyContext)
    console.log(`I component: ${info}`)

    return (
        <>
        
        </>
    )
};

export default Comp;