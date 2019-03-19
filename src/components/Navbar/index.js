import React, { Component } from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';

// editor themes
import 'brace/mode/javascript';
import '../../modules/ace/potigol';
import 'brace/theme/tomorrow_night';

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
