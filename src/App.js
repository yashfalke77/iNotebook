import Navbar from "./components/Navbar";
import { Routes, Route,  } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/about" index element={<About />} />
      <Route path="/" index element={<Home />} />
    </Routes>
    </>
  );
}

export default App;
