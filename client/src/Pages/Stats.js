import { useState, useEffect } from "react";
import Axios from "redaxios";
import "./stats.css";

const Stats = () => {
    const [moviesCount, setMoviesCount] = useState(0);
    const [yearlyMoviesCount, setYearlyMoviesCount] = useState(0);
    const [tvShowsCount, setTVShowsCount] = useState(0);
    const [animesCount, setAnimesCount] = useState(0);
    useEffect(() => {
        Axios.get("http://localhost:8080/getMoviesCount").then((response) => {
            setMoviesCount(response.data[0].NumberOfMovies);
        });
        Axios.get("http://localhost:8080/getYearlyMoviesCount").then(
            (response) => {
                setYearlyMoviesCount(response.data[0].YearlyNumberOfMovies);
            }
        );
        Axios.get("http://localhost:8080/getTVShowsCount").then((response) => {
            setTVShowsCount(response.data[0].numberOfTVShows);
        });
        Axios.get("http://localhost:8080/getAnimesCount").then((response) => {
            setAnimesCount(response.data[0].numberOfAnimes);
        });
    }, []);
    return (
        <div className="stats-container">
            <h1>Statistics</h1>
            <div className="container">
                <div className="moviesGrid">
                    <h3>Movies</h3>
                    <div className="movies-stats">
                        <div>
                            <h5>Overall</h5>
                            <span>{moviesCount}</span>
                        </div>
                        <div>
                            <h5>This Year</h5>
                            <span>{yearlyMoviesCount}</span>
                        </div>
                    </div>
                </div>
                <div className="tvshowsGrid">
                    {" "}
                    <h3>TV Shows & Animes</h3>
                    <div className="movies-stats">
                        <div>
                            <h5>TV Shows</h5>
                            <span>{tvShowsCount}</span>
                        </div>
                        <div>
                            <h5>Animes</h5>
                            <span>{animesCount}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;
