import Header from "../Components/Header";
import "./movies.css";

const Movies = () => {
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
                    {/*<tbody>
                        {data.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.Name}</td>
                                    <td>{item.Year}</td>
                                    <td>{item.Review}</td>
                                    <td>
                                        <button
                                            className="deleteMovie"
                                            onClick={() => {
                                                deleteMovie(item.id);
                                            }}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>*/}
                </table>
            </div>
        </div>
    );
};

export default Movies;
