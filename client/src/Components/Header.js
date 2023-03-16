import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
    const navigate = useNavigate();
    const getUserName = () => {
        if (sessionStorage.getItem("username")) {
            sessionStorage.getItem("username");
        } else {
            navigate("/");
        }
    };
    const logout = () => {
        sessionStorage.clear();
        navigate("/");
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
                        logout();
                    }}
                >
                    Logout
                </span>
            </div>
        </div>
    );
}

export default Header;
