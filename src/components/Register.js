import React, { useContext } from 'react'
import { TextField, Button, Checkbox, FormControlLabel } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link, useNavigate } from "react-router-dom";
import avataars from "../avataaars.png"
import useInputState from "../hooks/useInputState"
import useToggleState from "../hooks/useToggleState"
import Alertss from "./Alertss";
import { AlertContext } from '../context/AlertContext';


function Register() {

    const [username, setUsername, resetUsername] = useInputState("")
    const [email, setEmail, resetEmail] = useInputState("")
    const [password, setPassword, resetPassword] = useInputState("")
    const [accept, toggleAccept] = useToggleState(false)
    const { showAlert } = useContext(AlertContext)
    const navigate = useNavigate()

    const handleSubmit = async (evt) => {
        evt.preventDefault()
        const response = await fetch("http://localhost:8080/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, password })
        })
        const json = await response.json()
        console.log(json)
        if (json.success) {
            localStorage.setItem("token", json.authToken)
            navigate("/")
            showAlert(`Welcome to iNotebook ${username}`, "success")
        } else {
            showAlert(json.message, "error")
        }
        resetUsername()
        resetEmail()
        resetPassword()
    }

    return (
        <div>
            <Alertss />
            <div className="d-flex">
                <div className="col-md-5">
                    <img className="img-fluid" src={avataars} alt="register" style={{ width: "100%", height: "100vh", objectFit: "cover" }} />
                </div>

                <div className="col-md-7 ps-5 pe-5 pt-5" style={{ width: "50%" }}>
                    <Button className="mb-4" variant="text" color="secondary" startIcon={<ArrowBackIcon />} component={Link} to="/" style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif" }}>Home</Button>
                    <h2 style={{ fontWeight: "Bold" }}>Create a new account</h2>
                    <p className="mb-4">Use your email to create a new account</p>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <TextField value={username} onChange={setUsername} inputProps={{ minLength: 3 }} color="secondary" label="Username" variant="outlined" fullWidth required style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "1.1rem" }} />
                        </div>
                        <div className="mb-4">
                            <TextField value={email} onChange={setEmail} type="email" inputProps={{ minLength: 3 }} color="secondary" label="Email" variant="outlined" fullWidth required style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "1.1rem" }} />
                        </div>
                        <div className="mb-2">
                            <TextField type="password" value={password} onChange={setPassword} inputProps={{ minLength: 3 }} color="secondary" label="Password" variant="outlined" fullWidth required style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "1.1rem" }} />
                        </div>
                        <FormControlLabel className=" mb-2" control={<Checkbox checked={accept} onChange={toggleAccept} color="secondary" />} label="I have read the Terms and Conditions" />
                        <Button disabled={username.length < 3 || password.length < 3 || email.lenght < 3 || !accept} type="submit" fullWidth size="large" className="mb-4" variant="contained" color="secondary" style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "1.1rem" }}>Add Note</Button>
                    </form>
                    <p>Have an account? <Link to="/login" >login</Link> </p>
                </div>
            </div>
        </div>
    )
}

export default Register
