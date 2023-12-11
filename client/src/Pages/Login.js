import "../styles/Login.css";
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AiOutlineUser, AiFillLock } from "react-icons/ai";
import {
    Alert,
    AlertIcon,
    Stack,
    ChakraProvider,
    CloseButton,
} from "@chakra-ui/react";

const Login = ({ setShowHeader }) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [showAlert, setShowAlert] = useState(false);

    const login = async (e) => {
        e.preventDefault();
        try {
            const dummyUserData = {
                username: "admin",
                password: "admin",
            };

            if (
                username === dummyUserData.username &&
                password === dummyUserData.password
            ) {
                let initials = "";
                dummyUserData.username.split(" ").forEach((word) => {
                    initials += word[0].toUpperCase();
                    return initials;
                });

                sessionStorage.setItem("username", initials);
                navigate("/Home");
            } else {
                setShowAlert(true);
                setErrorMessage("Incorrect username or password");
            }
        } catch (error) {
            setShowAlert(true);
            setErrorMessage("An error occurred during login");
        }
    };

    useEffect(() => {
        setShowHeader(false);
        if (sessionStorage.getItem("username")) {
            navigate("/Home");
        }
    }, [navigate, setShowHeader]);

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
                        {errorMessage}
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
            <div className="login">
                <form
                    className="loginForm"
                    onSubmit={(e) => {
                        login(e);
                    }}
                >
                    <div className="upperIcon">
                        <AiOutlineUser color="white" size={150} />
                    </div>
                    <div className="loginInputs">
                        <div className="userName">
                            <span className="userNameIcon">
                                <AiOutlineUser color="white" size={25} />
                            </span>
                            <span className="userNameInput">
                                <input
                                    type="text"
                                    placeholder="Username"
                                    value={username}
                                    onChange={(e) => {
                                        setUsername(e.target.value);
                                    }}
                                />
                            </span>
                        </div>
                        <div className="userName">
                            <span className="userNameIcon">
                                <AiFillLock color="white" size={25} />
                            </span>
                            <span className="userNameInput">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                    }}
                                />
                            </span>
                        </div>
                        <Link className="signup" to={"/Signup"}>
                            New User? Sign Up
                        </Link>
                        <div id="container">
                            <button className="learn-more">
                                <span className="circle" aria-hidden="true">
                                    <span className="icon arrow"></span>
                                </span>
                                <span className="button-text">Login</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </ChakraProvider>
    );
};

export default Login;
