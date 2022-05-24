import React from 'react';

const Footer = () => {
	return (
		<footer className='flex justify-between max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto border-t-2 p-4 text-base sm:text-lg bottom-0'>
			<div>
				<p>Santiago, Chile (GMT-4)</p>
				<p>Email: rene@outlook.my</p>
			</div>
			<div className='flex flex-col items-end tracking-wider'>
				<a
					className='cursor-pointer styled-anchor'
					href='http://'
					target='_blank'
					rel='noopener noreferrer'
				>
					Linkedin
				</a>
				<a
					className='cursor-pointer styled-anchor'
					href='http://'
					target='_blank'
					rel='noopener noreferrer'
				>
					GitHub
				</a>
			</div>
		</footer>
	);
};

export default Footer;
