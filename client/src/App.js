import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./App.css";

const Header = lazy(() => import("./Components/Header"));
const AddNew = lazy(() => import("./Pages/AddNew"));
const Movies = lazy(() => import("./Pages/Movies"));
const Actors = lazy(() => import("./Pages/Actors"));
const Stats = lazy(() => import("./Pages/Stats"));

function App() {
    return (
        <div className="App">
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                    <Header />
                    <Routes>
                        <Route path="/" element={<AddNew />} />
                        <Route path="/Movies" element={<Movies />} />
                        <Route path="/Actors" element={<Actors />} />
                        <Route path="/Stats" element={<Stats />} />
                    </Routes>
                </Suspense>
            </Router>
        </div>
    );
}

export default App;
