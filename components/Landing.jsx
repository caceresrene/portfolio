import React from 'react';
import landingMe from '../public/assets/landing-me.jpg';
import Image from 'next/image';
import LinkIcon from './Icons/LinkIcon';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { stagger, fadeInUp } from '../utils/varients';

const Landing = () => {
	return (
		<motion.main
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			variants={stagger}
			className='grid sm:grid-cols-2 gap-4 sm:gap-0 place-items-center sm:mt-10 p-4'
		>
			<section className='row-start-2 sm:row-start-auto'>
				<div className='text-2xl sm:text-3xl'>
					<motion.p variants={fadeInUp}>Hi, my name is</motion.p>
					<motion.h1 variants={fadeInUp} className='text-4xl sm:text-5xl font-bold'>
						René Cáceres
					</motion.h1>
					<motion.p variants={fadeInUp}>
						I build powerful websites with modern technologies.
					</motion.p>
				</div>
				<motion.p variants={fadeInUp} className='my-4'>
					I&apos;m a full-stack developer based in Santiago, Chile; I&apos;m
					currently seeking my first opportunity in the industry; please check out{' '}
					<Link href='/projects'>
						<a className='styled-anchor'>my projects</a>
					</Link>{' '}
					and feel free to contact me if you like what you see :^)
				</motion.p>
				<ul className='flex justify-around p-2 text-lg flex-wrap'>
					<li>
						<motion.a variants={fadeInUp}
							className='text-blue-500 hover:text-blue-400 p-1 flex items-center gap-1'
							href='https://www.linkedin.com/in/renecaceresdeveloper/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<LinkIcon /> LinkedIn.
						</motion.a>
					</li>
					<li>
						<motion.a variants={fadeInUp}
							className='text-purple-500 hover:text-purple-400 p-1 flex items-center gap-1'
							href='https://github.com/caceresrene'
							target='_blank'
							rel='noopener noreferrer'
						>
							<LinkIcon /> GitHub.
						</motion.a>
					</li>
					<li>
						<motion.a variants={fadeInUp}
							className='text-sky-500 hover:text-sky-400 p-1 flex items-center gap-1'
							href='https://twitter.com/byebyerene'
							target='_blank'
							rel='noopener noreferrer'
						>
							<LinkIcon /> Twitter.
						</motion.a>
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
		</motion.main>
	);
};

export default Landing;
