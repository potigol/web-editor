import React, { Component } from 'react';
import brace from 'brace';
import axios from 'axios';
import AceEditor from 'react-ace';

// editor themes
import '../../modules/ace/potigol';
import 'brace/theme/tomorrow_night';

// components
import RunNav from '../RunNav';
import Console from '../Console';

// token
import token from '../../../libs/token';
import nanoid from 'nanoid';

class Editor extends Component {
	constructor(props){
		super(props);

		const userId = nanoid();
		this.state = {
			code:"",
			userId: userId,
			token: token.generate(userId)
		};
	}

	runCode(callback){
		axios.post('/api/run', {
			userId: this.state.userId,
			code: this.state.code,
			token: this.state.token
		})
		.then(response => {
			callback(response.data);
		})
		.catch(error => {
			callback('Error on compile!');
		});
	}

	onChange(newValue) {
		this.state.code = newValue;
	}

	render() {
		return (
			<div className="code-editor-main">
			<div className="left-asgn">
			<AceEditor
			mode="potigol"
			theme="tomorrow_night"
			name="editor-potigol"
			editorProps={{$blockScrolling: true}}
			width="100%"
			height="calc(100vh - 54px)"
			fontSize="16px"
			showPrintMargin={false}
			onChange = {this.onChange.bind(this)}
			/>
			</div>
			<div className="right-asgn">
			<Console 
			className="console-react" 
			run={this.runCode.bind(this)} 
			noAutoScroll={true}
			/>
			</div>
			</div>
			);
	}
}

export default Editor;
