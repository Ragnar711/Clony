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
                Add new
            </span>
            <span
                className="nav-item"
                onClick={() => {
                    navigate("/Movies");
                }}
            >
                Movies
            </span>
            <span
                className="nav-item"
                onClick={() => {
                    navigate("/TVShows");
                }}
            >
                TV Shows
            </span>
            <span
                className="nav-item"
                onClick={() => {
                    navigate("/Animes");
                }}
            >
                Animes
            </span>
            <span className="nav-item">Actors</span>
            <span className="nav-item">Stats</span>
        </div>
    );
}

export default Header;
