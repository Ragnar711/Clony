import AddNew from "./Pages/AddNew";
import Movies from "./Pages/Movies";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<AddNew />} />
                    <Route path="/Movies" element={<Movies />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
