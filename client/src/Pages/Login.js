import "./Login.css";
import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AiOutlineUser, AiFillLock } from "react-icons/ai";

const Login = ({ setShowHeader }) => {
    const navigate = useNavigate();
    useEffect(() => setShowHeader(false), []);
    return (
        <div className="login">
            <form className="loginForm">
                <div className="upperIcon">
                    <AiOutlineUser color="white" size={200} />
                </div>
                <div className="loginInputs">
                    <div className="userName">
                        <span className="userNameIcon">
                            <AiOutlineUser color="white" size={25} />
                        </span>
                        <span className="userNameInput">
                            <input type="text" placeholder="Username" />
                        </span>
                    </div>
                    <div className="userName">
                        <span className="userNameIcon">
                            <AiFillLock color="white" size={25} />
                        </span>
                        <span className="userNameInput">
                            <input type="text" placeholder="Password" />
                        </span>
                    </div>
                    <Link className="signup" to={"/AddUser"}>
                        New User? Sign Up
                    </Link>
                </div>
                <button
                    className="loginButton"
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    Login
                </button>
                <div id="shadow"></div>
            </form>
        </div>
    );
};

export default Login;
