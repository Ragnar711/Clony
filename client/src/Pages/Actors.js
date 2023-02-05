import { useState, useEffect } from "react";
import Axios from "redaxios";
import "./actors.css";

const Actors = () => {
    const [actors, setActors] = useState([]);
    useEffect(() => {
        Axios.get("http://localhost:8080/getActors")
            .then((response) => {
                setActors(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <div className="actorsLayout">
            <table>
                <thead>
                    <tr>
                        <th>Actors</th>
                        <th>Number of media</th>
                    </tr>
                </thead>
                <tbody>
                    {actors.map((item) => {
                        return (
                            <tr>
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
