import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import FindAgent from "./Components/FindAgent";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FindAgent" element={<FindAgent />} />
      </Routes>
    </Router>
  );
}

export default App;
