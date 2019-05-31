import React, { Component } from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';

// editor themes
import 'brace/mode/javascript';
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
		return fetch('/api/run?code=' + this.state.code);
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
						height="calc(100vh - 104px)"
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
