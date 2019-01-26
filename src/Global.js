import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header/Header";

import "./css/normalize.css";
import "./css/Global.scss";

class Global extends Component {

	render() {
		return (
			<div>

				<Header />

				<div className="container">
				</div>
				
			</div>
		);
	}

}

export default Global;

const wrapper = document.getElementById("global");
wrapper ? ReactDOM.render(<Global />, wrapper) : false;