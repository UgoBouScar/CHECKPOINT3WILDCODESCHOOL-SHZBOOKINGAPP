import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Artistes from "./pages/Artists";
import OneArtist from "./pages/OneArtist";
import Releases from "./pages/Releases";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="flex justify-center items-start" />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artistes" element={<Artistes />} />
        <Route path="/artistes/:id" element={<OneArtist />} />
        <Route path="/releases" element={<Releases />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
