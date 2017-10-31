import React from "react";
import {Link} from "react-router-dom";
import './header.css';

export default class Users extends React.Component{
	constructor(props) {
		super(props);
		
		this.state = {
			users: []
		};
	}

	state = {users: []}

	componentDidMount() {
		fetch('/users')
		  .then(res => res.json())
		  .then(users => this.setState(
		  	{users}
		  ));
	}

	render(){
		console.log(this.props);
		return (
			<div className="App">
				<h1>Users</h1>
				{
					this.state.users.map(user =>
						<div key={user.id}>{user.username}</div>
					)
				}
			</div>
		);
	}
}