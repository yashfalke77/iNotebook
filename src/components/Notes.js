import React, { useContext } from 'react'
import { NoteContext } from '../context/notes/NoteContext';
import NoteItem from './NoteItem';

function Notes() {

    const { notes } = useContext(NoteContext)

    return (
        <div className="row ps-5 mt-4 mb-1">
            <h1 className="display-6">Your Notes: </h1>
            {notes.map(note => (
                <NoteItem key={note._id} note={note} />
            ))}
        </div>
    )
}

export default Notes
