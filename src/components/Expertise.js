import React, { Component } from 'react'
import Details from './Details';

class Expertise extends Component {
    render() {
        return (
            <div>
               <Details 
                title="I Love Coding" 
                subject="My Expertise" 
                about="I am a software engineer who is extremely passionate about design and technology. 
                It has been said that words have power, but so does code. For this reason, I advocate semantic code that enhances accessibility and performance. 
                I have a passion for effective communication on the Web and beyond."
                action="Github"    
                
                />
            </div>
        )
    }
}


export default Expertise