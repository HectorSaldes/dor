import React from 'react';
import CardCartoonOutlined from '../../components/CardCartoonOutlined';
import CardCartoonFilled from '../../components/CardCartoonFilled';
import ImageTop from '../../components/ImageTop';
import moment from 'moment';
import 'moment/locale/es-mx';

import Foto1 from './assets/mes_cuatro/1.jpg';


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
						<h1 className='font-bold text-5xl md:text-7xl text-center'>😍 Feliz Cuarto Mes Babe 😍</h1>)} />
					<CardCartoonFilled Items={() => (<h2 className='text-3xl md:text-4xl text-center'>
						{moment('2023/10/21').format('dddd, DD [de] MMMM [de] YYYY')} - {moment('2024/02/21').format('dddd, DD [de] MMMM [de] YYYY')}
						<br />
						<br />

						{moment('2023/10/21').fromNow()}
					</h2>)} />
					<CardCartoonOutlined
						Items={() => (
							<div className='text'>
								<h3 className='font-bold text-3xl'>Diana mi dulce compañia</h3>
								<br />
								<p>
									Hola babe, gracias por seguir conmigo y aguantar todas mis bromas o ocurrencias que a veces puedo
									sacar, escucharme o leerme todos los días a la distancia, ahorita no podemos
									vernos porque estoy malito de mi operación jaja, pero ya pronto nos veremos, y te daré un gran abrazo,
									espero te haya encantado la cita de la última vez que nos vimos el 14 de febrero comiendo como si no hubiera un
									mañana y acabar todos llenos, esos momentos son los que me encantan, atesoro y recuerdo..., espero que a ti también.
								</p>
								<br />
								<p>Espero ya sentirme mejor la siguiente semana para que nos podamos ver porque ya te extraño mucho, ya quiero sentir tu piel y oler tu encantador perfume, de ese que me gusta tanto.</p>
								<br/>
								<p>
									Si ya te diste cuenta, en la foto inicial puse una foto mia, pero en realidad significas mucho en esa foto, porque tú hiciste y me motivaste a realizar una fiesta de cumpleaños para mi,
									la cual no había tenido desde hace mucho tiempo, me hiciste sentir especial, que valgo mucho, y que soy importante para las personas que estuvieron conmigo, que igual no fueron muchas, pero fueron las más cercanas,
									y estoy 100% seguro que apartir de este punto, ningun cumpleaños será igual, uno tiene que ser mejor que el otro, y así sucesivamente jajaj
								</p>

								<br/>
								<p>
									Has de pensar que se me ha de olvidar nuestro cumplemes, pero no, déjame decirte que no
									se me olvida.
									De repente espero solo un poco para ver si lográs hacer enviarme un mensaje lindo, porque a veces
									siento que sólo yo  debo ser él de la iniciativa..., felicitar por el cumplemes, hacer algo lindo, cuando támbien adoro, amo
									y me vuelve loco un mensaje lindo, un mensaje de buenos días, un mensaje de
									buenas noches, un mensaje de te extraño, un mensaje de te amo, un mensaje de te quiero, un mensaje de
									te adoro, un mensaje de te necesito o un mensaje de te deseo.
								</p>
								<p>
									Pero, no no es tú culpa ya conozco tu esencia, y sé que tienes tus maneras de demostrar amor y cariño.
								</p>

								<br/>
								<p>
									Sabes que me encantan las cosas cursis y románticonas jaja, pero no te preocupes, no te voy a pedir que me mandes un mensaje lindo, lo harás cuando tengas que hacerlo y cuando nazca desde el fondo de tu pechito.
								</p>

								<br/>

								<p>
									Te amo mucho, y espero que te guste este pequeño detalle que hice para ti, espero que te guste, y que te haga sentir especial, porque tú eres una persona muy especial para mí. ❤️❤️❤️❤️
								</p>

							</div>
						)}
					/>
				</div>
			</div>
		</div>
	);
}
