import React, { useState, useEffect } from "react";
import AddNew from "./AddNew";

const Home = () => {
    const [canShow, setCanShow] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => setCanShow(true), 3000);
        return () => clearTimeout(timer);
    });
    return <div>{canShow ? <AddNew /> : <></>}</div>;
};

export default Home;
