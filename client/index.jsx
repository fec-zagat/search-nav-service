//-------------------------------------------------------
// Comment out below for when proxy server is not running
//-------------------------------------------------------
// import React from 'react';
// import ReactDOM from 'react-dom';
// ReactDOM.render(<App />, document.getElementById('app'));

import App from './components/App.jsx';
import './styles/index.css';
import 'normalize.css';

//--------------------------------------------
// Below used for when proxy server is running
//--------------------------------------------
window.NavSearchBar = App;
