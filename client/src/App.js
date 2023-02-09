import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy, useState } from "react";
import "./App.css";

const Header = lazy(() => import("./Components/Header"));
const AddUser = lazy(() => import("./Pages/AddUser"));
const AddNew = lazy(() => import("./Pages/AddNew"));
const Movies = lazy(() => import("./Pages/Movies"));
const Actors = lazy(() => import("./Pages/Actors"));
const Stats = lazy(() => import("./Pages/Stats"));
const Login = lazy(() => import("./Pages/Login"));
const Unfound = lazy(() => import("./Pages/404"));

function App() {
    const [showHeader, setShowHeader] = useState(true);
    return (
        <div className="App">
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                    {showHeader ? <Header /> : ""}
                    <Routes>
                        <Route
                            path="/"
                            element={<Login setShowHeader={setShowHeader} />}
                        />
                        <Route
                            path="/Signup"
                            element={<AddUser setShowHeader={setShowHeader} />}
                        />
                        <Route
                            path="/Home"
                            element={<AddNew setShowHeader={setShowHeader} />}
                        />
                        <Route
                            path="/Movies"
                            element={<Movies setShowHeader={setShowHeader} />}
                        />
                        <Route
                            path="/Actors"
                            element={<Actors setShowHeader={setShowHeader} />}
                        />
                        <Route
                            path="/Stats"
                            element={<Stats setShowHeader={setShowHeader} />}
                        />
                        <Route
                            path="*"
                            element={<Unfound setShowHeader={setShowHeader} />}
                        />
                    </Routes>
                </Suspense>
            </Router>
        </div>
    );
}

export default App;
