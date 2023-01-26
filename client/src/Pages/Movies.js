import Header from "../Components/Header";
import "./movies.css";
import Axios from "redaxios";
import { useState, useEffect } from "react";

const Movies = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        Axios.get("http://localhost:8080/getMovie")
            .then((response) => {
                setData(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Error: {error.message}</p>;
    }
    return (
        <div className="movies">
            <Header />
            <div className="moviesContainer">
                <h1>Movies</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Year</th>
                            <th>Rating</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.Name}</td>
                                    <td>{item.Year}</td>
                                    <td>{item.Review}</td>
                                    <td>
                                        <button className="deleteMovie">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Movies;
