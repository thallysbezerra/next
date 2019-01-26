import React from "react";
import "./Hero.scss";
import coverImage from './img/cover-image.png';

const Hero = () => (

	<section className="hero">

		<img src={coverImage} alt=""/>

		<div>
			<h2>Pra ganhar descontos exclusivos, vem pro next</h2>
			<p>Não é programa de ponto.</p>
			<p>É so nosso jeitinho de te mimar &lt;3</p>
		</div>

	</section>

);

export default Hero;