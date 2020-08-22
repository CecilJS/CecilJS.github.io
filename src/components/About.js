import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import myAvatar from './myAvatar.jpg'

 class About extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                <div className="col-sm-6">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">
                            Software Engineer 
                        </h5>
                        <img src={myAvatar} className="card-img-top" alt="..."></img>
                    </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">A little bit about me</h5>
                        <p className="card-text">
                        Cecil is a capable software engineer who is extremely passionate about design and technology. It has been said that words have power, but so does code. 
                        For this reason, Cecil advocates semantic code that enhances accessibility and performance. He has a passion for effective communication on the Web and beyond. 
                        </p>
                        <p className="card-text">
                        Cecil is a capable software engineer who is extremely passionate about design and technology. It has been said that words have power, but so does code. 
                        For this reason, Cecil advocates semantic code that enhances accessibility and performance. He has a passion for effective communication on the Web and beyond. 
                        </p>
                        
                        <a href="/" className="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default About;