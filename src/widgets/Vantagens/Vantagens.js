import React, { Component } from "react";
import Slider from "react-slick";
import MediaQuery from "react-responsive";
import data from "./Vantagens-mock.json";
import "./Vantagens.scss";

export default class Vantagens extends Component {
	
	render() {

		const settings = {
			autoplay: true,
			autoplaySpeed: 5000,
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
		};
		
		const vantagens = data.vantagens.map((item, index) =>
			<div className="vantagens__slider" key={index}>
				<i className={`icon ${item.icon}`}>
					<span className="vantagens__badge">{item.badge}</span>
				</i>
				<p className="vantagens__description">{item.description}</p>
				<p className="vantagens__discount">{item.discount}</p>
				<p className="vantagens__period">{item.period}</p>
			</div>
        );
		
		return (
            <section className="vantagens container small">

                <h2 className="vantagens__title">{data.title}</h2>

                <div>

                    <MediaQuery query="(max-width: 1279px)">
                        <Slider {...settings}>
                            {vantagens}
                        </Slider>
                    </MediaQuery>

                    <MediaQuery query="(min-width: 1280px)">
                        {vantagens}
                    </MediaQuery>

                </div>

                <p className="vantagens__disclaimer">{data.disclaimer}</p>

            </section>
		)
	}
};
