import { Routes, Route, } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import { NoteProvider } from "./context/notes/NoteContext";
import Alertss from "./components/Alertss";
import AddNote from "./components/AddNote";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <>
      <NoteProvider>
        {/* 
        <Alertss message="This is amazing error" /> */}
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/about" index element={<About />} />
          <Route path="/new" index element={<AddNote />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </NoteProvider>
    </>
  );
}

export default App;
