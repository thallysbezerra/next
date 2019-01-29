import React, { Component } from "react";
import Slider from "react-slick";
import MediaQuery from "react-responsive";
import "./Mimos.scss";

class VantagensSlider extends Component {
	
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
		
		return (
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
		)
	}
};

export default class Mimos extends Component {

	constructor(props) {
        super(props);

        this.state = { 
            showModal: false,
        }
        
		this.showModal = this.showModal.bind(this);
		this.hideModal = this.hideModal.bind(this);
		
	}
	
    showModal() { 
		this.setState({ 
			showModal: true
		});
		window.scrollTo(0, 0);
		document.body.style.overflow = "hidden"
	}

	hideModal() { 
		this.setState({ 
			showModal: false
		})
		document.body.style.overflow = "visible"
	}
	
	render() {
		return (

			<div>

				<section className="mimos">

					<div className="container small">

						<div className="mimos__intro">

							<h2 className="mimos__title">Apresentamos os Mimos</h2>
							<p className="mimos__subtitle">Parceiros exclusivos com desconto só pra vc, que é next.</p>
							<span className="mimos__link"  onClick={this.showModal}>Regras de uso</span>
							
							<div className={this.state.showModal === true ? "modal active" : "modal"} >

								<header className="modal__header">
									<div className="modal__header__title">Regras de uso</div>
									<span className="icon icon-close" onClick={this.hideModal}></span>
								</header>
								
								<div className="modal__content container">
									<h3 className="modal__content__title">O Mimo só vai valer se estiver tudo certo com seu cadastro na marca parceira, ok?</h3>
									<div className="modal__content__text">
										<p><b>Bem-vindos aos Mimos do next!</b></p>
										<p>Mimos no next não é um programa de pontos e voce ão precisa juntar nada para conseguir usá-los.</p>
										<p>Mas se liga, você precisa ter uma conta no next e um cartão de crédito, aí é só ir na área de Mimos dentro do aplicativo e ver todos os descontos disponíveis para você. As, para quem tem cartão de débito também tem mimo.</p>
										<p>Pra usar os mimos tem algumas regrinhas, veja no aplicativo como usar cada um deles e ele só via valer se estiver tudo certo com seu cadastro na marca parceira, ok?</p>
										<p>Ah! Para você saber, os mimos podem mudar sem aviso prévio. Mas não se preocupe, é só acessar sua conta no next e ver todos os mimos disponíveis para você.</p>
									</div>
								</div>

							</div>

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

						<div>

							<MediaQuery query="(max-width: 1279px)">
								<VantagensSlider />
							</MediaQuery>

							<MediaQuery query="(min-width: 1280px)">
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
							</MediaQuery>
						
						</div>

						<p className="vantagens__disclaimer">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt.</p>

				</section>
			
			</div>
		)
	}
}