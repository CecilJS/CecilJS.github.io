import React, { Component } from 'react';
import { init } from 'ityped';
import './css/landing.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import '../pageTransitions/slideTransitions.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';


class Landing extends Component {
    componentDidMount(){
        const myElement = document.querySelector('#myElement')
        init(myElement, { showCursor: false, strings: ['Hey, I am CecilJS.', 
        ' And I am a Software Engineer.', 'Want to know more about me?', 
        'Click the button below.' ] })

        AOS.init({
          duration : 2000
        })

      }

      

      
    render() {
        return (
            <main className="container" data-aos="fade-up-right">
              <section id="wrapper">
                <div id="myElement" ></div>
                <div id="about-btn">
                 <Link to="/about" className="btn">More</Link>
                </div>
              </section>  
            </main>
        )
    }
}

export default Landing;