import React, { Component } from 'react';
import Details from './Details';
import './css/about.css';

export default class About extends Component {
    render() {

        const myCoreValues = (
                             <div>
                             <p>Although I enjoy working with computers and writing code, I enjoy working with people more. 
                                I am a firm believer in the power of collaboration. To help me work well with people, I try to stick to these core values: 
                             </p>
                                <ul id="list-styles">
                                    <li>Empathy</li>
                                    <li>Respect</li>
                                    <li>Trust</li>
                                    <li>Hope</li>
                                </ul>
                                <p>If you would like us to work together on a project, by all means, get in touch.</p>
                             </div>
                             )
        return (
            <div>
                <Details 
                title="Software Engineer" 

                subject="My Story" 

                about="I am a software engineer who is extremely passionate about design and technology. Frankly speaking, I love software, I really do.
                It has been said that words have power, but so does code. For this reason, I advocate semantic code that enhances accessibility and performance. 
                I have a passion for effective communication on the Web and beyond."

                supplementary="As a software engineer, I do appreciate the need to choose programming paradigms very carefully. 
                I am familiar with Object Oriented Programming, Functional Programming and of course Procedural Programming."

                list={myCoreValues}    
                />
            </div>
        )
    }
}
