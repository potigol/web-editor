import React, { Component } from 'react';

// assets
import close_icon from '../../assets/imgs/close.png';
import new_icon from '../../assets/imgs/plus.png';

const RunNav = function({run}){
	return (
		<div className="nav-file" onClick={run}>
			<div className="file-run active">
				<div className="title">
					<span>main</span>
				</div>
				<div className="icon">
					<img src={close_icon} />
				</div>
			</div>
			<div className="new-tab">
				<img src={new_icon} />
			</div>
		</div>
	);
}

export default RunNav;
