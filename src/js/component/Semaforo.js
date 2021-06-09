import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Semaforo() {
	const [Color, setColor] = useState("red");
	return (
		<>
			<div className="Soporte"></div>
			<div className="GranSemaforo">
				<div className="Espaciado"></div>
				<div
					onClick={() => setColor("red")}
					className={
						"Luz Rojo" + (Color === "red" ? " brillo" : "")
					}></div>
				<div
					onClick={() => setColor("yellow")}
					className={
						"Luz Amarillo" + (Color === "yellow" ? " brillo" : "")
					}></div>
				<div
					onClick={() => setColor("green")}
					className={
						"Luz Verde" + (Color === "green" ? " brillo" : "")
					}></div>
			</div>
			;
		</>
	);
}
