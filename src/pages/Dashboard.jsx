import React from "react";
import moment from "moment";
import { Friends } from "../assets/utils/Friends";
import "moment/locale/es-mx";
moment.locale("es-mx");

export default function Dashboard() {
	return (
		<div
			className="p-5 w-screen h-screen text-white"
			style={{
				background:
					"linear-gradient(115.56deg, #0f172a 6.23%, #16314e 92.51%)",
			}}
		>
			<div className="w-full h-full glassmorphism p-1 md:p-5">
				<h1 className="text-6xl md:text-7xl font-bold tracking-tighter">
					DOR
				</h1>
				<h2 className="text-lg md:text-3xl font-extralight my-5">
					Mis personitas registradas
				</h2>

				<table className="w-full table-auto">
					<thead>
						<tr>
							<th>Nombre</th>
							<th>Apellidos</th>
							<th>Cumpleaños</th>
							<th>Colores</th>
							<th>Imágenes</th>
							<th>Acciones</th>
						</tr>
					</thead>
					<tbody>
						{Friends.map((f, key) => {
							let id = Object.keys(f)[0];
							return (
								<tr key={key}>
									<td>{f[id].name}</td>
									<td>{f[id].lastName}</td>
									<td>
										{moment(f[id].birthday).format("LL")}
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
}
