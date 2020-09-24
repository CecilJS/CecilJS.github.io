import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/projects.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

class Projects extends Component {
    
    componentDidMount(){
        AOS.init({
          duration : 2000
        })
      }
  
    render() {
        return (
           <section className="container" >
               <div className="jumbotron jumbotron-fluid" id="project-display">
                 <div className="container col-sm-2" >
                    <h1 className="display-4" id="project">My Projects</h1>
                    <p className="text-center" id="project-content" data-aos="fade-right">I am constantly working on different projects and would definitely love to hear what you think them. 
                    The best place to see my projects is on my github repository. 
                    Please be sure to check them out and be generous with some feedback. 
                    </p>
                </div>
                </div>
           </section>
          
      );
    }
}

export default Projects;