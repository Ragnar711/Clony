import "./Header.css";
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    return (
        <div className="navbar">
            <span
                className="nav-item"
                onClick={() => {
                    navigate("/");
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
        </div>
    );
}

export default Header;
