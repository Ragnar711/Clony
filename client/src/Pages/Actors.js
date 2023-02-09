import { useState, useEffect } from "react";
import Axios from "redaxios";
import "./actors.css";

const Actors = ({ setShowHeader }) => {
    const [actors, setActors] = useState([]);
    useEffect(() => {
        Axios.get("http://localhost:8080/getActors").then((response) => {
            setActors(response.data);
        });
        setShowHeader(true);
    }, []);
    return (
        <div className="actorsLayout">
            <table>
                <thead>
                    <tr>
                        <th>Actor</th>
                        <th>Number of media</th>
                    </tr>
                </thead>
                <tbody>
                    {actors.map((item, key) => {
                        return (
                            <tr key={key}>
                                <td>{item.actor}</td>
                                <td>{item.movies_count}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Actors;
