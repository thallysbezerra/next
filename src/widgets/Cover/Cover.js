import React from "react";
import "./Cover.scss";
import coverImage from './img/cover-image.png';

const Cover = () => (

	<section className="cover container small">

		<img src={coverImage} alt="Mulher emponderada" className="cover__image"/>

		<div>
			<h2 className="cover__title">Pra ganhar descontos exclusivos, vem pro next</h2>
			<p className="cover__subtitle">Não é programa de ponto.</p>
			<p className="cover__subtitle">É so nosso jeitinho de te mimar &lt;3</p>
		</div>

	</section>

);

export default Cover;