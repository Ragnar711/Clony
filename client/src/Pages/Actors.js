import { useState, useEffect } from "react";
import "../styles/actors.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase-config";

const Actors = ({ setShowHeader }) => {
    const [actors, setActors] = useState([]);
    const [query, setQuery] = useState("");
    useEffect(() => {
        const fetchActors = async () => {
            try {
                const mediaCollection = collection(db, "Media");
                const data = await getDocs(mediaCollection);
                const actorCounts = {};
                data.docs.forEach((doc) => {
                    const media = doc.data();
                    ["Actor1", "Actor2", "Actor3", "Actor4"].forEach(
                        (actorKey) => {
                            const actor = media[actorKey];
                            if (actor && actor !== "") {
                                actorCounts[actor] =
                                    (actorCounts[actor] || 0) + 1;
                            }
                        }
                    );
                });
                const actorsArray = Object.entries(actorCounts).map(
                    ([actor, movies_count]) => ({
                        actor,
                        movies_count,
                    })
                );
                setActors(actorsArray);
            } catch (error) {
                console.error("Error fetching actors:", error);
            }
            setShowHeader(true);
        };
        fetchActors();
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
