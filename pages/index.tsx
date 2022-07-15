import type { NextPage } from 'next';
import Head from 'next/head';
import Board from '../src/components/Board/Board';
import Keyboard from '../src/components/Keyboard/Keyboard';

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Word Chain</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className='container text-center bg-[#121212] w-screen h-screen text-white'>
				<nav className='h-[60px] w-full m-0 border-b-gray-500 border border-r-0 border-l-0 border-t-0 grid place-items-center'>
					<h1 className='m-0 text-white text-[45px]'>WordChain</h1>
				</nav>
				<div className='w-screen flex items-center pt-[50px] flex-col h-[calc(100vh_-_170px)]'>
					<Board />
					<Keyboard />
				</div>
			</main>
		</div>
	);
};

export default Home;
