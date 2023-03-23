import { useState, useEffect } from "react";
import Axios from "redaxios";
import "../styles/actors.css";

const Actors = ({ setShowHeader }) => {
    const [actors, setActors] = useState([]);
    const [query, setQuery] = useState("");
    useEffect(() => {
        Axios.get("http://localhost:8080/getActors").then((response) => {
            setActors(response.data);
        });
        setShowHeader(true);
    }, []);
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
                        {filteredActors.map((actor, key) => {
                            return (
                                <tr key={key}>
                                    <td>{actor.actor}</td>
                                    <td>{actor.movies_count}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Actors;
