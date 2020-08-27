import React, { Component } from 'react';
import Socials from './Socials';
import Details from './Details';
import './contacts.css';



class Contact extends Component {
   

    render() {

             //Bindings for props. Will be passed into the details component being imported as props value.

              const social = (
                <div>
                <p>If you are just being nice and want to say hello, by all means feel free to reach out to me on social media.</p>
                 <div id="socials"> <Socials/></div> 
                <p>If you would like me to be a mentor or even teach you to code, the best place to contact me is on 
                <a href="https://www.linkedin.com/in/itscecil/" target="_blank" rel="noopener noreferrer" id="linkedin"> LinkedIn.</a>
                </p>
                </div>
              )  

             const contact = (

                <div>
                    <p>If you would like us to collaborate on a project, the best medium is to email <span>cecil@thetalkertive.co.uk.</span></p>
                </div>
             )  

        return (
            <div>
                
                <Details
                    title="I am a Communicator"

                    subject="Say Hello!"

                    about="To help us communicate effectively, I've put together a brief outline of the different mediums you should use when reaching out to me.
                    "
                    supplementary={contact}

                    list={social}
                />
            </div>
        )
    }
}

export default Contact;