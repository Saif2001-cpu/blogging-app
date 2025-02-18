import React from "react";
import axios from "axios";
import { useState } from "react";

const Register = () => {

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        image: null
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'image') {
            setFormData({ ...formData, image: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('username', formData.username);
        data.append('email', formData.email);
        data.append('password', formData.password);
        data.append('image', formData.image);

        try {
            const response = await axios.post('http://localhost:3000/api/auth/register', data);

            const result = response.data;

            console.log(result);

            if (response.status === 200) {
                alert('Registration successful!');
            }

        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Failed to submit form.');
        }
    };

    return (

        <form className="register-form" onSubmit={handleSubmit} style={{
            margin: "50px auto", padding: "30px", maxWidth: "400px",
            backgroundColor: "#fff", borderRadius: "15px", boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)"
        }} >
            <div className="mb-3">
                <label  >User name</label>
                <input type="text" name="username" className="form-control" onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label >Email address</label>
                <input type="email" name="email" className="form-control" onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label  >Password</label>
                <input type="password" name="password" className="form-control" onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label >Upload Image</label>
                <input type="file" name="image" className="form-control" onChange={handleChange} />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>

    );
}

export default Register;