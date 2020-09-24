import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import js from './images/JS.jpg';
import rc from './images/react.jpg';
import node from './images/node.png';
import api from './images/api.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

class Expertise extends Component {

     
    componentDidMount(){
        AOS.init({
          duration : 2000
        })
      }

    render() {
        return (
            <React.Fragment>
              <div id="carouselExampleCaptions" className=" container carousel slide" data-ride="carousel" data-aos="fade-left">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={js} className="d-block w-100" alt="Javascript"/>
                    <div className="carousel-caption d-md-block cover" >
                        <h5>Language of choice - Javascript</h5>
                        <p> As a sofware engineer, I am comfortable with other programming languages like Python and C#, however, my programming lannguage of choice is JavaScript.</p>
                            
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src={rc} className="d-block w-100" alt="React JS"/>
                    <div className="carousel-caption d-md-block d-sm-block cover">
                        <h5>Frontend Development - React JS</h5>
                        <p>There is nothing better than being able to seperate your concerns while building complex user interfaces. I love React!</p>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src={api} className="d-block w-100" alt="React JS"/>
                    <div className="carousel-caption d-md-block d-sm-block cover">
                        <h5>Appliaction Programming Interface -API </h5>
                        <p>What will we do without APIs? I am comfortable with RESTful APIs and can equally work with SOAP APIs when needed.</p>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src={node} className="d-block w-100" alt="Node JS"/>
                    <div className="carousel-caption d-md-block cover">
                        <h5>Backend Development - Node JS</h5>
                        <p> I believe the beauty of JavaScript can be in seen our ability to use it from the Frontend to the Backend. I love JavaScript & the Node environment. </p>
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