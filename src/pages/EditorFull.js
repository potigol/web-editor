import React, { Component } from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';

// components
import Editor from '../components/Editor'
import Navbar from '../components/Navbar'

// editor themes
import 'brace/mode/javascript';
import '../modules/ace/potigol';
import 'brace/theme/tomorrow_night';

class EditorFUll extends Component {
	render() {
		return (
      <div>
        <Navbar />
        <div className="wrapper">
  			   <Editor />
        </div>
      </div>
		);
	}
}

export default EditorFUll;
