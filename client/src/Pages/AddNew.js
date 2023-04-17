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
            await addDoc(mediaCollectionRef, form);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        setShowHeader(true);
    }, [setShowHeader]);
    const renderTextField = (name, label) => (
        <TextField
            className="input"
            name={name}
            label={label}
            variant="outlined"
            onChange={handleChange}
            required={["Name", "Year"].includes(name)}
        />
    );
    const renderActorsAndGenres = () =>
        ["Actor1", "Actor2", "Actor3", "Actor4", "Genre1", "Genre2"].map(
            (name) =>
                renderTextField(
                    name,
                    `${name.replace(/\d+$/, "")} ${name.match(/\d+$/)}`
                )
        );
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
                    {renderTextField("Name", "Name")}
                    {renderTextField("Year", "Year")}
                    {renderTextField("MediaType", "Media Type")}
                </div>
                <Box sx={{ "& > legend": { mt: 2 } }} className="rating">
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
                    {renderTextField("Director", "Director")}
                </div>
                <div className="actors">{renderActorsAndGenres()}</div>
                <Button onClick={submitMedia} className="custom-btn btn-add">
                    Add Media
                </Button>
            </Box>
        </div>
    );
}

export default AddNew;
