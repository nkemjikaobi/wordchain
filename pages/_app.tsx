import type { AppProps } from 'next/app';
import React from 'react';
import BoardState from '@context/board/BoardState';
import '../styles/globals.css';

/**
 * App wrapper for the whole application
 * @param {NextComponentType<NextPageContext, any, {}>} Component
 * @param {any} pageProps
 * @return {AppProps}
 */
const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<BoardState>
			<Component {...pageProps} />
		</BoardState>
	);
};

export default MyApp;
