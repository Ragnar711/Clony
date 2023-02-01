import React, { useState, useEffect } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";
import "./stats.css";
import Header from "../Components/Header";
import { Grid, GridItem } from "@chakra-ui/react";
import Axios from "redaxios";

const chartData = [
    {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: "Page C",
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: "Page D",
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: "Page E",
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: "Page F",
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: "Page G",
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

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
        <div className="stats">
            <Header />
            <div className="stats-container">
                <h1>Statistics</h1>
                <Grid
                    h="200px"
                    templateRows="repeat(2, 1fr)"
                    templateColumns="repeat(5, 1fr)"
                    gap={4}
                >
                    <GridItem rowSpan={2} colSpan={1} bg="papayawhip">
                        <h3>Movies per genre</h3>
                    </GridItem>
                    <GridItem colSpan={2} bg="papayawhip">
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
                    </GridItem>
                    <GridItem colSpan={2} bg="papayawhip">
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
                    </GridItem>
                    <GridItem colSpan={4} bg="papayawhip">
                        <h3>Medias per year</h3>
                        <LineChart
                            width={500}
                            height={300}
                            data={chartData}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line
                                type="monotone"
                                dataKey="pv"
                                stroke="red"
                                activeDot={{ r: 4 }}
                            />
                            <Line
                                type="monotone"
                                dataKey="uv"
                                stroke="blue"
                                activeDot={{ r: 4 }}
                            />
                            <Line
                                type="monotone"
                                dataKey="amt"
                                stroke="green"
                                activeDot={{ r: 4 }}
                            />
                        </LineChart>
                    </GridItem>
                </Grid>
            </div>
        </div>
    );
};

export default Stats;
