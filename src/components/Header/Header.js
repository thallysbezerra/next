import React from "react";
import "./Header.scss";
import logo from "./img/logo.svg"

const Header = () => (

	<header className="header container">

		<a href="#" className="header__logo"><img src={logo}></img></a>
		
		<nav className="header__nav">
			<ul>
				<li>next</li>
				<li>Flow</li>
				<li>Vaquinha</li>
				<li>Objetivos</li>
				<li className="active">Mimos</li>
				<li>Propostas</li>
			</ul>
		</nav>

		<a href="#" className="header__button">Abra sua conta</a>

	</header>

);

export default Header;