import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/navbar";

import Home from "./Components/Pages/Home/Home";
import Leadership from "./Components/Pages/Leadership/Leadership";
import Tracks from "./Components/Pages/Tracks/Tracks";
import Events from "./Components/Pages/Events/Events";

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
