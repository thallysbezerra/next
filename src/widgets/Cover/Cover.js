import React, { Component } from "react";
import dataCover from "./Cover-mock.json";
import "./Cover.scss";
import coverImage from './img/cover-image.png';

export default class Cover extends Component {

	render() {
		return (
			<section className="cover container small">
		
				<img src={coverImage} alt={dataCover.altImage} className="cover__image"/>
		
				<div>
					<h2 className="cover__title">{dataCover.title}</h2>
					<p className="cover__subtitle">{dataCover.subtitle1}</p>
					<p className="cover__subtitle">{dataCover.subtitle2}</p>
				</div>
		
			</section>
		)
	}
};
