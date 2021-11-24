import React, { useContext, useEffect, } from 'react'
import { NoteContext } from '../context/notes/NoteContext';
import NoteItem from './NoteItem';
import empty from '../empty.svg'


function Notes() {

    const { notes, getNotes } = useContext(NoteContext)

    useEffect(() => {
        getNotes()
        // eslint-disable-next-line
    }, [])

    return (
        <div className="row ps-5 mt-4 mb-1">
            <h1 className="display-6">Your Notes: </h1>
            {notes.length === 0 && 
            <div className="d-flex ">
                <p style={{position: "absolute", left: "35%", bottom: "-10%"}}>Create your first note :) !!!!!</p>
                <img className="img-fluid ms-5 mt-3" src={empty} alt="empty" style={{width: "30%", opacity: "0.5"}} />
            </div>
            }
            {notes.map(note => (
                <NoteItem key={note._id} note={note} />
            ))}
        </div>
    )
}

export default Notes
