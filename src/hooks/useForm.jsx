import { useState } from "react"

export const useForm = () => {
    const [formData, setFormData] = useState({});

    const handleChange = e => {
        setFormData(prev => setFormData({
            ...prev,
            [e.target.name]: e.target.value
        }))
    };

    return [formData, handleChange]
}