import Header from "../Components/Header";
import "./movies.css";
import Axios from "redaxios";
import { useState, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const Movies = () => {
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
    }, []);
    useEffect(() => {
        Axios.get("http://localhost:8080/getAnimes")
            .then((response) => {
                setAnimes(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);
    useEffect(() => {
        Axios.get("http://localhost:8080/getTVShows")
            .then((response) => {
                setTvshows(response.data);
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
        <ChakraProvider>
            <div className="movies">
                <Header />
                <div className="moviesContainer">
                    <Tabs variant="soft-rounded" colorScheme="green">
                        <TabList>
                            <Tab className="tab">Movies</Tab>
                            <Tab className="tab">TV Shows</Tab>
                            <Tab className="tab">Animes</Tab>
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
                                                        <button className="deleteMovie">
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
                                                        <button className="deleteMovie">
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
                                                        <button className="deleteMovie">
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
            </div>
        </ChakraProvider>
    );
};

export default Movies;
