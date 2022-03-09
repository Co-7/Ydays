import Navbar from '../components/Navbar'
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import PlayerVideo from "./Player";

function App() {
  return (
    <div className="App">
        <Router>
            <Navbar />
            <Routes>
                <Route path="/"/>
                <Route path="/player" element={<PlayerVideo/>}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
