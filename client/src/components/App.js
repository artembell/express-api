import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import MainLayout from './MainLayout';
import './App.css';

const NotFound = () => <h3>NotFound:(</h3>;
const Home = () => <h1>Home</h1>;
const Contact = () => <h1>Contact</h1>;

class App extends Component {
  state = {users: []}

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  // return (
  //     <div className="App">
  //       <h1>Users</h1>
  //       {this.state.users.map(user =>
  //         <div key={user.id}>{user.username}</div>
  //       )}
  //     </div>
  //   );



  render() {
    return (
      <Router>
        <MainLayout>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/contact" component={Contact}/>
            <Route component={NotFound}/>
          </Switch>
        </MainLayout>
      </Router>
    );
  }
}

export default App;