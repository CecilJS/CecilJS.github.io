import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import About from './components/About';
import Footer from './components/Footer';
import Expertise from './components/Expertise';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Route, Switch} from "react-router-dom";
import './pageTransitions/slideTransitions.scss';


class App extends Component {
  
  render() {

      return (
      
              <div>
                   <header className="App-header">
                            <Navbar/>
                            <Switch>
                            <Route exact path="/" component={Landing} />
                            <Route exact path="/about" component={About} />
                            <Route exact path="/expertise" component={Expertise} />
                            <Route exact path="/projects" component={Projects} />
                            <Route exact path="/contact" component={Contact} />
                            </Switch>
                            <Footer/>
                          </header>
              </div>
         
      )
  }
}
export default App;
