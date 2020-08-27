import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './projects.css';


class Projects extends Component {

  
    render() {
        return (
           <section className="container" >
               <div className="jumbotron jumbotron-fluid" id="project-display">
                 <div className="container" >
                    <h1 className="display-4" id="project">My Projects</h1>
                    <p className="text-center" id="project-content">I am constantly working on different projects and would definitely love to hear what you think them. 
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