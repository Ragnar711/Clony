import { Box, TextField, Button, Rating, Typography } from "@mui/material";
import { useState, useEffect, useCallback } from "react";
import "../styles/addNew.css";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase-config";

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
    const mediaCollectionRef = collection(db, "Media");
    const submitMedia = async () => {
        try {
            //the form stays filled after it's submitted
            await addDoc(mediaCollectionRef, form);
        } catch (error) {
            console.log(error);
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
                    {/*Actor3 doesn't get submitted to firebase document*/}
                    <TextField
                        className="input"
                        name="Actor3"
                        label="Actor 3"
                        variant="outlined"
                        onChange={handleChange}
                    />
                    <TextField
                        className="input"
                        name="Actor4"
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
