import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import Icons from "../components/Icons";
import ButtonAboutMe from "../components/ButtonAboutMe";
import CardCartoonOutlined from "../components/CardCartoonOutlined";
import CardCartoonFilled from "../components/CardCartoonFilled";
import ImageTop from "../components/ImageTop";
import TextDetails from "../components/TextDetails";
import CardSense from "../components/CardSense";
import moment from "moment";
import "moment/locale/es-mx";

moment.locale("es-mx");

export default function Brenda({ payload, path = "" }) {

	const birthday = '1998/10/26'
	return (
		<>
			<HelmetProvider>
				<Helmet>
					<title>
						DOR | Brenda Nuñez
					</title>
				</Helmet>
			</HelmetProvider>
			<div
				className={`p-4 w-full h-full`}
				style={{
					background: `radial-gradient(81.91% 161.98% at 14.41% 14.5%, #F5B700 0%, #8F6B00 100%)`,
				}}
			>
				<div className='container glassmorphism pb-2'>
					<div className='w-full flex py-6 px-4 md:px-8 justify-between items-center'>
						<Link className='btnCartoonFilled' to='/'>
							<h1 className='text-5xl md:text-7xl font-bold tracking-tighter'>
								DOR
							</h1>
						</Link>
					</div>
					<div className='w-full sm:w-5/6 mx-auto'>
						<div className='relative flex flex-wrap justify-center'>
							<CardCartoonOutlined
								Items={() => <ImageTop url='https://i.imgur.com/BHnG9M2.png' alt='Image profile' />}
							/>
							<CardCartoonOutlined
								Items={() => <ImageTop url='https://i.imgur.com/agligGp.jpeg' alt='Image notion' />}
							/>
						</div>
						<div className='my-8 md:my-10 text-center'>
							<div className='text-5xl md:text-8xl font-bold text-transparent relative'>
								<h1 className='absolute text-black bg-clip-text translate-x-1 -translate-y-1'>
									¡Feliz Cumpleaños, Brenda!
								</h1>
								<h1 className='text-white '>¡Feliz Cumpleaños, Brenda!</h1>
							</div>
						</div>
						<div className='my-7 text-center'>
							<CardCartoonFilled
								Items={() => (
									<>
										<h3 className='font-bold text-3xl md:text-5xl'>
											{moment(birthday).format("LL")}
										</h3>
										<Icons />
									</>
								)}
							/>
						</div>
						<CardCartoonOutlined
							Items={() => (
								<TextDetails
									title={`Mi amor Brenda Nuñez`}
									description='
	Mi amor, feliz cumpleaños a la mujer que me ha robado el corazón y lo llena de alegría cada día. ❤️ Hoy celebro tu vida, tu sonrisa, tu esencia única que me enamora cada día.

Eres la persona más maravillosa que conozco,  llena de luz,  bondad y una fuerza increíble que me inspira a ser mejor.  Gracias por compartir momentos de tu vida conmigo, por cada momento de risa, complicidad, amor incondicional y ratos que únicamente pasamos solos tu y yo.

Te deseo un cumpleaños tan especial como tú,  lleno de sorpresas, alegrías y mucho amor.  Que todos tus sueños se hagan realidad y que sigamos construyendo juntos un futuro lleno de felicidad.

Te adoro con todo mi ser. Feliz cumpleaños, mi princesa. ❤️

Abajo de este mensaje, te dejo una playlist, de las canciones que más me recuerdan a ti, y que cada vez que voy en el carro y no estás conmigo, las pongo para recordarte más de lo que ya te tengo presente.
'
								/>
							)}
						/>

						<iframe
							title='Spotify Playlist'
							style={{ borderRadius: '10px' }}
							src="https://open.spotify.com/embed/playlist/4c8ooxHeC2f7OV1ZOKdjUH?utm_source=generator&theme=0"
							width='100%' height='500' frameBorder='0' allowFullScreen=''
							allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
							loading='lazy' />


						<div className='my-7 grid grid-cols-1 md:grid-cols-2 gap-10'>
							<div className='w-full'>
								<CardCartoonOutlined
									Items={() => (
										<TextDetails title='Como yo te veo' description='

Amor mío, en este día tan especial quiero decirte que te admiro profundamente. Eres una mujer única, auténtica y original, con una personalidad que brilla con luz propia. ✨ Me encanta tu sentido del humor, tu capacidad para encontrarle el lado divertido a la vida y hacerme reír hasta que me duela la panza o la cara.  Adoro tu diplomacia, esa habilidad que tienes para navegar cualquier situación con gracia y elegancia. Y sobre todo, me fascina tu valentía, esa fuerza interior que te impulsa a ir tras lo que deseas y a vivir la vida a tu manera, mirá por tu valentía estamos acá juntitos los dos ahora.  Eres una inspiración constante para mí, mi amor. ❤️' />
									)}
								/>
							</div>
							<div className='w-full'>
								<CardCartoonOutlined
									Items={() => (
										<TextDetails
											title='Que quiero para ti'
											description='Para ti, mi amor, deseo un futuro brillante lleno de éxitos y satisfacciones.  Quiero verte triunfar en cada paso que des, alcanzar todas tus metas personales y profesionales, y convertir cada sueño en realidad.  ✨  Deseo ser tu apoyo incondicional en ese camino,  celebrando tus logros y estando a tu lado en cada desafío.  Que nunca dejes de hacer lo que te apasiona,  que sigas brillando con esa luz propia que te caracteriza y que la confianza en ti misma te guíe hacia donde tu corazón te lleve.  Recuerda que eres capaz de lograr todo lo que te propongas, solo confía en el proceso y en la fuerza interior que te impulsa.  Estoy aquí para acompañarte en cada paso del camino. ❤️
'
										/>
									)}
								/>
							</div>
						</div>
						<div className='mb-6'>
							<CardCartoonOutlined
								Items={() => (
									<>
										<h3 className='font-bold text-3xl mb-3'>
											Lo que percibo de ti en cuánto a gustos
										</h3>
										<div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
											<CardSense
												url='https://elaltavoz.mx/wp-content/uploads/2023/09/red-wine-pouring-from-bottle-glass.width-1920.jpg'
												text='Vino: Brindo por ti, mi amor, con una copa de tu vino favorito, que al igual que tú, el vino lo disfruto como una tarde inolvidable con tu hermosa compañia, brindo por ese recuerdo. 🍷' />

											<CardSense
												url='https://sakiproducts.com/cdn/shop/articles/Turkish_Coffee_And_Espresso_Compared_1920x1080.jpg?v=1703755330'
												text='Café: Despertar contigo y compartir una taza de café es el mejor comienzo para cualquier día. Ah!, y café expresso para despertar ☕' />
											<CardSense
												url='https://play-lh.googleusercontent.com/z5_pfTKQvBuG8vOS5eGSAnjx8noDZZ0UaopFQKYckv0T2BYK8zQb2lZg5g0chgVAA8M'
												text='City Market: Recorrer los pasillos de City Market contigo, descubriendo nuevos sabores y productos, es una aventura que disfruto al máximo. 🛒' />
											<CardSense
												url='https://www.hola.com/horizon/original_aspect_ratio/ac2e313f16b6-como-cultivar-girasoles-en-maceta-07a-a.jpg'
												text='Girasoles: Al igual que los girasoles buscan la luz del sol, yo busco tu mirada cada mañana para iluminar mi día. 🌻' />
											<CardSense url='https://assets.unileversolutions.com/recipes-v2/93256.jpg'
																 text='Ceviche de pescado: Aunque no hemos comido un ceviche juntos imagino que disfrutas un buen ceviche de pescado, con esa pasión que te caracteriza. Eres como este platillo: fresca, deliciosa y única. 🐟' />
											<CardSense url='https://i.ytimg.com/vi/vDD76mZEvdc/maxresdefault.jpg'
																 text='Pastel Moca/Cheesecake: Celebrar tu cumpleaños con un pastel Moca o un Cheesecake es un placer para mis sentidos, pero no tanto como celebrar la vida a tu lado. 🎂' />
											<CardSense url='https://images.rappi.com.mx/products/1651958821969_1651958810873.jpeg'
																 text='Chocolates Suspiros: Eres tan dulce como un chocolate Suspiro, mi amor. Me derrito con cada beso tuyo. 🍫' />
											<CardSense
												url='https://cocina-casera.com/mx/wp-content/uploads/2018/05/pulpa-de-tamarindo-con-chile.jpg'
												text='Dulces ácidos picosos: Tu personalidad es como esos dulces ácidos picosos que tanto te gustan: dulce, atrevida y con un toque picante que me vuelve loco. 🌶️' />
										</div>
									</>
								)}
							/>
						</div>
						<ButtonAboutMe />
					</div>
				</div>
			</div>
		</>
	);
}
