import "./Login.css";
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AiOutlineUser, AiFillLock } from "react-icons/ai";
import Axios from "redaxios";

const Login = ({ setShowHeader }) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const login = async (e) => {
        e.preventDefault();
        try {
            const response = await Axios.put("http://localhost:8080/putUser", {
                username,
                password,
            });
            console.log(response.data);
            navigate("/Home");
        } catch (error) {
            console.log(error);
            setErrorMessage("Incorrect email or password");
        }
    };
    useEffect(() => setShowHeader(false), []);
    return (
        <div className="login">
            <form
                className="loginForm"
                onSubmit={(e) => {
                    login(e);
                }}
            >
                <div className="upperIcon">
                    <AiOutlineUser color="white" size={200} />
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
                </div>
                {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
                <button className="loginButton">Login</button>
                <div id="shadow"></div>
            </form>
        </div>
    );
};

export default Login;
