import React, { useContext } from 'react'
import { Alert, Collapse, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { AlertContext } from '../context/AlertContext';

function Alertss(props) {

    const {alert, open , setOpen} = useContext(AlertContext)

    return (
        <div>
            {alert && <Collapse in={open}>
                <Alert action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            setOpen(false);
                        }}>
                        <CloseIcon fontSize="inherit" />
                    </IconButton>} severity={alert.type}>
                   {alert.message} 
                </Alert>
            </Collapse>}
        </div>
    )
}

export default Alertss
