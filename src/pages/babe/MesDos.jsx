import React from 'react';
import CardCartoonOutlined from '../../components/CardCartoonOutlined';
import CardCartoonFilled from '../../components/CardCartoonFilled';
import ImageTop from '../../components/ImageTop';
import moment from 'moment';
import 'moment/locale/es-mx';

import Foto1 from './assets/mes_dos/1.jpg';
import Foto2 from './assets/mes_dos/2.jpg';
import Foto3 from './assets/mes_dos/3.jpg';

moment.locale('es-mx');

export default function Mes({ bg_1, bg_2 }) {
	return (
		<div
			className='p-4 w-screen min-h-screen'
			style={{ background: `radial-gradient(81.91% 161.98% at 14.41% 14.5%, ${bg_1} 0%, ${bg_2} 100%)` }}>
			<div className='container glassmorphism py-4'>
				<div className='flex flex-wrap justify-center'>
					<CardCartoonOutlined Items={() => <ImageTop url={Foto1} alt='Image profile' />} />
					<CardCartoonOutlined Items={() => <ImageTop url={Foto2} alt='Image profile' />} />
					<CardCartoonOutlined Items={() => <ImageTop url={Foto3} alt='Image profile' />} />
				</div>
				<div className='my-1 mx-0 sm:my-7 md:mx-8 grid gap-1 sm:gap-4'>
					<CardCartoonFilled Items={() => (
						<h1 className='font-bold text-5xl md:text-7xl text-center'>😍 Feliz Segundo Mes, Cariño 😍</h1>)} />
					<CardCartoonFilled Items={() => (<h2 className='text-3xl md:text-4xl text-center'>
						{moment('2023/10/21').format('dddd, DD [de] MMMM [de] YYYY')} - {moment('2023/12/21').format('dddd, DD [de] MMMM [de] YYYY')}
						<br />
						<br />

						{moment('2023/10/21').fromNow()}
					</h2>)} />
					<CardCartoonOutlined
						Items={() => (
							<div className='text'>
								<h3 className='font-bold text-3xl'>Diana el motivo de mi felicidad</h3>
								<p>
									Qué rápido pasa el tiempo amor, ya son dos meses en los que los días pasan volando, y es que contigo
									todo es tan bonito que no me doy cuenta de nada más, por contigo estoy totalmente enfocado, y también
									en el trabajo jeje.
								</p>

								<br />
								<p>Estos dos meses han pasado volando, y cada recuerdo que hemos creado juntos es un tesoro que guardo
									en mi corazón. Me emociona pensar en todo lo que aún nos espera, en todas las aventuras, risas y
									momentos que compartiremos.</p>

								<br />
								<p>Hemos y estamos aprendiendo, conociéndonos y sabiendo que nos gusta el uno al otro poco a poco, por
									ejemplo que en este mes has empezado a usar Telegram porque evidentemente estás sabiendo de lo bueno
									😎</p>

								<br />
								<p>Hemos compartido momentos como, el que me estás acompañando de la construcción y remodelación de mi
									casa, has venido y estado aquí, te he enviado los avances y has formado parte de este proceso</p>

								<br />
								<p>También ya viví tu faceta en la que te pones mal 🍺 jaja, no es algo que me asuste o me haga cambiar
									de opinión, sé que fue importante para ti y hayas sentido otras emociones, pero hasta en esos momentos
									soy quien puede ayudarte si lo prefieres, estoy contigo y siempre me gusta ayudarte, sabes que te
									cuido mucho y en ese aspecto también debes saberlo jaja, solo espero yo no ponerme así algún día, o a
									lo mejor y sí, y si me gustaría que estuvieras tú ahí ayudándome si es que lo estás 😘</p>

								<br />
								<p>Has compartido el momento conmigo de reencontrarme con un viejo amigo, y lo valoré mucho, contigo
									pueda estar con cualquier persona y siempre con las ganas de estarte presumiendo, porque conmigo tu
									eres la que sobresales para mí, también hemos estado en el centro de Cuernavaca de noche, riendo y
									pasándola increíble</p>

								<br />
								<p>Y sin duda alguna también el darme el espacio de estar en tu casa las veces que me he quedado, son
									actos de amor que son super valorados y especiales para mí, gracias por darme esa confianza, nunca
									haré algo que rompa eso y esto que nosotros sentimos, sé que también haces lo posible porque esto no
									se pierda cada día 💜</p>


								<br />
								<p>Los momentos que pasamos nosotros dos juntos son de lo mejor, el acercarte a mi para darte un abrazo,
									un beso o una acaricia es una verdadera muestra de mi amor hacia tí, sentirme seguro contigo, en paz,
									bien conmigo, feliz </p>

								<br />
								<p>Te creé esta playlist con las canciones que muchas veces me la paso escuchando para poder recordarte
									y son canciones que siempre me recordarán, y la primera es especial <em>Solo tú...</em>, nuestra
									canción con la que hemos compartido bellos momentos, como cuando fuiste mi novia por ejemplo ❤️</p>

								<br />
								<p>Te amo tanto por no dejar de quererme, eres muy especial para mí, y me importas como a nadie!</p>
								<iframe
									title='Spotify Playlist'
									style={{ borderRadius: '10px' }}
									src='https://open.spotify.com/embed/playlist/2RVOJGS6ISQLo4jUzexAmp?utm_source=generator'
									width='100%' height='500' frameBorder='0' allowFullScreen=''
									allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
									loading='lazy' />
							</div>
						)}
					/>

					{/*<CardCartoonOutlined
						Items={() => (
							<>
								<h3 className='font-bold text-3xl'>Como yo te veo</h3>
								<p className='text'>

								</p>
							</>
						)}
					/>

					<CardCartoonOutlined
						Items={() => (
							<>
								<h3 className='font-bold text-3xl'>Lo que quiero de ti</h3>
								<p className='text'>

								</p>
							</>
						)}
					/>*/}

				</div>
			</div>
		</div>
	);
}
