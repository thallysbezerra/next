import React from "react";
import "./Modal.scss";

const Modal = () => (

	<div className="modal">

        <header className="modal__header">
            <div className="modal__header__title">Regras de uso</div>
            <span className="icon icon-close"></span>
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

);

export default Modal;