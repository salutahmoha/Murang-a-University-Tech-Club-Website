import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/navbar";

import Home from "./Pages/Home/Home";
import Leadership from "./Pages/Leadership/Leadership";
import Tracks from "./Pages/Tracks/Tracks";
import Events from "./Pages/Events/Events";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/tracks" element={<Tracks />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
