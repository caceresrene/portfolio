import React from 'react';
import DownloadDocument from './Icons/DownloadDocument';
import MenuIcon from './Icons/MenuIcon';
import Link from 'next/link';
const Nav = () => {
	return (
		<nav className='flex justify-between sm:justify-around p-4 items-center sticky top-0 bg-white z-50 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60'>
			<h1 className='text-xl font-bold'>
				<Link href='/'>
					<a>🖤René Cáceres</a>
				</Link>
			</h1>
			<button className='sm:hidden'>
				<MenuIcon />
			</button>
			<ul className='hidden sm:flex gap-6 items-center '>
				<li>
					<Link href='/projects'>
						<a className='p-2 rounded'>Projects.</a>
					</Link>
				</li>
				<li>
					<a className='p-2 rounded' href=''>
						Contact.
					</a>
				</li>
				<li>
					<a
						className='bg-zinc-900 text-white p-2 flex items-center gap-1 rounded hover:bg-zinc-800 shadow'
						href='/rene-caceres-cv.pdf'
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
