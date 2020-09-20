import React, { Component } from 'react';
import Socials from './Socials';
import Details from './Details';
import './css/contacts.css';




class Contact extends Component {
   

    render() {

             //Bindings for props. Will be passed into the details component being imported as props value.

              const social = (
                            <React.Fragment>
                                <React.Fragment>
                                If you are just being nice and want to say hello, by all means feel free to reach out to me on social media.
                                </React.Fragment>
                            <div id="socials"> 
                            <Socials/>
                            </div> 
                            <React.Fragment>If you would like me to be a mentor or even teach you to code, the best place to contact me is on 
                                   <a href="https://www.linkedin.com/in/itscecil/" target="_blank" rel="noopener noreferrer" id="linkedin"> LinkedIn.</a>
                            </React.Fragment>
                            </React.Fragment>
              )  

             const contact = (

                            <React.Fragment>
                                <React.Fragment>If you would like us to collaborate on a project, the best medium is to email <span> cecil@thetalkertive.co.uk. </span>
                                 
                                      
                                </React.Fragment>
                            </React.Fragment>
                        )  

        return (
         
                <Details
                    img="https://media.giphy.com/media/1yT7hcwMSWklSqQFsy/source.gif"
                    title="I am a communicator"

                    subject="Say Hello!"

                    about="To help us communicate effectively, I've put together a brief outline of the different mediums you should use when reaching out to me.
                    "
                    supplementary={contact}

                    list={social}
                 />
           
        )
    }
}

export default Contact;