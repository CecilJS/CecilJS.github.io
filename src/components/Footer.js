import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import Social from './Social';
import './css/footer.css';
 
class Footer extends Component {
    render() {
        return (
          <footer className="container py-5">
            <section className="row">
                <section className="col-12 col-md">
                <small className="d-block mb-3 text-muted">CecilJS &copy; 2017-2020</small>
                </section>
                <section className="col-6 col-md">
                <h5>Social Media</h5>
                
                <Social/>
                </section>
                <section className="col-6 col-md">
                <h5>Quick Links</h5>
                <ul className="list-unstyled text-small">
                    <li><Link className="text-muted" to="/about">About</Link></li>
                    <li><Link className="text-muted" to="/projects">Projects</Link></li>
                    <li><Link className="text-muted" to="/expertise">Expertise</Link></li>
                    <li><Link className="text-muted" to="/contact">Contact</Link></li>
                </ul>
                </section>
            </section>
          </footer>
        )
    }
}


export default Footer;