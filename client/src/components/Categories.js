import React from "react";
import './header.css';

export default class Categories extends React.Component{
	constructor(props) {
		super(props);
		
		this.state = {
			
		};
	}


	render(){
		//console.log(this.props);
		return (
				<h1>Games of category: {this.props.match.params.name}</h1>
		);
	}
}