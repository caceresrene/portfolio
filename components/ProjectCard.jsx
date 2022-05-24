import React from 'react';
import Image from 'next/image';

const ProjectCard = ({
	thumbnail,
	name,
	shortDesc,
	technologies,
	unfinished,
}) => {
	return (
		<a className='rounded-lg hover:-translate-y-1 hover:shadow-2xl transition-all bg-zinc-200 hover:cursor-pointer'>
			<Image
				className='rounded-t-lg'
				src={thumbnail}
				alt={`${shortDesc} picture`}
			/>
			<div className='text-xl p-2'>
				<h3>
					<span className='font-bold'>{name}</span> - {shortDesc}
				</h3>
				<div className='flex gap-2 my-2 flex-wrap'>
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
		</a>
	);
};

export default ProjectCard;
