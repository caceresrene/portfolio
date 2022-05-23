import React from 'react';
import DownloadDocument from './Icons/DownloadDocument';

const Nav = () => {
	return (
		<nav className='flex justify-evenly p-4 items-center sticky top-0 bg-white z-50 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60'>
			<h1 className='text-xl font-bold'>🖤René Cáceres</h1>
			<ul className='flex gap-6 items-center'>
				<li>
					<a className='p-2 rounded' href=''>
						Projects.
					</a>
				</li>
				<li>
					<a className='p-2 rounded' href=''>
						Contact.
					</a>
				</li>
				<li>
					<a
						className='bg-zinc-900 text-white p-2 flex items-center gap-1 rounded hover:bg-zinc-800 shadow'
						href='http://'
						target='_blank'
						rel='noopener noreferrer'
					>
						<DownloadDocument /> Résumé.
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
