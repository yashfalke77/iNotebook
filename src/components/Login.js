import React from 'react'
import { TextField, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from "react-router-dom";
import "../styles/home.css"

function Login() {
    return (
        <div>
            <div className="container mt-5 addnotes" >
                <Button className="mb-4" variant="text" color="secondary" startIcon={<ArrowBackIcon />} component={Link} to="/" style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif" }}>Home</Button>
                <h2 style={{ fontWeight: "Bold" }}>Login</h2>
                <p className="mb-4">Sign in on the internal platform</p>
                <div className="d-flex">
                    <Button size="large" fullWidth className="mb-4 me-4" variant="contained" color="primary" startIcon={<FacebookIcon />} component={Link} to="/" style={{ textTransform: "none", fontSize: "1.1rem", color: "White", fontFamily: "'Poppins', sans-serif" }}>Login with Facebook</Button>
                    <Button size="large" fullWidth className="mb-4" variant="contained" color="error" startIcon={<GoogleIcon />} component={Link} to="/" style={{ textTransform: "none", fontSize: "1.1rem", color: "White", fontFamily: "'Poppins', sans-serif" }}>Login with Google</Button>
                </div>
                <p className="mb-4 d-flex justify-content-center">or login with username and password</p>
                <form >
                    <div className="title mb-4">
                        <TextField inputProps={{ minlength: 3 }} id="outlined-basic" color="secondary" label="Username" variant="outlined" fullWidth required style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "1.1rem" }} />
                    </div>
                    <div className="description mb-4">
                        <TextField inputProps={{ minlength: 3 }} id="outlined-basic" color="secondary" label="Password" variant="outlined" fullWidth required style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "1.1rem" }} />
                    </div>
                    <Button type="submit" fullWidth size="large" className="mb-4" variant="contained" color="secondary" style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "1.1rem" }}>Add Note</Button>
                </form>
                <p>Don't have an account? <Link to="/register" >register</Link> </p>
            </div>
        </div>
    )
}

export default Login
