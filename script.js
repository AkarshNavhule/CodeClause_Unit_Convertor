
		function convert() {
			const inputValue = parseFloat(document.getElementById('inputValue').value);
			const fromUnit = document.getElementById('fromUnit').value;
			const toUnit = document.getElementById('toUnit').value;
			let result;

			// Convert from the selected unit to meters, seconds, kilograms, or Celsius
			switch (fromUnit) {
				case 'm':
					result = inputValue;
					break;
				case 'ft':
					result = inputValue / 3.28084;
					break;
				case 'in':
					result = inputValue / 39.3701;
					break;
				case 'cm':
					result = inputValue / 100;
					break;
				case 'mm':
					result = inputValue / 1000
          case 'km':
				result = inputValue * 1000;
				break;
			case 'mi':
				result = inputValue * 1609.34;
				break;
			case 'yd':
				result = inputValue / 1.09361;
				break;
			case 'sec':
				result = inputValue;
				break;
			case 'min':
				result = inputValue * 60;
				break;
			case 'hr':
				result = inputValue * 3600;
				break;
			case 'day':
				result = inputValue * 86400;
				break;
			case 'kg':
				result = inputValue;
				break;
			case 'lb':
				result = inputValue / 2.20462;
				break;
			case 'oz':
				result = inputValue / 35.274;
				break;
			case 'c':
				result = inputValue;
				break;
			case 'f':
				result = (inputValue - 32) * (5/9);
				break;
			case 'k':
				result = inputValue - 273.15;
				break;
		}

		// Convert from meters, seconds, kilograms, or Celsius to the selected unit
		switch (toUnit) {
			case 'm':
				break;
			case 'ft':
				result *= 3.28084;
				break;
			case 'in':
				result *= 39.3701;
				break;
			case 'cm':
				result *= 100;
				break;
			case 'mm':
				result *= 1000;
				break;
			case 'km':
				result /= 1000;
				break;
			case 'mi':
				result /= 1609.34;
				break;
			case 'yd':
				result *= 1.09361;
				break;
			case 'sec':
				break;
			case 'min':
				result /= 60;
				break;
			case 'hr':
				result /= 3600;
				break;
			case 'day':
				result /= 86400;
				break;
			case 'kg':
				break;
			case 'lb':
				result *= 2.20462;
				break;
			case 'oz':
				result *= 35.274;
				break;
			case 'c':
				break;
			case 'f':
				result = result * (9/5) + 32;
				break;
			case 'k':
				result += 273.15;
				break;
		}

		// Display the result
		document.getElementById('result').innerHTML = inputValue + ' ' + fromUnit + ' = ' + result.toFixed(2) + ' ' + toUnit;
	}
