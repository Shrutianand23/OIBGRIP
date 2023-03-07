function convert() {
	let celsius = parseFloat(document.getElementById("celsius-input").value);
	let fahrenheit = (celsius * 1.8) + 32;
	document.getElementById("fahrenheit-output").innerHTML = `${celsius}°C is ${fahrenheit}°F`;
}
