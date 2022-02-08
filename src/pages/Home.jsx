import React from "react";

export default function Home() {
	return (
		<div
			className="p-5 w-screen h-screen bg-gray-600 text-dorColor-100"
			style={{
				background:
					"linear-gradient(115.56deg, #243748 6.23%, #21292F 92.51%)",
			}}
		>
			<div className="glassmorphism w-full h-full p-1 md:p-5">
				<div className="w-full h-full flex justify-center items-center">
					<div>
						<div className="flex flex-wrap">
							<div className="self-center w-full md:w-2/3 text-center p-2 md:p-5">
								<h1 className="text-6xl md:text-9xl font-bold tracking-tighter">
									DOR
								</h1>
								<p className="text-2xl md:text-4xl font-extralight my-5 text-justify md:text-center">
									<i>Dor</i> del romano significa anhelar a
									alguien que amas. <i>Dor</i> se usa para
									expresar que echas de menos a alguien, así
									como a los agridulces sensaciónes que tienes
									en esos momentos.
								</p>
								<a
									href="https://ro.wikipedia.org/wiki/Dor"
									target="_blank"
									rel="noreferrer"
									className="text-xl md:text-3xl font-extralight hover:text-yellow-400 delay-200 transition"
								>
									https://ro.wikipedia.org/wiki/Dor
								</a>
							</div>
							<div className="w-5/6 md:w-1/3 mx-auto">
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Almeida_J%C3%BAnior_-_Saudade_%28Longing%29_-_Google_Art_Project.jpg/300px-Almeida_J%C3%BAnior_-_Saudade_%28Longing%29_-_Google_Art_Project.jpg"
									className="mx-auto rounded-3xl w-1/2 md:w-2/3"
									alt="DOR"
								/>
							</div>
						</div>
						<a
							href="https://hectorsaldes.netlify.app/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<h4 className="footer">
								Página web escrita desde un teclado con amor.
								Hector 💥
							</h4>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
