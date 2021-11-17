import Navbar from "./components/Navbar";
import { Routes, Route, } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import { NoteProvider } from "./context/notes/NoteContext";

function App() {
  return (
    <>
      <NoteProvider>
        <Navbar />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/about" index element={<About />} />
          <Route path="/" index element={<Home />} />
        </Routes>
      </NoteProvider>
    </>
  );
}

export default App;
