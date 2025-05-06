import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import FindAgent from "./Components/FindAgent";
import Events from "./Components/Events";
import FAQs from "./Components/FAQs";
import Locations from "./Components/Locations";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FindAgent" element={<FindAgent />} />
        <Route path="/events" element={<Events />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/FAQs" element={<FAQs />} />
      </Routes>
    </Router>
  );
}

export default App;
