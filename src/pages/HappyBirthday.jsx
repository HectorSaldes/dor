import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Icons from '../components/Icons';
import ButtonAboutMe from '../components/ButtonAboutMe';
import CardCartoonOutlined from '../components/CardCartoonOutlined';
import CardCartoonFilled from '../components/CardCartoonFilled';
import ImageTop from '../components/ImageTop';
import TextDetails from '../components/TextDetails';
import CardSense from '../components/CardSense';
import moment from 'moment';
import 'moment/locale/es-mx';

moment.locale('es-mx');

export default function HappyBirthday({ payload, path = '' }) {
	const {
		colors: { bgPrimary, bgSecondary },
	} = payload;
	const {
		profile, notion, name, lastName, birthday, dear, seeYou, wantYou, senseYou, notionPage,
	} = payload;

	return (<>
		<HelmetProvider>
			<Helmet>
				<title>
					DOR | {name} {lastName}
				</title>
			</Helmet>
		</HelmetProvider>
		<div className={`p-4 w-full h-full`}
				 style={{ background: `radial-gradient(81.91% 161.98% at 14.41% 14.5%, ${bgPrimary} 0%, ${bgSecondary} 100%)` }}>
			<div className='container glassmorphism pb-2'>
				<div className='w-full flex py-6 px-4 md:px-8 justify-between items-center'>
					<Link
						className='btnCartoonFilled'
						to='/'>
						<h1 className='text-5xl md:text-7xl font-bold tracking-tighter'>
							DOR
						</h1>
					</Link>
					<a
						href={notionPage}
						target='_blank'
						rel='noreferrer'>
						<button
							className='btnCartoonFilled'>
							👏 ¡Dame esos 5!
						</button>
					</a>
				</div>
				<div className='w-full sm:w-5/6 mx-auto'>
					<div className='relative flex flex-wrap justify-center'>
						<CardCartoonOutlined Items={() => (<ImageTop url={profile} alt='Image profile' />)} />
						<CardCartoonOutlined Items={() => (<ImageTop url={notion} alt='Image notion' />)} />
					</div>
					<div className='my-8 md:my-10 text-center'>
						<div className='text-5xl md:text-8xl font-bold text-transparent relative'>
							<h1
								className='absolute text-black bg-clip-text translate-x-1 -translate-y-1'>
								¡Feliz Cumpleaños, {name}!
							</h1>
							<h1 className='text-white '>¡Feliz Cumpleaños, {name}!</h1>
						</div>
					</div>
					<div className='my-7 text-center'>
						<CardCartoonFilled
							Items={() => (<>
								<h3 className='font-bold text-3xl md:text-5xl'>{moment(birthday).format('LL')}</h3>
								<Icons />
							</>)}
						/>
					</div>
					<CardCartoonOutlined Items={() => (<TextDetails title={`Quedid@ ${name} ${lastName}`} description={dear} />)} />
					<div className='my-7 grid grid-cols-1 md:grid-cols-2 gap-10'>
						<div className='w-full'>
							<CardCartoonOutlined Items={() => (<TextDetails title='Como yo te veo' description={seeYou} />)} />
						</div>
						<div className='w-full'>
							<CardCartoonOutlined Items={() => (<TextDetails title='Que quiero para ti' description={wantYou} />)} />
						</div>
					</div>
					<div className='mb-6'>
						<CardCartoonOutlined
							Items={() => (<>
								<h3 className='font-bold text-3xl mb-3'>
									Lo que percibo de ti
								</h3>
								<div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
									{senseYou.map((sense, i) => (<CardSense key={i} url={sense.cover} text={sense.text} />))}
								</div>
							</>)}
						/>
					</div>
					<ButtonAboutMe />
				</div>
			</div>
		</div>
	</>);
}
