import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import Ballon from "../assets/svg/Ballon.svg";
import Cake from "../assets/svg/cake.svg";
import Congrat from "../assets/svg/congrat.svg";
import Congrats from "../assets/svg/congrats.svg";
import Gif from "../assets/svg/gif.svg";
import Horse from "../assets/svg/horse.svg";
import Pie from "../assets/svg/pie.svg";
import Piece from "../assets/svg/piece.svg";
import Calendar from "../assets/svg/calendar.svg";
import moment from "moment";
import "moment/locale/es-mx";
moment.locale("es-mx");

export default function HappyBirthday({ payload, path }) {
	const {
		colors: { bgPrimary, bgSecondary, txtPrimary, txtSecondary },
	} = payload;

	const {
		profile,
		notion,
		name,
		lastName,
		birthday,
		dear,
		seeYou,
		wantYou,
		senseYou,
		notionPage,
	} = payload;
	return (
		<>
			<HelmetProvider>
				<Helmet>
					<title>
						DOR | {name} {lastName}
					</title>
					<meta
						property="og:url"
						content={`https://ddoorr.netlify.app/${path}`}
					/>
				</Helmet>
			</HelmetProvider>
			<div
				className="p-4 w-full h-full"
				style={{
					background: `radial-gradient(81.91% 161.98% at 14.41% 14.5%, ${bgPrimary} 0%, ${bgSecondary} 100%)`,
					color: `${txtSecondary}`,
				}}
			>
				<div className="container glassmorphism">
					<div className="w-full flex py-6 px-4 md:px-8 justify-between items-center">
						<div>
							<Link to="/">
								<h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
									DOR
								</h1>
							</Link>
						</div>
						<div>
							<a
								href={notionPage}
								target="_blank"
								rel="noreferrer"
							>
								<button className="py-2 px-4 md:px-6 glassmorphism duration-300 transform hover:scale-110">
									¡Dame esos 5! 🖐
								</button>
							</a>
						</div>
					</div>
					<div className="container w-5/6 mx-auto">
						<div className="flex justify-center">
							<img
								className="rounded-full w-40 md:w-80"
								src={profile}
								alt="Profile"
							/>
							<p className="mx-2 md:mx-5"></p>
							<img
								className="rounded-full w-40 md:w-80"
								src={notion}
								alt="Notion"
							/>
						</div>

						<div className="my-8 md:my-10 text-center">
							<h2 className="text-4xl md:text-8xl font-bold">
								¡Feliz Cumpleaños,{" "}
								<span style={{ color: `${txtPrimary}` }}>
									{name}
								</span>
								!
							</h2>
							<div className="my-8 md:my-10 flex justify-evenly flex-wrap">
								<img
									className="w-12 md:w-20"
									alt="Ballon"
									src={Ballon}
								/>
								<img
									className="w-12 md:w-20"
									alt="Cake"
									src={Cake}
								/>
								<img
									className="w-12 md:w-20"
									alt="Congrat"
									src={Congrat}
								/>
								<img
									className="w-12 md:w-20"
									alt="Congrats"
									src={Congrats}
								/>
								<img
									className="w-12 md:w-20"
									alt="Gif"
									src={Gif}
								/>
								<img
									className="w-12 md:w-20"
									alt="Horse"
									src={Horse}
								/>
								<img
									className="w-12 md:w-20"
									alt="Pie"
									src={Pie}
								/>
								<img
									className="w-12 md:w-20"
									alt="Piece"
									src={Piece}
								/>
							</div>
							<div className="my-5">
								<img
									className="w-12 md:w-20 mx-auto"
									alt="Calendar"
									src={Calendar}
								/>
								<h3 className="font-bold text-3xl">
									{moment(birthday).format("LL")}
								</h3>
							</div>
						</div>

						<h3 className="font-bold text-3xl">
							Querid@,{" "}
							<span style={{ color: `${txtPrimary}` }}>
								{`${name} ${lastName}`}
							</span>
						</h3>
						<p className="text">{dear}</p>
						<div className="my-20 grid grid-cols-1 md:grid-cols-2 gap-10">
							<div className="w-full md:w-4/5">
								<h3 className="font-bold text-3xl">
									Como yo te veo
								</h3>
								<p className="text">{seeYou}</p>
							</div>
							<div className="w-full md:w-4/5">
								<h3 className="font-bold text-3xl">
									Que quiero para ti
								</h3>
								<p className="text">{wantYou}</p>
							</div>
						</div>
						<h3 className="font-bold text-3xl">
							Lo que percibo de ti
						</h3>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
							{senseYou.map((sense, i) => (
								<div
									className="w-full rounded-md glassmorphism overflow-hidden"
									key={i}
								>
									<img
										className="w-full h-52 object-cover"
										src={sense.cover}
										alt=""
									/>
									<div className="p-5">
										<p className="text-lg text-justify">
											{sense.text}
										</p>
									</div>
								</div>
							))}
						</div>

						<a
							href="https://hectorsaldes.netlify.app/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<h4 className="footer">
								Página web escrita desde un teclado con amor.{" "}
								Hector 💥
							</h4>
						</a>
					</div>
				</div>
			</div>
		</>
	);
}
