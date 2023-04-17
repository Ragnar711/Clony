import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/404.css";

const NotFound = ({ setShowHeader }) => {
    const navigate = useNavigate();
    useEffect(() => {
        setShowHeader(false);
    }, [setShowHeader]);
    const renderScene = (depth, children) => {
        return (
            <div className={depth} data-depth={depth}>
                <div className="content">
                    {children.map((child, index) => (
                        <span key={index} className="piece"></span>
                    ))}
                </div>
            </div>
        );
    };
    const renderScenes = () => {
        const scenes = [
            { depth: "one", children: [1, 2, 3] },
            { depth: "two", children: [4, 5, 6] },
            { depth: "three", children: [7, 8, 9] },
        ];
        return scenes.map(({ depth, children }) =>
            renderScene(depth, children)
        );
    };
    return (
        <div className="cont404">
            <section className="wrapper">
                <div className="container">
                    <div id="scene" className="scene" data-hover-only="false">
                        <div className="circle" data-depth="1.2"></div>
                        {renderScenes()}
                        <p className="p404" data-depth="0.50">
                            404
                        </p>
                        <p className="p404" data-depth="0.10">
                            404
                        </p>
                    </div>
                    <div className="text">
                        <article>
                            <p>
                                Uh oh! Looks like you got lost. <br />
                                Go back to the homepage if you dare!
                            </p>
                            <button onClick={() => navigate("/Home")}>
                                i dare!
                            </button>
                        </article>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NotFound;
