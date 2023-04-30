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
import "../styles/movies.css";
import { useState, useEffect, useCallback } from "react";
import { db } from "../config/firebase-config";
import {
    query,
    where,
    getDocs,
    deleteDoc,
    collection,
    doc,
} from "firebase/firestore";

const Movies = ({ setShowHeader }) => {
    const [movies, setMovies] = useState([]);
    const [tvshows, setTvshows] = useState([]);
    const [animes, setAnimes] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const mediaCollectionRef = collection(db, "Media");
    const fetchData = useCallback(
        async (mediaType, setData) => {
            try {
                const mediaQuery = query(
                    mediaCollectionRef,
                    where("MediaType", "==", mediaType)
                );
                const data = await getDocs(mediaQuery);
                const filteredData = data.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }));
                setData(filteredData);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        },
        [mediaCollectionRef]
    );
    useEffect(() => {
        fetchData("Movie", setMovies);
        fetchData("TV Show", setTvshows);
        fetchData("Anime", setAnimes);
        setShowHeader(true);
    }, [setShowHeader]);
    const deleteMedia = async (id) => {
        try {
            const movieDoc = doc(db, "Media", id);
            await deleteDoc(movieDoc);
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
    const MediaTable = ({ mediaItems, deleteMedia }) => (
        <div className="media_table">
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
                    {mediaItems.map((item) => (
                        <tr key={item.id}>
                            <td>{item.Name}</td>
                            <td>{item.Year}</td>
                            <td>{item.Review}</td>
                            <td>
                                <button
                                    className="deleteMovie"
                                    onClick={() => deleteMedia(item.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
    return (
        <ChakraProvider>
            <div className="moviesLayout">
                <Tabs variant="soft-rounded" colorScheme="red">
                    <TabList>
                        <Tab className="tab" color={"white"}>
                            <BiMovie /> Movies
                        </Tab>
                        <Tab className="tab" color={"white"}>
                            <MdOutlineLocalMovies /> Shows
                        </Tab>
                        <Tab className="tab" color={"white"}>
                            <RiMovie2Line /> Animes
                        </Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <MediaTable
                                mediaItems={movies}
                                deleteMedia={deleteMedia}
                            />
                        </TabPanel>
                        <TabPanel>
                            <MediaTable
                                mediaItems={tvshows}
                                deleteMedia={deleteMedia}
                            />
                        </TabPanel>
                        <TabPanel>
                            <MediaTable
                                mediaItems={animes}
                                deleteMedia={deleteMedia}
                            />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </div>
        </ChakraProvider>
    );
};

export default Movies;
