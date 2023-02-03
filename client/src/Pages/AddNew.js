import { useState } from "react";
import Axios from "redaxios";
import { Box, TextField, Button, Rating, Typography } from "@mui/material";
import "./addNew.css";

const initialState = {
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
};

function AddNew() {
    const [form, setForm] = useState(initialState);
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const submitMedia = async () => {
        try {
            await Axios.post("http://localhost:8080/postMedia", form);
            window.location.reload();
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <div className="AddNewLayout">
            <Box
                className="form"
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
                        />
                        <p className="error"></p>
                    </div>
                    <div>
                        <TextField
                            className="input"
                            name="Year"
                            label="Year"
                            variant="outlined"
                            onChange={handleChange}
                        />
                        <p className="error"></p>
                    </div>
                    <div>
                        <TextField
                            className="input"
                            name="MediaType"
                            label="Media Type"
                            variant="outlined"
                            onChange={handleChange}
                        />
                        <p className="error"></p>
                    </div>
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
                    variant="contained"
                    onClick={() => {
                        submitMedia();
                    }}
                >
                    Add Media
                </Button>
            </Box>
        </div>
    );
}

export default AddNew;
