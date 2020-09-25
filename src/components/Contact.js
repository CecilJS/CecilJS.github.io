import React, { Component } from 'react';
import Socials from './Socials';
import './css/contacts.css';
import AOS from 'aos';
import 'aos/dist/aos.css';




class Contact extends Component {
   
    componentDidMount(){
        AOS.init({
          duration : 2000
        })
      }

    render() {

        return (
            <section className="container">
             <div className="jumbotron jumbotron-fluid" id="contact-display">
              <div className="container col-sm-2" >
                 <h1 className="display-4" id="contact">Say Hello</h1>
                    <p data-aos="fade-right">
                       To help us communicate effectively, I have put together a brief outline of the different mediums you could use when reaching out to me. Please use the appropriate button below
                       to find out more. I am eager to hear from you! 
                    </p>
     
                 <section id="communication-path">
                    <a className="btn" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Work</a>
                    <button className="btn" type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Social</button>
                    <button className="btn" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">See All</button>
                </section>
                
                <div className="row">
                <div className="col">
                  <div className="collapse multi-collapse" id="multiCollapseExample1">
                   <div className="card card-body" id="work-path">
                    <p>If you would like me to be a mentor or even teach you to code, the best place to contact me is on 
                       <a href="https://www.linkedin.com/in/itscecil/" target="_blank" rel="noopener noreferrer" id="linkedin"> LinkedIn</a>.            
                    </p> 
                    
                    <p>
                     If you would like us to collaborate on a project, the best medium is to email <span> cecil@thetalkertive.co.uk.</span>
                    </p>
                   </div>
                 </div>
                </div>
                <div className="col">
                 <div className="collapse multi-collapse" id="multiCollapseExample2">
                    <div className="card card-body" id="social-path">
                        <p>If you are just being nice and want to say hello, by all means feel free to reach out to me on social media.</p> <br/>
                        <Socials/>

                     </div>
                    </div>
                  </div>
                </div>
               </div>
             </div>
           </section>
        );
    }
}

export default Contact;