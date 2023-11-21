import React from 'react';
import CardCartoonOutlined from '../../components/CardCartoonOutlined';
import CardCartoonFilled from '../../components/CardCartoonFilled';
import ImageTop from '../../components/ImageTop';
import moment from 'moment';
import 'moment/locale/es-mx';
import Foto from './assets/diana.jpeg';

moment.locale('es-mx');

export default function Mes({ bg_1, bg_2 }) {
	return (
		<div
			className='p-4 w-screen min-h-screen'
			style={{ background: `radial-gradient(81.91% 161.98% at 14.41% 14.5%, ${bg_1} 0%, ${bg_2} 100%)` }}>
			<div className='container glassmorphism py-4'>
				<div className='flex justify-center'>
					<CardCartoonOutlined Items={() => <ImageTop url={Foto} alt='Image profile' />} />
				</div>
				<div className='my-1 mx-0 sm:my-7 md:mx-8 grid gap-1 sm:gap-4'>
					<CardCartoonFilled Items={() => (
						<h1 className='font-bold text-5xl md:text-7xl text-center'>🎉 Feliz Primer Mes, Mi Amor 🎉</h1>)} />
					<CardCartoonFilled Items={() => (<h2 className='text-3xl md:text-4xl text-center'>
						{moment('2023/10/21').format('dddd, DD [de] MMMM [de] YYYY')} - {moment('2023/11/21').format('dddd, DD [de] MMMM [de] YYYY')}
						<br />
						<br />

						{moment('2023/10/21').fromNow()}
					</h2>)} />
					<CardCartoonOutlined
						Items={() => (
							<>
								<h3 className='font-bold text-3xl'>Diana de mi corazón</h3>
								<p className='text'>
									Hoy, al celebrar nuestro primer mes juntos, no puedo evitar sentirme increíblemente afortunado por
									cada
									momento que hemos compartido. Este tiempo a tu lado ha sido un viaje maravilloso, lleno de conexión,
									alegría y descubrimientos el uno con el otro.
									<br />
									<br />
									Que rápido pasa el tiempo cuando estoy contigo, y qué lindo es ver como cada día nos conocemos más y más. Siento que entre más te conozco, más me enamoro de ti.
									Parece que lo del Sushi fue ayer, y hoy ya estamos celebrando nuestro primer mes juntos que emoción te adoro tanto, me has hecho muy bonitos los días.
									<br />
									<br />

									Cada día contigo es una nueva aventura y la enorme conexión me deja asombrado. Es
									como
									si el universo conspirara para unirnos, con todas esas coincidencias y pequeños momentos que solo
									nosotros entendemos y que nos hacen sentir tan especiales el uno para el otro.
									<br />
									<br />

									Me encanta cómo nuestras conversaciones fluyen naturalmente, cómo nuestras risas se mezclan, y cómo
									incluso el silencio a tu lado se siente cómodo y lleno de entendimiento. Has traído tanta luz y
									felicidad a mi vida que es difícil recordar cómo era antes de tenerte.
									<br />
									<br />

									Contigo, he descubierto no solo la alegría en las grandes celebraciones, sino también la belleza en
									los
									detalles más pequeños de la vida cotidiana. Has hecho que cada día sea significativo y espero con
									ansias
									todos los momentos que aún tenemos por compartir.
									<br />
									<br />
									Coloqué esa foto, porque siento que desde ese día dio la oportunidad a todo lo que somos ahora, nuestra primera salida, las primeras pláticas profundas y la primera vez que tomé tu mano,
									todo ha sido muy bonito, y me encanta como nos vemos juntos, y como nos vemos el uno al otro.

									<br/>
									<br/>
									También quiero decirte que no es necesario que me pagues la ropa que te compraste, tu playera y los pantalones, yo me encargo de eso, es como un regalito para ti.🎁
									Nada más tú te encargas y divides tus pagos de los lentes y ya 🤓😘
									<br/>
									<br/>

									Gracias por ser tú, por todo lo que hemos vivido y por todo lo que está por venir.

								</p>
							</>
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
