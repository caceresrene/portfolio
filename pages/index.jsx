import Head from 'next/head';
import Image from 'next/image';
import AboutMe from '../components/AboutMe';
import AboutSkills from '../components/AboutSkills';
import Footer from '../components/Footer';
import Landing from '../components/Landing';
import Layout from '../components/Layout';
import Nav from '../components/Nav';
import AboutMeWave from '../components/waves/AboutMeWave';

export default function Home() {
	return (
		<>
			<Nav />
			<Layout>
				<Landing />
			</Layout>
			<AboutMeWave />
			<section className='bg-zinc-900 text-white'>
				<Layout>
					<AboutMe />
					<AboutSkills />
				</Layout>
				<Footer />
			</section>
		</>
	);
}
