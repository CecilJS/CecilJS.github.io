import React, { Component } from 'react';
import './css/about.css';
import myAvatar from './images/myAvatar.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

class About extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
    super(props)
    }
    componentDidMount(){
      AOS.init({
        duration : 2000
      })
    }

    render() {


        return (
            <div className="container">
               <div className="row">
                 <div className="col-sm-6">
                   <div className="card">
                    <div className="card-body content first-card">
                        <h5>
                        Software Engineer
                        </h5>
                        <img src={myAvatar} className="card-img-top" alt="Cecil JS"></img>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6" >
               
                   <div className="card" data-aos="fade-up-right" id="card-details">
                   <div id="card-cover">
                    <div className="card-body">
                   
                      <h5 className="card-title">My Story</h5>
                      
                        <section className="card-text" id="about-content">  
                          <p>
                            I am a software engineer who is passionate about design and technology. 
                            Frankly speaking, I love software. It has been said that words have power, but so does code. 
                            For this reason, I advocate semantic code that enhances accessibility and performance. 
                            I have a passion for effective communication on the Web and beyond.
                          </p>
                          <p> 
                            As a software engineer, I do appreciate the need to choose programming paradigms very carefully. 
                            I am familiar with Object Oriented Programming, Functional Programming and of course Procedural Programming.
                            Although I enjoy working with computers and writing code, I enjoy working with people more. 
                            I am a firm believer in the power of collaboration. To help me work well with people, I try to stick to these core values:
                         </p>
                         <section id="core-values">
                            <ul>
                                <li>Empathy</li>
                                <li>Respect</li>
                                <li>Trust</li>
                                <li> Hope</li>

                            </ul>
                         </section>
                            
                         <p>If you would like us to work together on a project, by all means, get in touch.</p> 
                                                   
                        </section>
                    </div>
                   </div>
                   </div>
                </div>
              </div>
            </div>
        )
    }
}

export default About;