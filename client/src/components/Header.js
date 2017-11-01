import React from "react";
import {Link} from "react-router-dom";
import './header.css';
import './menu.css';
import cube_full from '../images/cube-full.png';

export default class Header extends React.Component{
	constructor(props) {
		super(props);
		
		this.state = {
			list: [
				"Home",
				"Contact",
				"Users",
				"Artists",
				"Games",
				"Categories",
				"About"
			],

			languages: [
				'ru',
				'en',
			],

			categories: []
		};
	}

	onLanguageChange(lang){
		console.log(lang);
	}

	componentDidMount() {
		fetch('/categories')
		  .then(res => res.json())
		  .then(categories => this.setState(
		  	{categories: categories}
		  ));
	}

	render(){
		const {list, languages, categories} = this.state;
		console.log('cats', categories);
		// console.log("list", list);
		return (
			<div id="header">
				<section id='header-background'>
					<div className="flex-container">
						<span className="with-image"><img alt="logo" src={cube_full}/></span>
						<span className="article">Board Games E-Shop</span>
						<div className="contact-info">
							<span>text</span>
							<span>text</span>
							<span>text</span>
						</div>
					</div>
				</section>
				
				<ul className="mmenuu">

					{
						list.map((el, index) => {
							return <li key={index}><Link to={`/${el == "Home" ? '' : el.toLowerCase()}`}>{el}</Link></li>
						})
					}
					
				    <li><a href="#">Categories</a>
				    	<ul className="ssubmenuu">
				        {
				        	categories.map((el, index) => {
				        		return <li key={index}><Link to={`/categories/${el.name.toLowerCase()}`}>{el.name}</Link></li>
				        	})
				        }
				        </ul>
				    </li>
				    <li><a href="#">Меню №2</a>
				        <ul className="ssubmenuu">
				            <li><a href="#">Субменю №2 второго меню</a></li>
				            <li><a href="#">Субменю №2 второго меню</a></li>
				        </ul>
				    </li>
				    <li><a href="#">Меню №3</a>
				        <ul className="ssubmenuu">
				            <li><a href="#">Субменю №3 третьего меню</a></li>
				            <li><a href="#">Субменю №3 третьего меню</a></li>
				            <li><a href="#">Субменю №3 третьего меню</a></li>
				        </ul>
				    </li>
				</ul>
			</div>
		);
	}
}