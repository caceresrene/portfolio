import Head from 'next/head';
import Image from 'next/image';
import AboutMe from '../components/AboutMe';
import AboutSkills from '../components/AboutSkills';
import Footer from '../components/Footer';
import Landing from '../components/Landing';
import Layout from '../components/Layout';
import Nav from '../components/Nav';
import AboutMeWave from '../components/waves/AboutMeWave';
import { motion } from 'framer-motion';

export default function Home() {
	return (
		<>
			<Head>
				<title>René Cáceres — Web Developer</title>
				<meta
					name='og:title'
					content='René Cáceres — Full Stack Developer who loves Front-end'
				/>
				<meta
					name='description'
					content="René's portfolio, Full Stack Web Developer, who loves Front-end"
				/>
				<meta
					property='og:image'
					content='https://www.rene.fun/assets/ogImage.png'
				/>
			</Head>
			<Nav />
			<motion.section initial='initial' animate='animate' exit={{ opacity: 0 }}>
				<Layout>
					<Landing />
				</Layout>
				<AboutMeWave />
				<section className='bg-zinc-900 text-white -translate-y-0.5'>
					<Layout>
						<AboutMe />
						<AboutSkills />
					</Layout>
					<Footer />
				</section>
			</motion.section>
		</>
	);
}
