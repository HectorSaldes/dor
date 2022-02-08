import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
	return (
		<div
			className="p-5 w-screen h-screen bg-gray-600 text-dorColor-100"
			style={{
				background:
					"linear-gradient(115.56deg, #1A151C 6.23%, #9D885A 92.51%)",
			}}
		>
			<div
				className="glassmorphism p-1 md:p-5 w-full h-full bg-center bg-cover bg-blend-darken"
				style={{
					backgroundImage:
						"url(https://i.pinimg.com/474x/4e/bc/52/4ebc52f1154d11e3a4b0aa57eae87bc7--siberia-fallen-angels.jpg)",
				}}
			>
				<div className="w-full h-full flex justify-center items-center">
					<div className="w-full md:w-2/3 text-center p-2 md:p-5">
						<h1 className="text-6xl md:text-9xl font-bold tracking-tighter">
							E-DOR
						</h1>
						<p className="text-2xl md:text-4xl font-extralight my-5">
							ERROR 404
						</p>
						<p className="text-3xl md:text-4xl font-extralight my-5">
							Está página a la que intentas acceder, no existe
						</p>
						<Link to="/">
							<button className="py-2 px-4 md:px-6 text-xl glassmorphism duration-300 transform hover:scale-110">
								Regresar al inicio
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
