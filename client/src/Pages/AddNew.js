import { useState } from "react";
import Axios from "axios";
import Header from "../Components/Header";
import "./addNew.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

function AddNew() {
    const [Name, setName] = useState("");
    const [Year, setYear] = useState(0);
    const [Review, setReview] = useState(0);
    const [Actor1, setAcotor1] = useState("");
    const [Actor2, setAcotor2] = useState("");
    const [Actor3, setAcotor3] = useState("");
    const [Actor4, setAcotor4] = useState("");
    const [Director, setDirector] = useState("");
    const [MediaType, setMediaType] = useState("");
    const submitMedia = () => {
        Axios.post("http://localhost:5000/postMedia", {
            Name: Name,
            Year: Year,
            MediaType: MediaType,
            Review: Review,
            Actor1: Actor1,
            Actor2: Actor2,
            Actor3: Actor3,
            Actor4: Actor4,
            Director: Director,
        }).then((res) => {
            window.location.reload();
            console.log(res);
        });
    };
    return (
        <div className="AddNewHeader">
            <Header />
            <div className="AddNew">
                <Box
                    className="form"
                    component="form"
                    sx={{
                        "& > :not(style)": { m: 1, width: "25ch" },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <h1>Add New Media</h1>
                    <div className="firstRow">
                        <TextField
                            className="input"
                            id="outlined-basic"
                            label="Name"
                            variant="outlined"
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        />
                        <TextField
                            className="input"
                            id="outlined-basic"
                            label="Year"
                            variant="outlined"
                            onChange={(e) => {
                                setYear(e.target.value);
                            }}
                        />
                        <TextField
                            className="input"
                            id="outlined-basic"
                            label="Media Type"
                            variant="outlined"
                            onChange={(e) => {
                                setMediaType(e.target.value);
                            }}
                        />
                    </div>
                    <Box
                        sx={{
                            "& > legend": { mt: 2 },
                        }}
                        className="rating"
                    >
                        <Typography component="legend">Rating</Typography>
                        <Rating
                            className="stars"
                            name="simple-controlled"
                            onChange={(e) => {
                                setReview(e.target.value);
                            }}
                        />
                    </Box>
                    <div className="director">
                        <TextField
                            className="input"
                            id="outlined-basic"
                            label="Director"
                            variant="outlined"
                            onChange={(e) => {
                                setDirector(e.target.value);
                            }}
                        />
                    </div>
                    <div className="actors">
                        <TextField
                            className="input"
                            id="outlined-basic"
                            label="Actor 1"
                            variant="outlined"
                            onChange={(e) => {
                                setAcotor1(e.target.value);
                            }}
                        />
                        <TextField
                            className="input"
                            id="outlined-basic"
                            label="Actor 2"
                            variant="outlined"
                            onChange={(e) => {
                                setAcotor2(e.target.value);
                            }}
                        />
                        <TextField
                            className="input"
                            id="outlined-basic"
                            label="Actor 3"
                            variant="outlined"
                            onChange={(e) => {
                                setAcotor3(e.target.value);
                            }}
                        />
                        <TextField
                            className="input"
                            id="outlined-basic"
                            label="Actor 4"
                            variant="outlined"
                            onChange={(e) => {
                                setAcotor4(e.target.value);
                            }}
                        />
                    </div>
                    <Button
                        variant="contained"
                        onClick={() => {
                            submitMedia();
                        }}
                    >
                        Add Media
                    </Button>
                </Box>
            </div>
        </div>
    );
}

export default AddNew;
