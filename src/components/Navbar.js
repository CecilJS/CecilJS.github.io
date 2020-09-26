import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import './css/navbar.css';
import { Link } from "react-router-dom";

 class Navbar extends Component {
    render() {
        return (
            
                <nav className="navbar navbar-expand-lg container mt-2 mb-5" >
                    <Link className="navbar-brand" id="navbar" to="/"><h1>CecilJS</h1></Link>
                    <div className="navbar-toggler"  type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" id="hamburger">
                       <div className="toggler"></div>
                       <div className="toggler"></div>
                       <div className="toggler"></div>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    
                        <ul className="navbar-nav mr-auto styled-nav">
                            <li className="nav-item">
                                <Link className="nav-link nav-styles" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link nav-styles" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link nav-styles" to="/expertise">Expertise</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link nav-styles" to="/projects">Projects</Link>  
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link nav-styles" to="/contact">Contact </Link>  
                            </li>
                            
                        </ul>
                        
                    </div>
                </nav>
       
        );
    }
}

export default Navbar;
