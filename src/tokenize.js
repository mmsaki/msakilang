const {
	isLetter,
	isWhitespace,
	isNumber,
	isParenthesis,
	isQuote,
} = require('./identify');

const tokenize = (input) => {
	const tokens = [];
	let cursor = 0;

	while (cursor < input.length) {
		const character = input[cursor];

		if (isParenthesis(character)) {
			tokens.push({
				type: 'Parenthesis',
				value: character,
			});
			cursor++;
			continue;
		}
		if (isWhitespace(character)) {
			cursor++;
			continue;
		}

		if (isNumber(character)) {
			let number = character;

			while (isNumber(input[++cursor])) {
				number += input[cursor];
			}

			tokens.push({
				type: 'Number',
				value: parseInt(number, 10),
			});
			continue;
		}

		if (isLetter(character)) {
			let letters = character;

			while (isLetter(input[++cursor])) {
				letters += input[cursor];
			}

			tokens.push({
				type: 'Name',
				value: letters,
			});
			continue;
		}

		if (isQuote(character)) {
			let string = '';

			while (!isQuote(input[++cursor])) {
				string += input[cursor];
			}

			tokens.push({
				type: 'String',
				value: string,
			});
			cursor++;
			continue;
		}

		throw new Error(`${character} is not valid`);
	}

	return tokens;
};

module.exports = { tokenize };
