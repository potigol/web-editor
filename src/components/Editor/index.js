import React, { Component } from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';

// editor themes
import '../../modules/ace/potigol';
import 'brace/theme/tomorrow_night';

// components
import RunNav from '../RunNav';
import Console from '../Console';

class Editor extends Component {
	constructor(props){
		super(props);
		this.state = {code:""};
	}

	runCode(){
		return (async () => {
			const rawResponse = await fetch('/api/run', {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({code: this.state.code})
			});
			const content = await rawResponse.json();
			return Promise.resolve(content);
		})();
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
