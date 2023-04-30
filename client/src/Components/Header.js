import { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
    const navigate = useNavigate();
    const getUserName = useCallback(() => {
        if (sessionStorage.getItem("username")) {
            sessionStorage.getItem("username");
        } else {
            navigate("/");
        }
    }, [navigate]);
    const logout = () => {
        sessionStorage.clear();
        navigate("/");
    }, [navigate]);
    useEffect(() => {
        getUserName();
    }, [getUserName]);
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
