import React, { useContext } from 'react'
import { DispatchContext } from '../context/notes/NoteContext';
import { TextField, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";
import "../styles/home.css"
import useInputState from "../hooks/useInputState"

function AddNote() {

    const { dispatch } = useContext(DispatchContext)
    const [title, updateTitle, resetTitle] = useInputState("")
    const [description, updateDescription, resetDescription] = useInputState("")
    const [tag, updateTag, resetTag] = useInputState("")
    const note = { _id: "6196802dc8106674b12f15f0", title, description, tag }
    
    const handleSubmit = (evt) => {
        evt.preventDefault()
        console.log(note)
        dispatch({ type: "add", note: note })
        resetTitle()
        resetDescription()
        resetTag()
    }

    return (
        <div>
            {/* <button onClick={handleClick}>hello</button> */}
            <div className="container mt-4 addnotes" >
                <Button className="mb-4" variant="text" color="secondary" startIcon={<ArrowBackIcon />} component={Link} to="/" style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif" }}>Home</Button>
                <h2 style={{ fontWeight: "Bold" }}>Create new Note</h2>
                <p className="mb-4">Add  a new note with your info / notes</p>
                <form onSubmit={handleSubmit}>
                    <div className="title mb-4">
                        <TextField value={title} onChange={updateTitle} id="outlined-basic" color="secondary" label="Title" variant="outlined" fullWidth style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "1.1rem" }} />
                    </div>
                    <div className="description mb-4">
                        <TextField value={description} onChange={updateDescription} id="outlined-basic" color="secondary" label="Description" variant="outlined" fullWidth style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "1.1rem" }} />
                    </div>
                    <div className="tags mb-4">
                        <TextField value={tag} onChange={updateTag} id="outlined-basic" color="secondary" label="Tags" variant="outlined" fullWidth />
                    </div>
                    <Button type="submit" fullWidth size="large" className="mb-4" variant="contained" color="secondary" style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "1.1rem" }}>Add Note</Button>
                </form>
            </div>
        </div>
    )
}

export default AddNote
