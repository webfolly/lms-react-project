import React, { Component } from 'react';
import TopNav from './App/TopNav';
import Routes from './App/Routes';


export default function App() {
	return (
		<div>
			<TopNav />
			<main className='container'>
				<Routes />
			</main>
		</div>
	);
}