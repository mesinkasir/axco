import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'uikit/dist/css/uikit.min.css';
import 'uikit/dist/js/uikit.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import SinglePage from './SinglePage';
import Yeah from './Yeah';
import List from './List';
import './Wohoo';
import Footer from './Footer';
import Nav from './Nav';
import Contact from './Contact';
import './style.css';
import { Link } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <Router>
        <Yeah />
        <div className="container-fluid bg-dark text-light">
          <div className="row">
            <div className="col-md-2 text-center p-3 p-md-5 text-center">
              <Nav />
            </div>
            <div className="col-12 col-md-7 p-3 p-md-5">
              <div className="p-3 p-md-3">
                <h2 className="text-light">Content Article</h2>
                <Route path="/" component={List} exact />
                <Route path="/article/:name" component={SinglePage} />
              </div>
            </div>
            <div className="col-md-3 text-center p-3 p-md-5">
              <Contact />
            </div>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

render(<App />, document.getElementById('root'));
