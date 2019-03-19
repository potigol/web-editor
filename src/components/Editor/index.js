import React, { Component } from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';

// editor themes
import 'brace/mode/javascript';
import '../../modules/ace/potigol';
import 'brace/theme/tomorrow_night';

class Editor extends Component {
	render() {
		return (
			<AceEditor
				mode="potigol"
				theme="tomorrow_night"
				name="editor-potigol"
				editorProps={{$blockScrolling: true}}
				width="100%"
				height="calc(100vh - 54px)"
				fontSize="17px"
				showPrintMargin={false}
			/>
		);
	}
}

export default Editor;
