import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import myAvatar from './myAvatar.jpg';
import { Link } from "react-router-dom";


 class Details extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
    super(props)
}
    render() {
        return (
            <div className="container">
                <div className="row">
                <div className="col-sm-6">
                    <div className="card">
                    <div className="card-body content">
                        <h5>
                           {this.props.title}
                        </h5>
                        <img src={myAvatar} className="card-img-top" alt="..."></img>
                    </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{this.props.subject}</h5>
                        <p className="card-text">  {this.props.about}</p>
                        <p>{this.props.supplementary}</p>
                        <p>{this.props.list}</p>
                     <Link to="/contact" className="btn">{this.props.action}</Link>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Details;