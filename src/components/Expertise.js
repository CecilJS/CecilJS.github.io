import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import js from './images/JS.jpg';
import rc from './images/react.jpg';
import node from './images/node.png';

class Expertise extends Component {
    render() {
        return (
            <React.Fragment>
              <div id="carouselExampleCaptions" className=" container carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={js} className="d-block w-100" alt="Javascript"/>
                    <div className="carousel-caption d-md-block">
                        <h5>Language of choice - Javascript</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src={rc} className="d-block w-100" alt="React JS"/>
                    <div className="carousel-caption d-md-block d-sm-block">
                        <h5>Frontend Development - React JS</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src={node} className="d-block w-100" alt="Node JS"/>
                    <div className="carousel-caption d-md-block">
                        <h5>Backend Development - Node JS</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
              </div>
            </React.Fragment>
        )
    }
}


export default Expertise