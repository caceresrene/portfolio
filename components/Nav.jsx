import { useState } from 'react';
import DownloadDocument from './Icons/DownloadDocument';
import MenuIcon from './Icons/MenuIcon';
import Link from 'next/link';

const Nav = () => {
	const [toggleMenu, setToggleMenu] = useState(false);

	const styledUl = {
		open: 'flex gap-4 flex-col w-full h-screen my-4 text-xl',
		closed: 'hidden sm:flex gap-4 items-center',
	};

	return (
		<nav className='flex justify-between p-4 items-center sticky top-0 bg-zinc-200 z-50 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 flex-col sm:flex-row'>
			<div className='flex justify-between w-full'>
				<h1 className='text-xl font-bold'>
					<Link href='/'>
						<a>🖤René Cáceres</a>
					</Link>
				</h1>
				<button
					onClick={() => setToggleMenu(!toggleMenu)}
					className='sm:hidden p-1'
				>
					<MenuIcon />
				</button>
			</div>
			<ul className={toggleMenu ? styledUl.open : styledUl.closed}>
				<li>
					<Link href='/projects'>
						<a className='p-2 rounded-lg hover:bg-zinc-200 hover:text-zinc-600 transition-all w-fit'>
							Projects.
						</a>
					</Link>
				</li>
				<li>
					<Link href='/'>
						<a className='p-2 rounded-lg hover:bg-zinc-200 hover:text-zinc-600 transition-all w-fit'>
							About.
						</a>
					</Link>
				</li>
				<li>
					<a
						className='bg-zinc-900 text-white hover:text-zinc-200 p-2 flex items-center gap-1 rounded-lg hover:bg-zinc-800 shadow w-fit'
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
