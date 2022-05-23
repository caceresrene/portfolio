import Image from 'next/image';
import React from 'react';
import meKeyboard from '../public/assets/me-keyboard.jpg';
import meSunset from '../public/assets/me-sunset.jpg';

const AboutMe = () => {
	return (
		<section className='grid grid-cols-2 place-items-center'>
			<figure className='w-96 -rotate-6 shadow-lg flex hover:rotate-0 transition-all mb-8'>
				<Image
					src={meSunset}
					alt='me at the beach'
					className='rounded bg-cover object-fill'
				/>
			</figure>
			<div>
				<h3 className='font-semibold text-xl'>My background</h3>
				<p className='text-lg'>
					A year before enrolling in Computer Science, I decided to try coding; I
					learned Python on my own. Then, during my studies at the University of
					Santiago, Chile, I learned more about programming and discovered my passion
					for web development, so I decided to study JavaScript more in-depth. Still,
					I struggle financially to stay in university because of the covid-19
					pandemic. But, I didn&apos;t let that pull me down; thanks to a scholarship
					that people at Coding Dojo gave me, I completed a{' '}
					<a
						className='styled-anchor'
						href='https://www.codingdojo.la/bootcamps/'
						target='_blank'
						rel='noopener noreferrer'
					>
						14-week Software Development boot camp
					</a>{' '}
					where I advanced my knowledge of JavaScript and Python, learning React,
					Flask and many other incredible technologies.
				</p>
			</div>
		</section>
	);
};

export default AboutMe;
