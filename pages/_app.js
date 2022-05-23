import '../styles/globals.css';
import Head from 'next/dist/shared/lib/head';

function MyApp({ Component, pageProps }) {
	return (
		<>
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
      </Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
