import React, { useContext, useState } from 'react'
import { TextField, Button, InputAdornment, InputLabel, OutlinedInput, FormControl, IconButton, FormHelperText } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../styles/home.css"
import Alertss from "./Alertss";
import { AlertContext } from '../context/AlertContext';
import { useFormik } from 'formik'
import * as Yup from 'yup';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


function Login(props) {

    const location = useLocation()
    const navigate = useNavigate()
    const { showAlert } = useContext(AlertContext)
    const [showPassword, setShowPassword] = useState(false)

    const loginSchema = Yup.object().shape({
        username: Yup.string().min(3).max(25).required().matches(/^[a-z0-9]+$/i, "Username should contain alphabets and numbers only"),
        password: Yup.string().required().min(4).matches(/^[a-z0-9]+$/i, "Password should contain alphabets and numbers only")
    })

    const formik = useFormik({
        initialValues: {
            username: "",
            password: ""
        },
        validationSchema: loginSchema,
        onSubmit: async (values) => {
            const response = await fetch("http://localhost:8080/api/auth/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            })
            const json = await response.json()

            if (json.success) {
                localStorage.setItem("token", json.authToken)
                navigate(`/`)
                showAlert(`Welcome back ${values.username}`, "success")
            } else {
                showAlert(json.message, "error")
            }
        }
    })

    const { errors, touched, handleSubmit, getFieldProps } = formik;

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

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
                <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <TextField {...getFieldProps('username')}
                            color="secondary" label="Username" variant="outlined" fullWidth
                            error={Boolean(touched.username && errors.username)}
                            helperText={touched.username && errors.username} />
                    </div>
                    <div className="mb-4">
                        <FormControl variant="outlined" fullWidth>
                            <InputLabel color="secondary" error={Boolean(touched.password && errors.password)} htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                color="secondary"
                                type={showPassword ? 'text' : 'password'}
                                {...getFieldProps('password')}
                                error={Boolean(touched.password && errors.password)}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password" />
                                <FormHelperText error={Boolean(touched.password && errors.password)} id="outlined-weight-helper-text">{touched.password && errors.password}</FormHelperText>
                        </FormControl>
                    </div>
                    <Button type="submit" fullWidth size="large" className="mb-4" variant="contained" color="secondary" style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "1.1rem" }}>Login</Button>
                </form>
                <p>Don't have an account? <Link to="/register" >register</Link> </p>
            </div>
        </div>
    )
}

export default Login
