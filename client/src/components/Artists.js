import React from "react";
import { StickyContainer, Sticky } from 'react-sticky';

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
			<div>
				<h1 className="sticky">Artists</h1>
			</div>
		);
	}
}