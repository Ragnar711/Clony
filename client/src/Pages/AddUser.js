import "../styles/addUser.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { AiOutlineUser, AiFillLock, AiOutlineMail } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
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
    const handleChange = useCallback(
        (e) => {
            setForm({ ...form, [e.target.name]: e.target.value });
        },
        [form]
    );
    useEffect(() => {
        setShowHeader(false);
    }, [setShowHeader]);
    return (
        <ChakraProvider>
            {showAlert && (
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
                        {renderInput(
                            "username",
                            "text",
                            "Username",
                            AiOutlineUser
                        )}
                        {renderInput("email", "email", "Email", AiOutlineMail)}
                        {renderInput(
                            "password",
                            "password",
                            "Password",
                            AiFillLock
                        )}
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
