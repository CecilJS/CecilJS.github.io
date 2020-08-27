import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Socials extends Component {
    render() {
        return (
            <div>
                <ul className="list-unstyled text-small" id="social-media-icons">
                    <li><a className="text-muted" href="https://github.com/CecilJS" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/material-rounded/28/000000/github.png" alt="github icon"/>@CecilJS</a></li>
                    <li><a className="text-muted" href="https://www.instagram.com/ceciljs/" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/fluent/28/000000/instagram-new.png" alt="instagram icon"/>@CecilJS</a></li>
                    <li><a className="text-muted" href="https://twitter.com/cecil_js" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/color/28/000000/twitter.png" alt="twitter icon"/>@Cecil_JS</a></li>
                </ul>
            </div>
        )
    }
}


export default Socials;