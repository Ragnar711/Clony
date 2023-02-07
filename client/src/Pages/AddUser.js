import "./addUser.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
    AiOutlineUser,
    AiFillLock,
    AiOutlineMail,
    AiOutlineInfoCircle,
} from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import Axios from "redaxios";

const initialState = {
    username: "",
    email: "",
    password: "",
};

const AddUser = ({ setShowHeader }) => {
    const navigate = useNavigate();
    const [form, setForm] = useState(initialState);
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const submitUser = async () => {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const emailRegex =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z0-9]+\.)+[a-zA-Z]{2,}))$/;
        const passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!emailRegex.test(email) || !passwordRegex.test(password)) {
            return alert("Invalid email address or password");
        }
        try {
            await Axios.post("http://localhost:8080/postUser", form).then(
                () => {
                    alert("User added successfully");
                    window.location.reload();
                }
            );
        } catch (err) {
            console.error(err);
        }
    };
    useEffect(() => {
        setShowHeader(false);
    }, []);
    return (
        <div className="addUser">
            <h1>Sign Up</h1>
            <form className="addUserForm">
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
                                />
                            </span>
                        </div>
                        <div className="tooltip">
                            <AiOutlineInfoCircle size={30} />
                            <span className="tooltiptext">
                                Password must be at least 8 characters long,
                                contain upper and lower case letters, and at
                                least one number and one special character
                            </span>
                        </div>
                    </div>
                    <button
                        className="signupButton"
                        onClick={() => {
                            submitUser();
                        }}
                    >
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddUser;
