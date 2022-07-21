import { Link } from 'react-router-dom';

export default function Error() {
	return (
		<div
			className='p-5 w-screen h-screen text-dorColor-100'
			style={{
				background: 'linear-gradient(115.56deg, #1A151C 6.23%, #9D885A 92.51%)',
			}}>
			<div className='glassmorphism w-full h-full p-1 md:p-5 bg-[url(https://i.pinimg.com/474x/4e/bc/52/4ebc52f1154d11e3a4b0aa57eae87bc7--siberia-fallen-angels.jpg)] bg-center bg-cover'>
				<div className='w-full h-full flex flex-col justify-center items-center bg-[#101010] bg-opacity-50 rounded-3xl'>
					<div className='self-center text-center p-2 md:p-5'>
						<h1 className='text-6xl md:text-9xl font-bold tracking-tighter'>
							E-DOR 404
						</h1>
						<p className='text-3xl md:text-4xl font-extralight my-5'>
							Está página a la que intentas acceder no existe
						</p>
					</div>
					<Link
						to='/'
						className='flex items-center justify-center px-4 py-2 transition bg-white border-2 border-[#101010] rounded-md focus:outline-none focus:ring shadow-[3px_3px_0_0_#101010] hover:shadow-none active:bg-yellow-50 text-black'>
						🚕 Regresar al inicio
					</Link>
				</div>
			</div>
		</div>
	);
}
