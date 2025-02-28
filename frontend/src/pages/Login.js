import React from "react";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = {
                email: formData.email,
                password: formData.password,
            };

            console.log('Submitting form with data:', data);

            const response = await axios.post('http://localhost:3000/api/auth/login', data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // Store the token in local storage
            sessionStorage.setItem('token', response.data.token);
            // Redirect to the dashboard or home page
            window.location.href = '/home';

            console.log(response);
            if (response.status === 200) {
                toast.success('Login successful!');
            } else {
                toast.error('Login Failed!');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error('Login Failed!');
        }
    };

    return (

        <form className="login-form" style={{
            margin: "50px auto", padding: "30px", maxWidth: "400px", display: "flex", flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#fef", borderRadius: "15px", boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)"
        }}>

            <h2>Login</h2>

            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" name="email" className="form-control" onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" name="password" className="form-control" onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            <ToastContainer />
        </form>

    )
};

export default Login;