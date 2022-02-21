import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HappyBirthday from "./pages/HappyBirthday.jsx";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { Friends } from "./assets/utils/Friends";

export default function App() {


 /*  // Wactch online whatsapp chat
	setInterval(() => {
		let message = document.querySelector("#main > header > div._24-Ff > div.zzgSd._3e6xi > span")
		// let message = document.querySelector("#main > header > div._24-Ff > div.zzgSd._3e6xi > span")
		if (message) {
			console.log(`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`)
		}
	}, 1000) */

	return (
		<div className="font-poppins">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/dashboard" element={<Dashboard />} />
					{Friends.map((f) => (
						<Route
							key={Object.keys(f)[0]}
							path={Object.keys(f)[0]}
							element={
								<HappyBirthday
									payload={f[Object.keys(f)[0]]}
									path={Object.keys(f)[0]}
								/>
							}
						/>
					))}
					<Route path="*" element={<Error />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}
