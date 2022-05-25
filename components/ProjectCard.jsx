import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp } from '../utils/varients';

const ProjectCard = ({
	thumbnail,
	name,
	shortDesc,
	technologies,
	unfinished,
	projectRepo,
}) => {
	return (
		<motion.a
			href={projectRepo}
			target='_blank'
			rel='noopener noreferrer'
			variants={fadeInUp}
			whileHover={{ scale: 1.04 }}
			whileTap={{ scale: 0.95 }}
			className='rounded-lg  transition-all bg-zinc-200 hover:cursor-pointer hover:shadow-md'
		>
			<Image
				className='rounded-t-lg'
				src={thumbnail}
				alt={`${shortDesc} picture`}
			/>
			<div className='text-xl p-2'>
				<h3>
					<span className='font-bold'>{name}</span> - {shortDesc}
				</h3>
				<div className='flex gap-2 my-2 flex-wrap text-base sm:text-xl'>
					{unfinished && (
						<figure className='bg-amber-200 rounded-lg py-1 px-2 shadow shadow-amber-400'>
							Work in progress
						</figure>
					)}
					{technologies.map((tech, index) => (
						<figure key={index} className='bg-white rounded-lg py-1 px-2 shadow'>
							{tech}
						</figure>
					))}
				</div>
			</div>
		</motion.a>
	);
};

export default ProjectCard;
