import React, { useContext } from 'react'
import { TextField, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link, useNavigate } from "react-router-dom";
import "../styles/home.css"
import useInputState from "../hooks/useInputState"
import Alertss from "./Alertss";
import { AlertContext } from '../context/AlertContext';

function Login() {

    const [username, updateUsername, resetUsername] = useInputState("")
    const [password, updatePassword, resetPassword] = useInputState("")
    const navigate = useNavigate()
    const { showAlert } = useContext(AlertContext)

    const handleSubmit = async (evt) => {
        evt.preventDefault()
        const response = await fetch("http://localhost:8080/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
        const json = await response.json()

        if (json.success) {
            localStorage.setItem("token", json.authToken)
            navigate("/")
            showAlert(`Welcome back ${username}`, "success")
        } else {
            showAlert(json.message, "error")
        }
        resetPassword()
        resetUsername()
    }

    return (
        <div>
            <Alertss alert={alert} />
            <div className="container mt-5 addnotes" >
                <Button className="mb-4" variant="text" color="secondary" startIcon={<ArrowBackIcon />} component={Link} to="/" style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif" }}>Home</Button>
                <h2 style={{ fontWeight: "Bold" }}>Login</h2>
                <p className="mb-4">Sign in on the internal platform</p>
                <div className="d-flex">
                    <Button size="large" fullWidth className="mb-4 me-4" variant="contained" color="primary" startIcon={<FacebookIcon />} component={Link} to="/" style={{ textTransform: "none", fontSize: "1.1rem", color: "White", fontFamily: "'Poppins', sans-serif" }}>Login with Facebook</Button>
                    <Button size="large" fullWidth className="mb-4" variant="contained" color="error" startIcon={<GoogleIcon />} component={Link} to="/" style={{ textTransform: "none", fontSize: "1.1rem", color: "White", fontFamily: "'Poppins', sans-serif" }}>Login with Google</Button>
                </div>
                <p className="mb-4 d-flex justify-content-center">or login with username and password</p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <TextField value={username} onChange={updateUsername} inputProps={{ minLength: 1 }} color="secondary" label="Username" variant="outlined" fullWidth required style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "1.1rem" }} />
                    </div>
                    <div className="mb-4">
                        <TextField type="password" value={password} onChange={updatePassword} inputProps={{ minLength: 1 }} color="secondary" label="Password" variant="outlined" fullWidth required style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "1.1rem" }} />
                    </div>
                    <Button disabled={username.length < 1 || password.length < 1} type="submit" fullWidth size="large" className="mb-4" variant="contained" color="secondary" style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "1.1rem" }}>Add Note</Button>
                </form>
                <p>Don't have an account? <Link to="/register" >register</Link> </p>
            </div>
        </div>
    )
}

export default Login
