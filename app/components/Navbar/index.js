import React, { Component } from 'react';

// assets
import Img_logo from '../../assets/imgs/logo.jpg';

class Navbar extends Component {
	render() {
		return (
			<div className="navbar">
				<div className="brand">
					<div id="potigol-logo">
						<img src={Img_logo} alt="Logo" />
					</div>
					<div className="title">
						<span>Potigol web</span>
					</div>
				</div>
			</div>
		);
	}
}

export default Navbar;
