import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import MainLayout from './MainLayout';
import './App.css';
import Users from './Users';
import Artists from './Artists';

const NotFound = () => <h3>NotFound:(</h3>;
const Home = () => <h1>Home</h1>;
const Contact = () => <h1>Contact</h1>;

class App extends Component {
  state = {users: []}

  render() {
    return (
      <Router>
        <MainLayout>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/users" component={Users}/>
            <Route path="/artists" component={Artists}/> 
            <Route component={NotFound}/>
            
          </Switch>
        </MainLayout>
      </Router>
    );
  }
}

export default App;