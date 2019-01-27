import React from "react";
import Slider from "react-slick";
import "./Mimos.scss";

var settings = {
	autoplay: true,
	autoplaySpeed: 5000,
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1
};	

const VantagensSlider = () => (

	<Slider {...settings}>
		<div className="vantagens__slider">
			<i className="icon icon-uber">
				<span className="vantagens__badge">R$ 20 off</span>
			</i>
			<p className="vantagens__description">Vc pega um Uber por mês e economiza até</p>
			<p className="vantagens__discount">XX</p>
			<p className="vantagens__period">no ano*</p>
		</div>
		<div className="vantagens__slider">
			<i className="icon icon-cinemark">
				<span className="vantagens__badge">50% off</span>
			</i>
			<p className="vantagens__description">Vc vai no cinema todo mês e pode economizar</p>
			<p className="vantagens__discount">XX</p>
			<p className="vantagens__period">no ano*</p>
		</div>
		<div className="vantagens__slider">
			<i className="icon icon-ifood">
				<span className="vantagens__badge">$ 20 off</span>
			</i>
			<p className="vantagens__description">Vc pede iFood todo mês e economiza</p>
			<p className="vantagens__discount">XX</p>
			<p className="vantagens__period">no ano*</p>
		</div>
	</Slider>

);

const Mimos = () => (

	<div>

		<section className="mimos">

			<div className="container small">

				<div className="mimos__intro">

					<h2 className="mimos__title">Apresentamos os Mimos</h2>
					<p className="mimos__subtitle">Parceiros exclusivos com desconto só pra vc, que é next.</p>
					<a href="#" className="mimos__link">Regras de uso</a>

					<label className="mimos__label">Exibir Mimos para:</label>
					<div className="mimos__toggle">
						<span className="active">Crédito</span>
						<span>Débito</span>
					</div>

					<ul className="mimos__category">
						<li className="active">
							<i className="icon icon-food"/>
							<div className="mimos__category-name">Alimentação</div>
						</li>
						<li>
							<i className="icon icon-shop"/>
							<div className="mimos__category-name">Compras</div>
						</li>
						<li>
							<i className="icon icon-college"/>
							<div className="mimos__category-name">Educação</div>
						</li>
						<li>
							<i className="icon icon-entertainment"/>
							<div className="mimos__category-name">Entretenimento</div>
						</li>
						<li>
							<i className="icon icon-services"/>
							<div className="mimos__category-name">Serviços</div>
						</li>
						<li>
							<i className="icon icon-transportation"/>
							<div className="mimos__category-name">Transporte</div>
						</li>
						<li>
							<i className="icon icon-travel"/>
							<div className="mimos__category-name">Viagens</div>
						</li>
					</ul>

				</div>

				<ul className="mimos__subcategory">
					<li>
						<div>
							<i className="icon icon-ifood"></i>
							<div>
								<p><b>R$ 20</b></p>
								<p>off por mês</p>
							</div>
						</div>
					</li>
					<li>
						<div>
							<i className="icon icon-mc"/>
							<div>
								<p><b>Desconto</b></p>
								<p>especial</p>
							</div>
						</div>
					</li>
				</ul>

			</div>

		</section>

		<section className="vantagens container small">

			<h2 className="vantagens__title">É só ter conta no next que sobra $ de verdade</h2>

			<VantagensSlider />

			<p className="vantagens__disclaimer">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt.</p>

		</section>
	
	</div>

);

export default Mimos;