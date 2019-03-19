import React, { Component } from 'react';

// assets
import Img_iconPlay from '../../assets/imgs/icon_play.png'

class RunNav extends Component {
	render() {
		return (
				<div className="nav-file">
					<div className="file-run">
						<div className="icon">
							<img src={Img_iconPlay} alt="icon" />
						</div>
						<div className="title">
							<span>Executar</span>
						</div>
					</div>
				</div>
		);
	}
}

export default RunNav;
