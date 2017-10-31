import React from "react";
import {Link} from "react-router-dom";

export default class Artists extends React.Component{
	constructor(props) {
		super(props);
		
		this.state = {
			artists: [] 
		};
	}

	componentDidMount() {
		fetch('/artist')
		  .then(res => res.json())
		  .then(artists => this.setState({artists: artists}));

	}

	render(){
		console.log(this.state.artists);
		return (
			<h1>Hello</h1>
		);
	}
}