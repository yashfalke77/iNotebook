import React from 'react'
import PageNotFounds from '../images/404.svg'
import {Button} from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";

function PageNotFound() {
    return (
        <div className="container d-flex flex-column align-items-center mt-5">
            <h2 className="text-center" style={{fontWeight: "bolder", fontSize: "3rem"}}>404: The Page you are Looking for isn't here</h2>
            <p className="text-center" style={{ fontSize: "0.9rem"}}>You either tried some shady route or you came here by mistake. Whichever it is, try using the navigation</p>
            <img className="img-fluid mt-2" src={PageNotFounds} alt="page not found" style={{width: "50%"}} />
            <Button className="mb-4" variant="contained" color="secondary" startIcon={<ArrowBackIcon />} component={Link} to="/" style={{ textTransform: "none", color: "White"}}>Go back to home</Button>
        </div>
    )
}

export default PageNotFound
