import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router
} from 'react-router-dom';
import './styles';
import axios from 'axios';
//import lecturer from '../lecturer/api';
import App from './App';


axios.default.baseURL = 'https://lmswebapidemo.azurewebsites.net/api';

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById('root'),
);