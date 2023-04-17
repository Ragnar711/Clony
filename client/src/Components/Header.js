import { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
    const navigate = useNavigate();
    const getUserName = useCallback(() => {
        const username = sessionStorage.getItem("username");
        if (!username) {
            navigate("/");
        }
        return username;
    }, [navigate]);
    const logout = useCallback(() => {
        sessionStorage.clear();
        navigate("/");
    }, [navigate]);
    useEffect(() => {
        getUserName();
    }, [getUserName]);
    const navItems = [
        { path: "/Home", label: "Add" },
        { path: "/Movies", label: "Medias" },
        { path: "/Actors", label: "Actors" },
        { path: "/Stats", label: "Stats" },
        { onClick: logout, label: "Logout" },
    ];
    return (
        <div className="navbar">
            <div className="nav-items">
                {navItems.map((item) => (
                    <span
                        key={item.path || item.label}
                        className="nav-item"
                        onClick={item.onClick || (() => navigate(item.path))}
                    >
                        {item.label}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default Header;
