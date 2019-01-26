import React from "react";
import "./Mimos.scss";

const Mimos = () => (

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

);

export default Mimos;