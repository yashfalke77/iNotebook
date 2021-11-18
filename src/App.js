import Navbar from "./components/Navbar";
import { Routes, Route, } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import { NoteProvider } from "./context/notes/NoteContext";
import Alertss from "./components/Alertss";
import AddNote from "./components/AddNote";

function App() {
  return (
    <>
      <NoteProvider>
        <Navbar />
        <Alertss message="This is amazing error" />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/about" index element={<About />} />
          <Route path="/" index element={<Home />} />
          <Route path="/new" index element={<AddNote />} />
        </Routes>
      </NoteProvider>
    </>
  );
}

export default App;
