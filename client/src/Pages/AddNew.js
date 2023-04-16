import { Box, TextField, Button, Rating, Typography } from "@mui/material";
import { useState, useEffect, useCallback } from "react";
import Axios from "redaxios";
import "../styles/addNew.css";

function AddNew({ setShowHeader }) {
    const [form, setForm] = useState({
        Name: "",
        Year: 0,
        MediaType: "",
        Review: 0,
        Director: "",
        Actor1: "",
        Actor2: "",
        Actor3: "",
        Actor4: "",
        Genre1: "",
        Genre2: "",
    });
    const handleChange = useCallback(
        (e) => {
            setForm({ ...form, [e.target.name]: e.target.value });
        },
        [form]
    );
    const submitMedia = async () => {
        try {
            const mediaTypes = ["Movie", "TV Show", "Anime"];
            if (!mediaTypes.includes(form.MediaType)) {
                return window.alert("Wrong media type");
            }
            if (form.Year < 1900 || form.Year > new Date().getFullYear()) {
                return window.alert("Please Enter a Valid Year");
            }
            await Axios.post("http://localhost:8080/postMedia", form);
            window.location.reload();
        } catch (err) {
            if (err.status === 400) {
                window.alert(err.data.message);
            } else if (err.status >= 500) {
                window.alert("Internal error");
            } else {
                window.alert("Something went wrong");
            }
        }
    };
    useEffect(() => {
        setShowHeader(true);
    }, [setShowHeader]);
    return (
        <div className="AddNewLayout">
            <Box
                className="card"
                component="form"
                sx={{
                    "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
            >
                <h1 className="addNewHeader">Add New Media</h1>
                <div className="firstRow">
                    <div>
                        <TextField
                            className="input"
                            name="Name"
                            label="Name"
                            variant="outlined"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <TextField
                            className="input"
                            name="Year"
                            label="Year"
                            variant="outlined"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <TextField
                            className="input"
                            name="MediaType"
                            label="Media Type"
                            variant="outlined"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <Box
                    sx={{
                        "& > legend": { mt: 2 },
                    }}
                    className="rating"
                >
                    <Typography component="legend" className="ratingLegend">
                        Rating
                    </Typography>
                    <Rating
                        className="stars"
                        name="Review"
                        onChange={handleChange}
                    />
                </Box>
                <div className="director">
                    <TextField
                        className="input"
                        name="Director"
                        label="Director"
                        variant="outlined"
                        onChange={handleChange}
                    />
                </div>
                <div className="actors">
                    <TextField
                        className="input"
                        name="Actor1"
                        label="Actor 1"
                        variant="outlined"
                        onChange={handleChange}
                    />
                    <TextField
                        className="input"
                        name="Actor2"
                        label="Actor 2"
                        variant="outlined"
                        onChange={handleChange}
                    />
                    <TextField
                        className="input"
                        name="Actor3"
                        label="Actor 3"
                        variant="outlined"
                        onChange={handleChange}
                    />
                    <TextField
                        className="input"
                        name="Actor3"
                        label="Actor 4"
                        variant="outlined"
                        onChange={handleChange}
                    />
                </div>
                <div className="actors">
                    <TextField
                        className="input"
                        name="Genre1"
                        label="Genre 1"
                        variant="outlined"
                        onChange={handleChange}
                    />
                    <TextField
                        className="input"
                        name="Genre2"
                        label="Genre 2"
                        variant="outlined"
                        onChange={handleChange}
                    />
                </div>
                <Button
                    onClick={() => {
                        submitMedia();
                    }}
                    className="custom-btn btn-add"
                >
                    Add Media
                </Button>
            </Box>
        </div>
    );
}

export default AddNew;
