import React from "react";
import "./Cover.scss";
import coverImage from './img/cover-image.png';

const Cover = () => (

	<section className="cover">

		<img src={coverImage} alt=""/>

		<div>
			<h2>Pra ganhar descontos exclusivos, vem pro next</h2>
			<p>Não é programa de ponto.</p>
			<p>É so nosso jeitinho de te mimar &lt;3</p>
		</div>

	</section>

);

export default Cover;