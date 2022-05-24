import React from 'react';
import landingMe from '../public/assets/landing-me.jpg';
import Image from 'next/image';
import LinkIcon from './Icons/LinkIcon';

const Landing = () => {
	return (
		<main className='grid sm:grid-cols-2 gap-4 sm:gap-0 place-items-center sm:mt-10 p-4'>
			<section className='row-start-2 sm:row-start-auto'>
				<div className='text-2xl sm:text-3xl'>
					<p>Hi, my name is</p>
					<h1 className='text-4xl sm:text-5xl font-bold'>René Cáceres</h1>
					<p>I build powerful websites with modern technologies.</p>
				</div>
				<p className='my-4'>
					I&apos;m a full-stack developer based in Santiago, Chile; I&apos;m
					currently seeking my first opportunity in the industry; please check out{' '}
					<a className='styled-anchor' href='#'>
						my projects
					</a>{' '}
					and feel free to contact me if you like what you see :^)
				</p>
				<ul className='flex justify-around p-2 text-lg flex-wrap'>
					<li>
						<a
							className='text-blue-500 hover:text-blue-400 p-1 flex items-center gap-1'
							href='https://www.linkedin.com/in/renecaceresdeveloper/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<LinkIcon /> LinkedIn.
						</a>
					</li>
					<li>
						<a
							className='text-purple-500 hover:text-purple-400 p-1 flex items-center gap-1'
							href='https://github.com/caceresrene'
							target='_blank'
							rel='noopener noreferrer'
						>
							<LinkIcon /> GitHub.
						</a>
					</li>
					<li>
						<a
							className='text-sky-500 hover:text-sky-400 p-1 flex items-center gap-1'
							href='https://twitter.com/byebyerene'
							target='_blank'
							rel='noopener noreferrer'
						>
							<LinkIcon /> Twitter.
						</a>
					</li>
				</ul>
			</section>
			<section>
				<figure className='w-48 sm:w-96 rotate-6 shadow-lg flex hover:rotate-0 transition-all'>
					<Image
						src={landingMe}
						alt='me at the beach'
						className='rounded bg-cover object-fill'
					/>
				</figure>
			</section>
		</main>
	);
};

export default Landing;
