import React from 'react'
import { Link } from "react-router-dom";
import { IconButton } from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditIcon from '@mui/icons-material/Edit';


function NoteItem({ note }) {

    return (
        <div className="col-md-4 mt-2 mb-2">
            <div className="card">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">{note.title}</h5>
                        <IconButton className="mb-2 ms-auto" color="secondary">
                            <DeleteOutlineOutlinedIcon color="secondary" />
                        </IconButton>
                        <IconButton className="mb-2" color="secondary">
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
