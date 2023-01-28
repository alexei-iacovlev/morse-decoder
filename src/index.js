const MORSE_TABLE = {
	'.-': 'a',
	'-...': 'b',
	'-.-.': 'c',
	'-..': 'd',
	'.': 'e',
	'..-.': 'f',
	'--.': 'g',
	'....': 'h',
	'..': 'i',
	'.---': 'j',
	'-.-': 'k',
	'.-..': 'l',
	'--': 'm',
	'-.': 'n',
	'---': 'o',
	'.--.': 'p',
	'--.-': 'q',
	'.-.': 'r',
	'...': 's',
	'-': 't',
	'..-': 'u',
	'...-': 'v',
	'.--': 'w',
	'-..-': 'x',
	'-.--': 'y',
	'--..': 'z',
	'.----': '1',
	'..---': '2',
	'...--': '3',
	'....-': '4',
	'.....': '5',
	'-....': '6',
	'--...': '7',
	'---..': '8',
	'----.': '9',
	'-----': '0',
};



function decode(expr) {
	let resultArr = [];

	for (let i = 0; i < expr.length; i = i + 10) {
		resultArr.push(expr.slice(i, i + 10));
	}

	for (let i = 0; i < resultArr.length; i++) {
		if (resultArr[i] == '**********') {
			resultArr[i] = ' ';
			continue;
		}

		let symbol = '';

		if (resultArr[i].slice(0, 2) == 10) {
			symbol += '.';
		} else if (resultArr[i].slice(0, 2) == 11) {
			symbol += '-';
		}
		if (resultArr[i].slice(2, 4) == 10) {
			symbol += '.';
		} else if (resultArr[i].slice(2, 4) == 11) {
			symbol += '-';
		}
		if (resultArr[i].slice(4, 6) == 10) {
			symbol += '.';
		} else if (resultArr[i].slice(4, 6) == 11) {
			symbol += '-';
		}
		if (resultArr[i].slice(6, 8) == 10) {
			symbol += '.';
		} else if (resultArr[i].slice(6, 8) == 11) {
			symbol += '-';
		}
		if (resultArr[i].slice(8, 10) == 10) {
			symbol += '.';

		} else if (resultArr[i].slice(8, 10) == 11) {
			symbol += '-';
		}

		resultArr[i] = MORSE_TABLE[symbol];

	}

	return resultArr.join('');
}

module.exports = {
	decode
}