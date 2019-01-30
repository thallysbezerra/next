import React, { Component } from "react";
import dataMimos from "./Mimos-mock.json";
import "./Mimos.scss";

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

		let categoryDebito = dataMimos.debito.categories.map((item, index) =>
			<li className="" key={index}>
				<i className={`icon ${item.icon}`}/>
				<div className="mimos__category-name">{item.name}</div>
			</li>
		);

		let categoryCredito = dataMimos.credito.categories.map((item, index) =>
			<li className="" key={index}>
				<i className={`icon ${item.icon}`}/>
				<div className="mimos__category-name">{item.name}</div>
			</li>
		);

		let subcategoriesDebito = dataMimos.debito.categories.map((items, index) =>
			<li key={index}>
				{items.subcategory.map((item, index) =>
					<div key={index}>
						<i className={`icon ${item.icon}`}></i>
						<div>
							<p>{item.text}</p>
						</div>
					</div>	
				)}
			</li>
		);

		let subcategoriesCredito = dataMimos.credito.categories.map((items, index) =>
			<li key={index}>
				{items.subcategory.map((item, index) =>
					<div key={index}>
						<i className={`icon ${item.icon}`}></i>
						<div>
							<p>{item.text}</p>
						</div>
					</div>	
				)}
			</li>
		);

		return (

			<div>

				<section className="mimos">

					<div className="container small">

						<div className="mimos__intro">

							<h2 className="mimos__title">{dataMimos.title}</h2>
							<p className="mimos__subtitle">{dataMimos.subtitle}</p>
							<span className="mimos__link"  onClick={this.showModal}>{dataMimos.link}</span>
							
							<div className={this.state.showModal === true ? "modal active" : "modal"} >

								<header className="modal__header">
									<div className="modal__header__title">{dataMimos.modal.headerTitle}</div>
									<span className="icon icon-close" onClick={this.hideModal}></span>
								</header>
								
								<div className="modal__content container">
									<h3 className="modal__content__title">{dataMimos.modal.contentTitle}</h3>
									<div className="modal__content__text">
										<p><b>{dataMimos.modal.paragraph1}</b></p>
										<p>{dataMimos.modal.paragraph2}</p>
										<p>{dataMimos.modal.paragraph3}</p>
										<p>{dataMimos.modal.paragraph4}</p>
										<p>{dataMimos.modal.paragraph5}</p>
									</div>
								</div>

							</div>

							<label className="mimos__label">{dataMimos.label}</label>
							<div className="mimos__toggle">
								<span className="active">{dataMimos.debito.paymentType}</span>
								<span>{dataMimos.credito.paymentType}</span>
							</div>

							<ul className="mimos__category">
								{categoryDebito}
								{categoryCredito}
							</ul>

						</div>

						<ul className="mimos__subcategory">
							{subcategoriesDebito}
							{subcategoriesCredito}
						</ul>

					</div>

				</section>
			
			</div>
		)
	}
}