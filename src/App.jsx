import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HappyBirthday from "./pages/HappyBirthday.jsx";
import Home from "./pages/Home";
import Babe from './pages/babe/Index.jsx'
import Error from "./pages/Error";
import { Friends } from "./assets/utils/Friends";
import Valentin from "./pages/Valentin";
import Brenda from "./pages/Brenda";

export default function App() {
	return (
		<div className='font-poppins'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/babe' element={<Babe />} />
					<Route path='/Brenda' element={<Brenda />} />
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
					<Route path='/valentin/:name' element={<Valentin />} />
					<Route path='*' element={<Error />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}
