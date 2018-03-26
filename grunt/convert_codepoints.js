var fs = require('fs');
var codepoints = fs.readFileSync('codepoints', 'utf-8');
var result = {};

codepoints.split("\n")
	.map((line) => line.split(' '))
	.slice(0, -1) // last line is empty
	.forEach((pair) =>
		// <name>: <unicode char>
		result[pair[0]] = parseInt(pair[1], 16)
	);

fs.writeFileSync(
	'codepoints.json',
	 JSON.stringify(result),
	'utf8'
);