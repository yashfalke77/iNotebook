import React from 'react'
import { NavLink } from "react-router-dom";
import { Button } from '@mui/material';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light " style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px", }}>
            <div className="container-fluid">
                <NavLink activeClassName="active" className="navbar-brand" to="/">iNotebook</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink activeClassName="active" active className="nav-link" aria-current="page" to="/">Home</NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link" aria-current="page" to="/about">About</NavLink>
                        </li>
                        <li>
                            <Button className="nav-item ms-2" component={NavLink} to="/about" variant="contained" color="secondary" style={{color: "White", textTransform: "none", fontFamily: "'Poppins', sans-serif"}}>
                                Join us
                            </Button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar


