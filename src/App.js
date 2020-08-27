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
import { Route, Switch, withRouter  } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './pageTransitions/slideTransitions.scss';

const pages = [
  { path: '/', name: 'landing', order: 1 },
  { path: '/about', name: 'about', order: 2 },
  { path: '/expertise', name: 'expertise', order: 3 },
  { path: '/projects', name: 'projects', order: 4 },
  { path: '/contact', name: 'contact', order: 5 }

]

class App extends Component {
  constructor(props){
      super(props)
      this.state = {
          currentPage: this.setPage(this.props.location.pathname),
          curPageOrder: this.setCurrentOrder(this.props.location.pathname),
          newPageOrder: null
      }
  }
  componentDidUpdate(prevProps, prevState){
     
     
      let newPage = this.setPage(this.props.location.pathname);
      let newPageOrder = pages.filter(function (page) {
          return page.name === newPage;
      });

      let curPage = this.state.currentPage;
      let curPageOrder = pages.filter(function (page) {
          return page.name === curPage;
      });

      if( newPage !== curPage){
          console.log('new page');
          let direction = curPageOrder[0].order < newPageOrder[0].order ? 'left' : 'right';
          // Set State
          this.setState({
              currentPage: newPage,
              pageDirection: direction,
              curPageOrder: curPageOrder[0].order,
              newPageOrder: newPageOrder[0].order,
          })
         
      }
      
  }
  setCurrentOrder = (path) => {
      let curPageOrder = pages.filter(function (page) {
          return page.path === path;
      });
      
      return curPageOrder[0].order;
  }

  setPage = (pathname) => {
      // SET PAGE FOR CSS CLASSES
      let page = null;
      switch (pathname){
          case('/'):
              page = 'landing';
              break;
          case('/about'):
              page = 'about';
              break;
          case('/expertise'):
              page = 'expertise';
              break;
          case('/projects'):
              page = 'projects';
              break;
          case('/contact'):
              page = 'contact'
              break;
          
          default:
              page = 'home';
          
      }
     
      return page;
  }
  render() {
      const { location } = this.props;
      const currentKey = location.pathname.split("/")[1] || "/";


      return (
          <div className={`wrapper ${this.setPage(this.props.location.pathname)}`}>
              <div className={`wrap ${currentKey} `}>
                  <TransitionGroup  className={`transition-group ${this.state.pageDirection}`}>
                      <CSSTransition
                          key={currentKey}
                          timeout={{ enter: 800, exit: 400 }}
                          classNames={'transition-wrap'}
                          
                      >
                          <header className="App-header">
                            <Navbar/>
                            <Switch location = {location}>
                            <Route exact path="/" component={Landing} />
                            <Route exact path="/about" component={About} />
                            <Route exact path="/expertise" component={Expertise} />
                            <Route exact path="/projects" component={Projects} />
                            <Route exact path="/contact" component={Contact} />
                            </Switch>
                            <Footer/>
                          </header>
                         
                      </CSSTransition>
                  </TransitionGroup>
              </div>
          </div>
      )
  }
}
export default withRouter(App);
