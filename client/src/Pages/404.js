import React, { useEffect } from "react";
import "./404.css";

const NotFound = ({ setShowHeader }) => {
    useEffect(() => {
        setShowHeader(false);
    }, []);
    return (
        <div
            className="notFound"
            style={{ textAlign: "center", marginTop: "100px" }}
        >
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
        </div>
    );
};

export default NotFound;
