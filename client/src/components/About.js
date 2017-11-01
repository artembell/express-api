import React from "react";
import './about.css';

export default class About extends React.Component{
	constructor(props) {
		super(props);
		
		this.state = {
			
		};
	}

	render(){
		//console.log(this.props);
		return (
			<div id="about">
				<section>
					<h1>Phones:</h1>
					<ul>
						<li>+375 (44) XXX-XX-XX</li>
						<li>+375 (29) XXX-XX-XX</li>
					</ul>
				</section>
				<section>
					<h1>Suggestions</h1>
					<ul>
						<li>"Ready-to-play" boardgames</li>
						<li>Amazing guides</li>
						<li>Qualified help with game rules</li>
					</ul>
				</section>
				<section>
					<h1 className="located">Location</h1>
					<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A0cfc415e5e49b7be88e52aff8180305aaaf3bb50ea30e2f04535bef7c8430c9b&amp;source=constructor"
					 width="80%" height="600px" align="center" frameborder="0"></iframe>
				</section>
				<section>
					<h1>What we are doing to reach the purpose?</h1>
					<p>Nothing... at the moment...</p>
				</section>
			</div>
		);
	}
}