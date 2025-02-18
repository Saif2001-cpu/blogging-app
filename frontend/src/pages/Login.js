import React from "react";


function Login() {

    return (

        <form className="login-form" style={{
            margin: "50px auto", padding: "30px", maxWidth: "400px",
            backgroundColor: "#fff", borderRadius: "15px", boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)"
        }}>
            <h2>Login</h2>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
};

export default Login;