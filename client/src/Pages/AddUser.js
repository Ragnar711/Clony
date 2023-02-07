import "./addUser.css";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineUser, AiFillLock, AiOutlineMail } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";

const AddUser = ({ setShowHeader }) => {
    const navigate = useNavigate();
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
                        navigate("/Login");
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
                            <input type="text" placeholder="Username" />
                        </span>
                    </div>
                    <div className="userName">
                        <span className="userNameIcon">
                            <AiOutlineMail color="white" size={25} />
                        </span>
                        <span className="userNameInput">
                            <input type="text" placeholder="Email" />
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
                    <button className="signupButton">Sign Up</button>
                </div>
            </form>
        </div>
    );
};

export default AddUser;
