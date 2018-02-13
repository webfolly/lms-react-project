import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router
} from 'react-router-dom';
import './styles';
import App from './App';
import axios from 'axios';

axios.defaults.baseURL = 'https://lmswebapidemo.azurewebsites.net/api';

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById('root'),
);