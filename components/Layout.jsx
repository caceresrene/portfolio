import React from 'react';

const Layout = ({ children }) => {
	return (
		<main className='max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto'>
			{children}
		</main>
	);
};

export default Layout;
