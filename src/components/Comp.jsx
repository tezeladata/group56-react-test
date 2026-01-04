import { useForm } from "../hooks/useForm.jsx";

const Comp = () => {
    const [data, handleChange] = useForm();

    return (
        <>
            <form>
                <input type="text" name="name" placeholder="Enter name" required onChange={handleChange} />
                <input type="text" name="surname" placeholder="Enter surname" required onChange={handleChange} />
                <input type="email" name="email" placeholder="Enter email" required onChange={handleChange} />
                <input type="password" name="password" placeholder="Enter password" required onChange={handleChange} />
            </form>
        </>
    )
};

export default Comp;