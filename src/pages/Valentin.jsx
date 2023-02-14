import { useParams, Link } from "react-router-dom";
import CardCartoonOutlined from "../components/CardCartoonOutlined";
import { quotes } from "../assets/utils/QuotesValentin";
import { useEffect, useState } from "react";

const Valentin = () => {
	let { name } = useParams();
	name = name.charAt(0).toUpperCase() + name.slice(1);
	const [quote, setQuote] = useState(
		quotes[Math.floor(Math.random() * quotes.length)],
	);
	useEffect(() => {
		handleQuote();
	}, []);

	const handleQuote = () => {
		setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
	};
	return (
		<div
			className='md:p-8 w-100 sm:h-screen md:w-screen'
			style={{
				background:
					"linear-gradient(90deg, rgba(230,61,94,1) 0%, rgba(238,122,118,1) 30%, rgba(238,115,112,1) 70%, rgba(230,61,94,1) 100%)",
			}}
		>
			<div className='p-5 w-full h-full container glassmorphism'>
				<div className='w-full h-full flex justify-center items-center'>
					<div className='text-center md:mx-20'>
						<Link className='btnCartoonFilled mx-auto w-1/3 mb-5' to='/'>
							<h1 className='text-3xl md:text-7xl font-bold tracking-tighter'>
								DOR
							</h1>
						</Link>
						{new Date().getDate() === 14 ? (
							<>
								<CardCartoonOutlined
									Items={() => (
										<div>
											<h2 className='text-3xl md:text-4xl mb-4'>
												Feliz Día de San Valentín <strong>{name}</strong> 🥰
											</h2>
											<p className='text-lg md:text-2xl mb-4'>
												Hoy día de San Valentín no quería hacerlo de otra manera que
												no fuese esta de deseartelas desde una página web
												mágica 🔮
											</p>
											<p className='text-md md:text-xl mb-3'>
												Es por eso que te dedico esta y algunas más frases para tí,
												así que averigua cuales son con el botón de abajo 👀
											</p>
											<p className='text-md md:text-xl'>
												<em>Te lo deseo con todo mi ❤️. Hector</em>
											</p>
										</div>
									)}
								/>
								<button
									className='my-5 btnAboutMe mx-auto text-xl md:text-2xl'
									onClick={handleQuote}
								>
									Generar mi nueva frase 💘
								</button>
								<div className='block group'>
									<div className='relative transition bg-[#e9e1cd] border-2 border-black group-hover:-translate-x-2 group-hover:-translate-y-2 rounded-xl group-hover:shadow-[8px_8px_0_0_#000] p-8'>
										<em className='text-xl md:text-3xl'> "{quote}"</em>
									</div>
								</div></>
						):(<div className='h-screen md:h-full'>
							<CardCartoonOutlined
								Items={() => (
									<div>
										<h2 className='text-3xl md:text-4xl mb-4 font-bold'>
											Oh no! 😱, el día de San Valentín ya ha pasado 🥺
										</h2>
										<p className='text-lg md:text-2xl mb-4'>
											Espero que hayas tenido un día maravilloso y que hayas podido disfrutarlo con la persona que más quieres.
										</p>
										<p className='text-md md:text-xl'>
											<em>Te deseo lo mejor ❤️. Hector</em>
										</p>
									</div>
								)}
							/>
						</div>)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Valentin;
