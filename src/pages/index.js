import React from 'react';

import { About, Hero, LeftSideBar, Navbar } from '../components';

const Index = () => {
	return (
		<div id="root">
			<Hero />
			<About />
			<LeftSideBar />
			<Navbar />
		</div>
	);
};

export default Index;
