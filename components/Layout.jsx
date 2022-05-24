import React from 'react';

const Layout = ({ children, extended }) => {
	const styledLayout = extended
		? 'max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-full xl:mx-10 mx-auto'
		: 'max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto';

	return <main className={styledLayout}>{children}</main>;
};

export default Layout;
