import React, { Component } from 'react';
import TopNav from './App/TopNav';
import Routes from './App/Routes';
import CoursesView from './Course/CoursesView';

export default function App() {
	return (
		<div>
			<TopNav />
			<main className="container-fluid">
				<Routes />
				<CoursesView />
			</main>
		</div>
	);
}