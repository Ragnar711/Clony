import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./404.css";

const NotFound = ({ setShowHeader }) => {
    const navigate = useNavigate();
    useEffect(() => {
        setShowHeader(false);
    }, []);
    return (
        <div className="notFound">
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <button
                className="button404"
                onClick={() => {
                    navigate("/Home");
                }}
            >
                Go Back to Home Page
            </button>
        </div>
    );
};

export default NotFound;
