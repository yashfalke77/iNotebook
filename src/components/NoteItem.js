import React, { useContext, useState } from 'react'
import { IconButton } from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditIcon from '@mui/icons-material/Edit';
import { NoteContext } from '../context/notes/NoteContext';
import { Dialog, Button, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import useInputState from "../hooks/useInputState"


function NoteItem({ note }) {

    const { remove } = useContext(NoteContext)

    const [open, setOpen] = useState(false)

    const [title, updateTitle, resetTitle] = useInputState(note.title)
    const [description, updateDescription, resetDescription] = useInputState(note.description)
    const [tag, updateTag, resetTag] = useInputState(note.tag)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (evt) => {
        evt.preventDefault()
        console.log(note)
        // add(note)
        resetTitle()
        resetDescription()
        resetTag()
    }

    return (
        <div className="col-md-4 mt-2 mb-2">

            <Dialog open={open} onClose={handleClose} >
                <DialogTitle style={{fontFamily: "'Poppins', sans-serif", fontWeight: "bold", fontSize: "2rem", paddingBottom: "0rem"}}>Edit Note</DialogTitle>
                <form onSubmit={handleSubmit}>
                    <DialogContent style={{paddingTop: "0.5rem"}}>
                        <DialogContentText style={{fontFamily: "'Poppins', sans-serif",  fontSize: "1rem", marginBottom: "0.5rem"}}>
                            Edit your note. edit the field that you want to edit in note
                        </DialogContentText>
                        <TextField autoFocus margin="dense" value={title} onChange={updateTitle} label="Title" type="text" fullWidth variant="standard" />
                        <TextField autoFocus margin="dense" value={description} onChange={updateDescription} label="Description" type="text" fullWidth variant="standard" />
                        <TextField autoFocus margin="dense" value={tag} label="tag" onChange={updateTag} type="text" fullWidth variant="standard" />
                    </DialogContent>
                    <DialogActions>
                        <Button variant="outlined" color="secondary"  onClick={handleClose} style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "1rem" }}>Cancel</Button>
                        <Button variant="contained" color="secondary" type="submit" onClick={handleClose} style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "1rem" }}>Edit {note.title}</Button>
                    </DialogActions>
                </form>
            </Dialog>

            <div className="card">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">{note.title}</h5>
                        <IconButton onClick={() => { remove(note._id) }} className="mb-2 ms-auto" color="secondary">
                            <DeleteOutlineOutlinedIcon color="secondary" />
                        </IconButton>
                        <IconButton className="mb-2" color="secondary" onClick={handleClickOpen}>
                            <EditIcon color="secondary" />
                        </IconButton>
                    </div>
                    <h6 className="card-subtitle mb-2 text-muted">{note.tag}</h6>
                    <p className="card-text">{note.description.slice(0, 200)} ...</p>

                </div>
            </div>
        </div>
    )
}

export default NoteItem
