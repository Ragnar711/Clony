import "../styles/addUser.css";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect, useCallback } from "react";
import { AiOutlineUser, AiFillLock, AiOutlineMail } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import Axios from "redaxios";
import {
    Alert,
    AlertIcon,
    Stack,
    ChakraProvider,
    CloseButton,
} from "@chakra-ui/react";

const AddUser = ({ setShowHeader }) => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
    });
    const [showAlert, setShowAlert] = useState(false);
    const [error, setError] = useState("");
    const handleChange = useCallback(
        (e) => {
            setForm({ ...form, [e.target.name]: e.target.value });
        },
        [form]
    );
    const submitUser = async (e) => {
        e.preventDefault();
        try {
            await Axios.post("http://localhost:8080/postUser", form).then(
                () => {
                    navigate("/");
                }
            );
        } catch (err) {
            setError(err.data.message);
            setShowAlert(true);
        }
    };
    useEffect(() => {
        setShowHeader(false);
    }, [setShowHeader]);
    return (
        <ChakraProvider>
            {showAlert ? (
                <Stack spacing={3}>
                    <Alert
                        status="error"
                        position="fixed"
                        zIndex="10"
                        variant="left-accent"
                        width="50%"
                        marginLeft="25%"
                        marginTop={10}
                    >
                        <AlertIcon />
                        {error}
                        <CloseButton
                            position="absolute"
                            right="8px"
                            top="8px"
                            onClick={() => {
                                setShowAlert(false);
                            }}
                        />
                    </Alert>
                </Stack>
            ) : (
                ""
            )}
            <div className="addUser">
                <form
                    className="addUserForm"
                    onSubmit={(e) => {
                        submitUser(e);
                    }}
                >
                    <span
                        id="goBack"
                        onClick={() => {
                            navigate("/");
                        }}
                    >
                        <BiArrowBack size={50} color="white" />
                    </span>
                    <div className="addUserInputs">
                        <div className="userName">
                            <span className="userNameIcon">
                                <AiOutlineUser color="white" size={25} />
                            </span>
                            <span className="userNameInput">
                                <input
                                    type="text"
                                    placeholder="Username"
                                    name="username"
                                    onChange={handleChange}
                                    required
                                />
                            </span>
                        </div>
                        <div className="userName">
                            <span className="userNameIcon">
                                <AiOutlineMail color="white" size={25} />
                            </span>
                            <span className="userNameInput">
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    onChange={handleChange}
                                />
                            </span>
                        </div>
                        <div className="password">
                            <div>
                                <span className="userNameIcon">
                                    <AiFillLock color="white" size={25} />
                                </span>
                                <span className="userNameInput">
                                    <input
                                        id="password"
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        onChange={handleChange}
                                        required
                                    />
                                </span>
                            </div>
                        </div>
                        <div id="container">
                            <button className="learn-more">
                                <span className="circle" aria-hidden="true">
                                    <span className="icon arrow"></span>
                                </span>
                                <span className="button-text">Signup</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </ChakraProvider>
    );
};

export default AddUser;
