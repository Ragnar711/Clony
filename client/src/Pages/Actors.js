import { useState, useEffect } from "react";
import "../styles/actors.css";
import Axios from "redaxios";

function Actors({ setShowHeader }) {
    const [actors, setActors] = useState([]);
    const [query, setQuery] = useState("");
    useEffect(() => {
        Axios.get("http://localhost:8080/getActors").then((response) => {
            setActors(response.data);
        });
        setShowHeader(true);
    }, [setShowHeader]);
    const handleQueryChange = (e) => setQuery(e.target.value);
    const filteredActors = actors.filter((actor) =>
        actor.actor.toLowerCase().includes(query.toLowerCase())
    );
    return (
        <div className="actorsLayout">
            <div className="search">
                <label htmlFor="search">Search by actor:</label>
                <input
                    type="text"
                    id="search"
                    value={query}
                    onChange={handleQueryChange}
                />
            </div>
            <div className="actors_table">
                <table>
                    <thead>
                        <tr>
                            <th>Actor</th>
                            <th>Number of media</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredActors.map((actor, key) => (
                            <tr key={key}>
                                <td>{actor.actor}</td>
                                <td>{actor.movies_count}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Actors;
