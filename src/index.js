import React from 'react';
import { render } from 'react-dom';

// assets
import './assets/stylesheets/main.css';

// pages
import EditorFull from './pages/EditorFull'

// Render editor
render(
  <EditorFull />
,document.getElementById('root')
);
