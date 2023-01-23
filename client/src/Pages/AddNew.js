import Header from "../Components/Header";
import "./addNew.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

function AddNew() {
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
                        />
                        <TextField
                            className="input"
                            id="outlined-basic"
                            label="Year"
                            variant="outlined"
                        />
                        <TextField
                            className="input"
                            id="outlined-basic"
                            label="Media Type"
                            variant="outlined"
                        />
                    </div>
                    <Box
                        sx={{
                            "& > legend": { mt: 2 },
                        }}
                        className="rating"
                    >
                        <Typography component="legend">Rating</Typography>
                        <Rating className="stars" name="simple-controlled" />
                    </Box>
                    <div className="director">
                        <TextField
                            className="input"
                            id="outlined-basic"
                            label="Director"
                            variant="outlined"
                        />
                    </div>
                    <div className="actors">
                        <TextField
                            className="input"
                            id="outlined-basic"
                            label="Actor 1"
                            variant="outlined"
                        />
                        <TextField
                            className="input"
                            id="outlined-basic"
                            label="Actor 2"
                            variant="outlined"
                        />
                        <TextField
                            className="input"
                            id="outlined-basic"
                            label="Actor 3"
                            variant="outlined"
                        />
                        <TextField
                            className="input"
                            id="outlined-basic"
                            label="Actor 4"
                            variant="outlined"
                        />
                    </div>
                    <Button variant="contained">Add Media</Button>
                </Box>
            </div>
        </div>
    );
}

export default AddNew;
