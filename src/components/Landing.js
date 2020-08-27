import React, { Component } from 'react';
import { init } from 'ityped';
import './landing.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import '../pageTransitions/slideTransitions.scss';


class Landing extends Component {
    componentDidMount(){
        const myElement = document.querySelector('#myElement')
        init(myElement, { showCursor: false, strings: ['Hey, I am CecilJS.', 
        ' And I am a Software Engineer.', 'Want to know more about me?', 
        'Click the button below.' ] })
      }

    render() {
        return (
            <main className="container">
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