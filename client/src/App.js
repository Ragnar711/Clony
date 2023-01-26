import AddNew from "./Pages/AddNew";
import Movies from "./Pages/Movies";
import TVShows from "./Pages/TVShows";
import Animes from "./Pages/Animes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<AddNew />} />
                    <Route path="/Movies" element={<Movies />} />
                    <Route path="/TVShows" element={<TVShows />} />
                    <Route path="/Animes" element={<Animes />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
