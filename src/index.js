import React from 'react';
import { render } from 'react-dom';
import brace from 'brace';
import AceEditor from 'react-ace';

// assets
import './assets/stylesheets/base.scss';

// editor themes
import 'brace/mode/javascript';
import './mode/potigol';
import 'brace/theme/tomorrow_night';

// Render editor
render(
  <AceEditor
    mode="potigol"
    theme="tomorrow_night"
    name="editor-potigol"
    editorProps={{$blockScrolling: true}}
    width="100vw"
    height="100vh"
    fontSize="19px"
    showPrintMargin={false}
  />,
 document.getElementById('root')
);