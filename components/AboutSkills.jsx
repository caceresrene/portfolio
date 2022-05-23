import React from 'react';

const AboutSkills = () => {
	return (
		<section className='py-8 mb-8'>
			<h3 className='font-semibold text-xl text-center'>
				I enjoy coding in these technologies
			</h3>
			<div className='grid grid-cols-4 place-items-center mt-6 gap-8'>
				<div className='text-center'>
					<i className='devicon-javascript-plain text-7xl animate-pulse' />
					<p>JavaScript</p>
				</div>
				<div className='text-center'>
					<i className='devicon-react-original text-7xl animate-pulse' />
					<p>React</p>
				</div>
				<div className='text-center'>
					<i className='devicon-nextjs-line text-7xl animate-pulse' />
					<p>Next.js</p>
				</div>
				<div className='text-center'>
					<i className='devicon-tailwindcss-plain text-7xl animate-pulse' />
					<p>Tailwind CSS</p>
				</div>
				<div className='text-center'>
					<i className='devicon-python-plain text-7xl animate-pulse' />
					<p>Python</p>
				</div>
				<div className='text-center'>
					<i className='devicon-flask-original text-7xl animate-pulse' />
					<p>Flask</p>
				</div>
				<div className='text-center'>
					<i className='devicon-express-original text-7xl animate-pulse' />
					<p>Express.js</p>
				</div>
				<div className='text-center'>
					<i className='devicon-mongodb-plain text-7xl animate-pulse' />
					<p>MongoDB</p>
				</div>
			</div>
		</section>
	);
};

export default AboutSkills;
