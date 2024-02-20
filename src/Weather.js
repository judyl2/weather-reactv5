import React from "react";
import axios from "axios";

export default function Weather() {
	function handleResponse(response) {
		alert(`the weather in ${city} is ${response.data.main.temp}`);
	}
	let city = "brussels";
	let apiKey = "ab8e7ef210556986d1c9a75d6007b825";
	let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
	axios.get(apiUrl).then(handleResponse);

	return (
		<div>
			<h1>Weather App</h1>
			<ul>
				<li>Temp</li>
				<li>Wind</li>
			</ul>
		</div>
	);
}
