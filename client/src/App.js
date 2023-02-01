import AddNew from "./Pages/AddNew";
import Movies from "./Pages/Movies";
import Actors from "./Pages/Actors";
import Stats from "./Pages/Stats";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<AddNew />} />
                    <Route path="/Movies" element={<Movies />} />
                    <Route path="/Actors" element={<Actors />} />
                    <Route path="/Stats" element={<Stats />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
