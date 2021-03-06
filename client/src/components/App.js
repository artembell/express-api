import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainLayout from './MainLayout';

import './App.css';
import './main.css';

import Users from './Users';
import Artists from './Artists';
import Categories from './Categories';
import About from './About';

const NotFound = () => <h1>NotFound:(</h1>;
const Home = () => <h1>Home</h1>;
const Contact = () => <h1>Contact</h1>;
const Games = () => <h1>Games</h1>;
//const Categories = () => <h1>this.props.match.params.name</h1>

class App extends Component {
  

  render() {
    return (
      <Router>
        <MainLayout>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/about" component={About}/>
            <Route path="/users" component={Users}/>
            <Route path="/artists" component={Artists}/>
            <Route path="/games" component={Games}/>
            <Route path="/categories/:name" component={Categories}/>
            <Route component={NotFound}/>
            
          </Switch>
        </MainLayout>
      </Router>
    );
  }
}

export default App;