import React from 'react'
import noteImg from '../images/inotebook.svg'
import { Link } from "react-router-dom";
import { Button } from '@mui/material';
import "../styles/home.css"
import Notes from './Notes';
import Navbar from "./Navbar";
import Alertss from "./Alertss";

function Home() {
    console.log('hii')

    return (
        <>
            <Navbar />
            <Alertss />
            <div className="container-fluid" >
                <div className="row">
                    <div className="col-md-5">
                        <h1 className="display-1 pt-5 ps-5 respo"><span style={{ color: "#9C27B0" }}>i</span>Notebook</h1>
                        <p className="ps-5 respo" style={{ fontSize: "1.7rem", fontWeight: "bold" }}>Your notebook on cloud - safe and secure</p>
                        <p className="ps-5 mt-3 respo" style={{ fontSize: "1rem" }}>An online web platform where you can create, edit, upload, delete your notes/information privately and securely without any disturbancee. For more info you can checkout our <Link to="/about">About Page</Link>  </p>
                        <div className="d-flex justify-content-center">
                            <Button component={Link} to="/new" variant="contained" color="secondary" style={{ color: "White", textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "1.3rem" }}>Create New Note</Button>
                        </div>
                    </div>
                    <div className="col-md-7 d-flex flex-column align-items-center">
                        <img className="img-fluid" style={{width: "75%"}} src={noteImg} alt="iNotebook" />
                    </div>
                </div>

                <Notes />
            </div>
        </>
    )
}

export default Home
