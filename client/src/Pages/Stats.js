import React, { useState, useEffect } from "react";
import "./stats.css";
import Header from "../Components/Header";
import { Grid, GridItem } from "@chakra-ui/react";
import Axios from "redaxios";

const Stats = () => {
    const [moviesCount, setMoviesCount] = useState(0);
    useEffect(() => {
        Axios.get("http://localhost:8080/getMoviesCount").then((response) => {
            setMoviesCount(response.data[0].NumberOfMovies);
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
                    <GridItem
                        rowSpan={2}
                        colSpan={1}
                        bg="papayawhip"
                    ></GridItem>
                    <GridItem colSpan={2} bg="papayawhip">
                        <h3>Movies</h3>
                        <div className="movies-stats">
                            <div>
                                <h5>Overall</h5>
                                <span>{moviesCount}</span>
                            </div>
                            <div>
                                <h5>This Year</h5>
                                <span></span>
                            </div>
                        </div>
                    </GridItem>
                    <GridItem colSpan={2} bg="papayawhip">
                        <h3>TV Shows & Animes</h3>
                        <div className="movies-stats">
                            <div>
                                <h5>TV Shows</h5>
                                <span></span>
                            </div>
                            <div>
                                <h5>Animes</h5>
                                <span></span>
                            </div>
                        </div>
                    </GridItem>
                    <GridItem colSpan={4} bg="papayawhip">
                        <h3>Medias per year</h3>
                    </GridItem>
                </Grid>
            </div>
        </div>
    );
};

export default Stats;
