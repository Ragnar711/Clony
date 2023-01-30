import AddNew from "./Pages/AddNew";
import Movies from "./Pages/Movies";
import Actors from "./Pages/Actors";
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
                </Routes>
            </Router>
        </div>
    );
}

export default App;
