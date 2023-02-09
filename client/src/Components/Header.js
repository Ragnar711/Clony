import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("--");
    const getUserName = () => {
        if (sessionStorage.getItem("username")) {
            setUsername(sessionStorage.getItem("username"));
        } else {
            //TODO logout
            //TODO Alerte connectez vous 9ablement
        }
    };
    useEffect(() => {
        getUserName();
    }, []);
    return (
        <div className="navbar">
            <div className="nav-items">
                <span
                    className="nav-item"
                    onClick={() => {
                        navigate("/Home");
                    }}
                >
                    Add
                </span>
                <span
                    className="nav-item"
                    onClick={() => {
                        navigate("/Movies");
                    }}
                >
                    Medias
                </span>
                <span
                    className="nav-item"
                    onClick={() => {
                        navigate("/Actors");
                    }}
                >
                    Actors
                </span>
                <span
                    className="nav-item"
                    onClick={() => {
                        navigate("/Stats");
                    }}
                >
                    Stats
                </span>
                <span
                    className="nav-item"
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    Logout
                </span>
            </div>
            <span className="nav-icon">{username}</span>
        </div>
    );
}

export default Header;
