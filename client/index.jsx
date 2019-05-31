import React from 'react';
import ReactDOM from 'react-dom';


import App from './components/App.jsx';
import './styles/index.css';
import 'normalize.css';

//--------------------------------------------
// Below used for when proxy server is running
//--------------------------------------------
// window.NavSearchBar = App;

//-------------------------------------------------------
// Comment out below for when proxy server is not running
//-------------------------------------------------------

ReactDOM.render(<App />, document.getElementById('app'));
