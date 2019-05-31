import React, { Component } from 'react';

// assets
import Img_iconPlay from '../../assets/imgs/icon_play.png'

const RunNav = function({run}){
	return (
		<div className="nav-file" onClick={run}>
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

export default RunNav;
