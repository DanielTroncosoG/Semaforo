import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Semaforo() {
	return (
		<>
			<div className="Soporte"></div>
			<div className="GranSemaforo">
				<div className="LuzRoja"></div>
				<div className="LuzAmarilla"></div>
				<div className="LuzVerde"></div>
			</div>
			;
		</>
	);
}
