import React from 'react';
import CardCartoonOutlined from '../../components/CardCartoonOutlined';
import CardCartoonFilled from '../../components/CardCartoonFilled';
import ImageTop from '../../components/ImageTop';
import moment from 'moment';
import 'moment/locale/es-mx';

import Foto1 from './assets/mes_tres/1.jpg';


moment.locale('es-mx');

export default function Mes({ bg_1, bg_2 }) {
	return (
		<div
			className='p-4 w-screen min-h-screen'
			style={{ background: `radial-gradient(81.91% 161.98% at 14.41% 14.5%, ${bg_1} 0%, ${bg_2} 100%)` }}>
			<div className='container glassmorphism py-4'>
				<div className='flex flex-wrap justify-center'>
					<CardCartoonOutlined Items={() => <ImageTop url={Foto1} alt='Image profile' />} />
				</div>
				<div className='my-1 mx-0 sm:my-7 md:mx-8 grid gap-1 sm:gap-4'>
					<CardCartoonFilled Items={() => (
						<h1 className='font-bold text-5xl md:text-7xl text-center'>😍 Feliz Tercer Mes Babe 😍</h1>)} />
					<CardCartoonFilled Items={() => (<h2 className='text-3xl md:text-4xl text-center'>
						{moment('2023/10/21').format('dddd, DD [de] MMMM [de] YYYY')} - {moment('2024/01/21').format('dddd, DD [de] MMMM [de] YYYY')}
						<br />
						<br />

						{moment('2023/10/21').fromNow()}
					</h2>)} />
					<CardCartoonOutlined
						Items={() => (
							<div className='text'>
								<h3 className='font-bold text-3xl'>Mi Diana, hermosa, radiante y bonita</h3>
								<br />
								<p>
									Espero de todo corazón que te haya gustado mucho la compañía que te di en ese día que estabas enferma, intenté alegrar un poquito tu día estando a tu lado, y que hayas disfrutado mucho el regalo que te di de las gelatinas que compré antes de verte.
								</p>
								<br/>
								 <p>
									 Sé que no hicimos algo muy especial ese día, pero el simple hecho de estar uno al lado del otro, es algo que me hace muy feliz.
									 Ver películas y contarnos cosas que solo nosotros sabemos, es mágico eso que hacemos y creamos.
								 </p>
							</div>
						)}
					/>
				</div>
			</div>
		</div>
	);
}
