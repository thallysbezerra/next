import React, { Component } from "react";
import dataHeader from "./Header-mock.json";
import "./Header.scss";
import logo from "./img/logo.svg"

export default class Header extends Component {

	render () {

		let navLinks = dataHeader.nav.map((item, index) =>
			<li className={item.className} key={index}>
				{item.linkName}
			</li>
		);

		return (
			<header className="header container">
		
				<a href="#" className="header__logo"><img src={logo} alt={dataHeader.altImage}></img></a>
				
				<nav className="header__nav">
					<ul>
						{navLinks}
					</ul>
				</nav>
		
				<a href="#" className="header__button">{dataHeader.button}</a>
		
			</header>
		)
	}
};
