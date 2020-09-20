import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import './css/detail.css';


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
                    <div className="card-body content first-card">
                        <h5>
                           {this.props.title}
                        </h5>
                        <img src={this.props.img} className="card-img-top" alt="..."></img>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                   <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{this.props.subject}</h5>
                        <section className="card-text">  
                           {this.props.about}
                        </section>
                        <React.Fragment>
                          {this.props.supplementary}
                        </React.Fragment>
                        <React.Fragment>
                          {this.props.list}
                        </React.Fragment>
                        <Link to="/contact" className="btn">
                          {this.props.action}
                       </Link>
                    </div>
                   </div>
                </div>
              </div>
            </div>
        )
    }
}

export default Details;