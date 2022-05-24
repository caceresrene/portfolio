import React from 'react';
import Head from 'next/head';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Layout from '../../components/Layout';
import Image from 'next/image';
import adoptaclickDesktop from '../../public/assets/projects-sample/adoptaclick-desktop.png';
import countrysearchDesktop from '../../public/assets/projects-sample/countrysearch-desktop.png';
import nijistreamsDesktop from '../../public/assets/projects-sample/nijistreams-desktop.png';
import ghiblidictionaryDesktop from '../../public/assets/projects-sample/ghiblidictionary-desktop.png';
import portfolioDesktop from '../../public/assets/projects-sample/portfolio-desktop.png';
import mercadofoodDesktop from '../../public/assets/projects-sample/mercadofood-desktop.png';
import ProjectCard from '../../components/ProjectCard';
import { motion } from 'framer-motion';
import { stagger } from '../../utils/varients';

const index = () => {
	return (
		<>
			<Head>
				<title>René Cáceres — Projects</title>
				<meta name='description' content="René's portfolio, projects section" />
			</Head>
			<Nav />
			<motion.section
				initial='initial'
				animate='animate'
				exit={{ opacity: 0 }}
			>
				<Layout extended>
					<motion.section
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						variants={stagger}
						className='grid md:grid-cols-2 my-8 gap-8 p-2'
					>
						<ProjectCard
							thumbnail={adoptaclickDesktop}
							technologies={['Python', 'Flask', 'Tailwind CSS', 'MySQL']}
							name={'Adopta.click'}
							shortDesc={'Adoption platform'}
						/>
						<ProjectCard
							thumbnail={ghiblidictionaryDesktop}
							technologies={['Next.js', 'Tailwind CSS', 'Axios', 'Framer Motion']}
							name={'Ghibli Dictionary'}
							shortDesc={'Information about Ghibli Films'}
						/>
						<ProjectCard
							thumbnail={countrysearchDesktop}
							technologies={['React.js', 'Tailwind CSS', 'Apollo Client']}
							name={'Country Search'}
							shortDesc={'Search bar for countries and territories'}
						/>
						<ProjectCard
							thumbnail={nijistreamsDesktop}
							technologies={[
								'React.js',
								'Styled Components',
								'React Router 6',
								'Axios',
							]}
							name={'Nijistreams'}
							shortDesc={'Check live streams from your favorite vtubers'}
							unfinished
						/>
						<ProjectCard
							thumbnail={portfolioDesktop}
							technologies={['Next.js', 'Tailwind CSS']}
							name={'Portfolio'}
							shortDesc={'My personal portfolio'}
						/>
						<ProjectCard
							thumbnail={mercadofoodDesktop}
							technologies={[
								'React.js',
								'Tailwind CSS',
								'React Router 6',
								'Node.js',
								'Express.js',
								'MongoDB / Mongoose',
							]}
							name={'mercadofood'}
							shortDesc={'Online supermarket'}
							unfinished
						/>
					</motion.section>
				</Layout>
				<Footer />
			</motion.section>
		</>
	);
};

export default index;
