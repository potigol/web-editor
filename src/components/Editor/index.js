import React, { Component } from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';

// editor themes
import 'brace/mode/javascript';
import '../../modules/ace/potigol';
import 'brace/theme/tomorrow_night';

// components
import RunNav from '../RunNav';

class Editor extends Component {
	render() {
		return (
			<div className="code-editor-main">
				<RunNav />
				<AceEditor
					mode="potigol"
					theme="tomorrow_night"
					name="editor-potigol"
					editorProps={{$blockScrolling: true}}
					width="100%"
					height="calc(100vh - 104px)"
					fontSize="16px"
					showPrintMargin={false}
				/>
			</div>
		);
	}
}

export default Editor;
