import {
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    ChakraProvider,
} from "@chakra-ui/react";
import { MdOutlineLocalMovies } from "react-icons/md";
import { RiMovie2Line } from "react-icons/ri";
import { BiMovie } from "react-icons/bi";
import "./movies.css";
import Axios from "redaxios";
import { useState, useEffect } from "react";

const Movies = ({ setShowHeader }) => {
    const [movies, setMovies] = useState([]);
    const [tvshows, setTvshows] = useState([]);
    const [animes, setAnimes] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        Axios.get("http://localhost:8080/getMovies")
            .then((response) => {
                setMovies(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
        Axios.get("http://localhost:8080/getAnimes")
            .then((response) => {
                setAnimes(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
        Axios.get("http://localhost:8080/getTVShows")
            .then((response) => {
                setTvshows(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
        setShowHeader(true);
    }, []);
    const deleteMedia = async (id) => {
        try {
            const response = await Axios.delete(
                `http://localhost:8080/deleteMedia/${id}`
            );
            const newMovies = movies.filter((movie) => movie.id !== id);
            setMovies(newMovies);
            const newTVShows = tvshows.filter((tvshow) => tvshow.id !== id);
            setTvshows(newTVShows);
            const newAnimes = animes.filter((anime) => anime.id !== id);
            setAnimes(newAnimes);
            return response.data;
        } catch (err) {
            throw new Error(err.message);
        }
    };
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Error: {error.message}</p>;
    }
    return (
        <ChakraProvider>
            <div className="moviesLayout">
                <Tabs variant="soft-rounded" colorScheme="red">
                    <TabList>
                        <Tab className="tab">
                            <BiMovie /> Movies
                        </Tab>
                        <Tab className="tab">
                            <MdOutlineLocalMovies /> Shows
                        </Tab>
                        <Tab className="tab">
                            <RiMovie2Line /> Animes
                        </Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
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
                                    {movies.map((item) => {
                                        return (
                                            <tr key={item.id}>
                                                <td>{item.Name}</td>
                                                <td>{item.Year}</td>
                                                <td>{item.Review}</td>
                                                <td>
                                                    <button
                                                        className="deleteMovie"
                                                        onClick={() => {
                                                            deleteMedia(
                                                                item.id
                                                            );
                                                        }}
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </TabPanel>
                        <TabPanel>
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
                                    {tvshows.map((item) => {
                                        return (
                                            <tr key={item.id}>
                                                <td>{item.Name}</td>
                                                <td>{item.Year}</td>
                                                <td>{item.Review}</td>
                                                <td>
                                                    <button
                                                        className="deleteMovie"
                                                        onClick={() => {
                                                            deleteMedia(
                                                                item.id
                                                            );
                                                        }}
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </TabPanel>
                        <TabPanel>
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
                                    {animes.map((item) => {
                                        return (
                                            <tr key={item.id}>
                                                <td>{item.Name}</td>
                                                <td>{item.Year}</td>
                                                <td>{item.Review}</td>
                                                <td>
                                                    <button
                                                        className="deleteMovie"
                                                        onClick={() => {
                                                            deleteMedia(
                                                                item.id
                                                            );
                                                        }}
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </div>
        </ChakraProvider>
    );
};

export default Movies;
