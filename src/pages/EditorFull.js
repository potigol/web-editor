import React, { Component } from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';

// components
import Editor from '../components/Editor'

// editor themes
import 'brace/mode/javascript';
import '../modules/ace/potigol';
import 'brace/theme/tomorrow_night';

class EditorFUll extends Component {
	render() {
		return (
			<Editor />
		);
	}
}

export default EditorFUll;
