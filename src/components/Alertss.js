import React, { useState } from 'react'
import { Alert, Collapse, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function Alertss({ message }) {

    const [open, setOpen] = useState(true);

    return (
        <div>
            <Collapse in={open}>
                <Alert action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            setOpen(false);
                        }}>
                        <CloseIcon fontSize="inherit" />
                    </IconButton>} severity="error">
                    {message} — check it out!
                </Alert>
            </Collapse>
        </div>
    )
}

export default Alertss
