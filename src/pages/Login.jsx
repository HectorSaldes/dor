import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Login() {
	const navegate = useNavigate();

	const [user, setUser] = useState({ user: "", pass: "" });

	const userSucces = {
		user: "root",
		pass: "root",
	};

	const valid = () => {
		if (
			user.user.includes(userSucces.user) &&
			user.pass.includes(userSucces.pass)
		) {
			navegate("/dashboard");
		} else {
		}
	};

	return (
		<div
			className="p-5 w-screen h-screen text-white"
			style={{
				background:
					"linear-gradient(115.56deg, #2B1D10 6.23%, #736551 92.51%)",
			}}
		>
			<div className="w-full h-full glassmorphism p-1 md:p-5">
				<div className="w-full h-full flex justify-center items-center">
					<div className="w-full md:w-1/4 text-center">
						<h1 className="text-6xl md:text-9xl font-bold tracking-tighter">
							DOR
						</h1>
						<h2 className="text-2xl md:text-4xl font-extralight my-5">
							Inicio de sesión
						</h2>
						<form>
							<label htmlFor="user">
								<span className="block font-medium">
									Usuario
								</span>
								<input
									id="user"
									type="text"
									placeholder="Ej. UsuarioX"
									className="w-full px-3 py-2 text-black border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400"
									required
									value={user.user}
									onChange={(e) =>
										setUser({
											...user,
											user: e.target.value,
										})
									}
								/>
							</label>
							<br />
							<br />
							<label htmlFor="pass">
								<span className="block font-medium">
									Contraseña
								</span>
								<input
									id="pass"
									type="password"
									placeholder="Ej. ContraseñaX"
									className="w-full px-3 py-2 text-black border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400"
									required
									value={user.pass}
									onChange={(e) =>
										setUser({
											...user,
											pass: e.target.value,
										})
									}
								/>
							</label>
							<br />
							<br />
							<button
								type="button"
								onClick={valid}
								className="w-full py-2 px-4 md:px-6 glassmorphism rounded-md duration-300 transform hover:scale-105"
							>
								Enviar
							</button>
						</form>
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
