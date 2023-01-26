import { useState } from "react";
import Axios from "redaxios";
import { Box, TextField, Button, Rating, Typography } from "@mui/material";
import "./addNew.css";
import Header from "../Components/Header";

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
};

function AddNew() {
    const [form, setForm] = useState(initialState);
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const submitMedia = async () => {
        try {
            const res = await Axios.post(
                "http://localhost:8080/postMedia",
                form
            );
            console.log(res);
            window.location.reload();
        } catch (err) {
            console.error(err);
        }
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
                            name="Name"
                            label="Name"
                            variant="outlined"
                            onChange={handleChange}
                        />
                        <TextField
                            className="input"
                            name="Year"
                            label="Year"
                            variant="outlined"
                            onChange={handleChange}
                        />
                        <TextField
                            className="input"
                            name="MediaType"
                            label="Media Type"
                            variant="outlined"
                            onChange={handleChange}
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
                            id="outlined-basic"
                            label="Actor 3"
                            variant="outlined"
                            onChange={handleChange}
                        />
                        <TextField
                            className="input"
                            id="outlined-basic"
                            label="Actor 4"
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
        </div>
    );
}

export default AddNew;
