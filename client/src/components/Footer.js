import React from "react";

export default class Footer extends React.Component{
	constructor(props) {
		super(props);
		
		this.state = {

		};
	}

	render(){
		return (
			<div className="footer">
				<hr/>
				<h3>2017-{new Date().getFullYear()}</h3>
				<h4>&copy;All rights reserved and all games are stolen</h4>
			</div>
			
		);
	}
}