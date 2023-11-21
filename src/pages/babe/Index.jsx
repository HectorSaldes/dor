import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Mes_1 from './1_mes';

export default function Index() {
	return (
		<>
			<HelmetProvider>
				<Helmet>
					<title>Babe | ¡Felicidades!</title>
				</Helmet>
			</HelmetProvider>
			<div className='bg-gray-800'>
				<div className='container w-full flex justify-around items-center py-5'>
					<Link className='btnCartoonFilled' to='/'>
						<h1 className='text-5xl md:text-7xl font-bold tracking-tighter'>DOR</h1>
					</Link>
					<a href='https://hectorsaldes.netlify.app/' target='_blank' rel='noreferrer'>
						<button className='btnCartoonFilled'>👏 ¡Dame esos 5!</button>
					</a>
				</div>
			</div>
			<Mes_1 bg_1='#9B27A5' bg_2='#9D79BC' />
		</>
	);
}
