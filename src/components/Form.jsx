const Form = () => {
    const handleSubmit = e => {
        e.preventDefault();

        const result = {
            name: e.target.name.value,
            surname: e.target.surname.value,
            email: e.target.email.value,
            password: e.target.password.value
        }

        console.log(result)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter name" name="name" required /> <br />
                <input type="text" placeholder="Enter surname" name="surname" required /> <br />
                <input type="email" placeholder="Enter email" name="email" required /> <br />
                <input type="password" placeholder="Enter password" name="password" required /> <br />

                <button type="submit">Submit form</button>
            </form>
        </div>
    )
};

export default Form;