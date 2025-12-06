import { useState } from "react";

const Comp1 = () => {
  const [formData, setFormData] = useState({})

  const handleChange = ({target}) => {
    setFormData(prev => ({
      ...prev,
      [target.name]: target.value
    }))
  }

  return (
    <>
      <form>
        <input type="text" name="username" placeholder="Enter username:" required onChange={handleChange} /> <br />

        <input type="email" name="email" placeholder="Enter email:" required onChange={handleChange} /> <br />

        <input type="password" name="password" placeholder="Enter password:" required onChange={handleChange} /> <br />
      </form>
    </>
  )
};

export default Comp1;