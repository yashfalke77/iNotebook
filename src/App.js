import { Routes, Route, } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import { NoteProvider } from "./context/notes/NoteContext";
import { AlertProvider } from "./context/AlertContext";
import AddNote from "./components/AddNote";
import PageNotFound from "./components/PageNotFound";
import Login from "./components/Login";
import Register from "./components/Register";
import FormValidations from "./components/FormValidations";

function App() {

  return (
    <>
      <NoteProvider>
        <AlertProvider>
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/about" index element={<About />} />
            <Route path="/new" index element={<AddNote />} />
            <Route path="/register" index element={<Register />} />
            <Route path="/login" index element={<Login />} />
            <Route path="/formV" index element={<FormValidations />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </AlertProvider>
      </NoteProvider>
    </>
  );
}

export default App;
