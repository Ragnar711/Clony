import { useState, useEffect } from "react";
import Axios from "redaxios";
import "./stats.css";
import CanvasJSReact from "../canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Stats = ({ setShowHeader }) => {
    const [moviesCount, setMoviesCount] = useState(0);
    const [yearlyMoviesCount, setYearlyMoviesCount] = useState(0);
    const [tvShowsCount, setTVShowsCount] = useState(0);
    const [animesCount, setAnimesCount] = useState(0);
    const [directors, setDirectors] = useState([]);
    const [genres, setGenres] = useState([]);
    useEffect(() => {
        Axios.get("http://localhost:8080/getMoviesCount").then((response) => {
            setMoviesCount(response.data);
        });
        Axios.get("http://localhost:8080/getYearlyMoviesCount").then(
            (response) => {
                setYearlyMoviesCount(response.data[0].YearlyNumberOfMovies);
            }
        );
        Axios.get("http://localhost:8080/getTVShowsCount").then((response) => {
            setTVShowsCount(response.data);
        });
        Axios.get("http://localhost:8080/getAnimesCount").then((response) => {
            setAnimesCount(response.data);
        });
        Axios.get("http://localhost:8080/getDirectors").then((response) => {
            setDirectors(response.data);
        });
        Axios.get("http://localhost:8080/getGenres").then((response) => {
            setGenres(response.data);
        });
        setShowHeader(true);
    }, []);
    const options = {
        exportEnabled: true,
        animationEnabled: true,
        title: {
            text: "Genres",
        },
        data: [
            {
                type: "pie",
                startAngle: 75,
                toolTipContent: "<b>{label}</b>: {y}",
                showInLegend: "true",
                legendText: "{label}",
                indexLabelFontSize: 16,
                indexLabel: "{label} - {y}",
                dataPoints: genres,
            },
        ],
    };
    return (
        <div className="stats-container">
            <div id="nums" className="moviesGrid">
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
            <div id="dirc" className="directorsGrid">
                <table>
                    <thead>
                        <tr>
                            <th>Director</th>
                            <th>Number of Medias</th>
                        </tr>
                    </thead>
                    <tbody>
                        {directors.map((item, key) => {
                            return (
                                <tr key={key}>
                                    <td>{item.director}</td>
                                    <td>{item.movies_count}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <div className="pieGrid">
                <CanvasJSChart options={options} />
            </div>
        </div>
    );
};

export default Stats;
