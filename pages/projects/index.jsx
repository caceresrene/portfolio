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
import ProjectCard from '../../components/ProjectCard';

const index = () => {
	return (
		<>
			<Head>
				<title>René Cáceres — Projects</title>
				<meta name='description' content="René's portfolio, projects section" />
			</Head>
			<Nav />
			<Layout extended>
				<section className='grid md:grid-cols-2 mb-8 gap-4 p-4'>
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
						technologies={['React.js', 'Styled Components', 'React Router 6', 'Axios']}
						name={'Nijistreams'}
						shortDesc={'Check live streams from your favorite vtubers'}
            unfinished
					/>
				</section>
			</Layout>
			<Footer />
		</>
	);
};

export default index;
