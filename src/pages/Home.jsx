import ButtonAboutMe from '../components/ButtonAboutMe';

export default function Home() {
	return (
		<div className='p-5 w-screen h-screen text-dorColor-100 bg-[#101010]'>
			<div
				className='glassmorphism w-full h-full p-1 md:p-5 bg-[url(https://source.unsplash.com/random/1080x720/)] bg-center bg-cover'>
				<div className='w-full h-full flex flex-col justify-center items-center bg-[#101010] bg-opacity-50 rounded-3xl'>
					<div className='self-center text-center p-2 md:p-5'>
						<h1 className='text-6xl md:text-9xl font-bold tracking-tighter'>
							DOR
						</h1>
						<p className='text-2xl md:text-3xl font-extralight my-5 text-justify md:text-center'>
							<i>Dor</i> del romano significa anhelar a alguien que amas. <br />
							<i>Dor</i> se usa para expresar que echas de menos a alguien, así
							como a los agridulces sensaciónes que tienes en esos momentos.
						</p>
						<a
							href='https://ro.wikipedia.org/wiki/Dor'
							target='_blank'
							rel='noreferrer'
							className='text-xl md:text-3xl font-extralight hover:text-yellow-400 delay-200 transition'>
							https://ro.wikipedia.org/wiki/Dor
						</a>
					</div>
					<ButtonAboutMe />
				</div>
			</div>
		</div>
	);
}
