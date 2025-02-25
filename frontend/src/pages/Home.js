import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import PublishArticle from "./Publish.article.js";
import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


import './Home.css';

function Home() {

    const [showEditor, setShowEditor] = useState(false);

    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        fetch("http://localhost:3000/api/auth/image")
            .then((res) => res.json())
            .then((data) => setImageUrl(data.url))
            .catch((err) => console.error("Error:", err));
    }, []);

    const navigate = useNavigate();

    const handlelogout = () => {
        sessionStorage.removeItem('token');
        navigate('/login');
    }


    return (

        <div className="Home">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-2">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-outline-primary" onClick={() => setShowEditor(!showEditor)}>
                                    Publish Article
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-outline-danger" onClick={handlelogout}>
                                    Logout
                                </button>
                            </li>
                        </ul>
                        <div className="p-4 text-center">
                            {imageUrl ? <img src={imageUrl} alt="Fetched"
                                className="w-64 rounded-md shadow-lg" />
                                : <p>Loading...</p>}
                        </div>
                    </div>
                </div>
            </nav>
            <div>{showEditor ? (<PublishArticle />) : (null)}</div>
        </div>
    );
}

export default Home;