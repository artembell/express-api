import React from "react";
import {Link} from "react-router-dom";
import {DropdownButton, MenuItem} from "react-bootstrap";
import './header.css';

export default class Header extends React.Component{
	constructor(props) {
		super(props);
		
		this.state = {
			list: [
				"Home",
				"Contact"
			],

			languages: [
				'ru',
				'en',
			]
		};
	}

	onLanguageChange(lang){
		console.log(lang);
	}

	render(){
		const {list, languages} = this.state;
		// console.log("list", list);
		return (
			<div>
				<section id='header-background'>
					<div>
						<span>Board Games E-Shop</span>
						<span class="contact-info">Phone</span>
					</div>
				</section>
				
				<nav id="menu1">
					<ul id="header-menu">
					{
						list.map((el, index) => {
							return <li key={index}><Link to={`/${el == "Home" ? '' : el.toLowerCase()}`}>{el}</Link></li>
						})
					}
					</ul>
					
					</nav>
			</div>
		);
	}
}