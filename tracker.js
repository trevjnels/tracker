const tracker = require('./tracker-object.js');
const fs = require('fs');
const path = require('path');
// console.log(tracker);

// map out true or false first to store for rewrite
// re write  using t f values and current sub directory names
// populate a js object export

var files = fs.readdirSync('./');
files = files.filter((file) => {
	if (file !== 'node_modules' && file.indexOf('.') === -1) {
		return file;
	}
});
var tuples = files.map((file) => {
	if (tracker[file] === undefined) {
		return [
			file,
			false
		];
	}
	return [
		file,
		tracker[file]
	];
});

// console.log(tuples);
// var string =

var stringMaker = function(tuples) {
	var string = `module.exports = {`;

	tuples.forEach((tuple) => {
		var problem = tuple[0];
		var value = tuple[1];
		if (value !== false) {
			string += '\n';
			string += '"';
			string += `${problem}` + '"' + `: "${value}",`;
		} else {
			string += '\n';
			string += '"';
			string += `${problem}` + '"' + `: ${false},`;
		}
	});

	// console.log(tuples);
	var end = ` };`;
	string += end;
	return string;
};

var string = stringMaker(tuples);
// `module.exports = {
// console.log(string);
// };
// `;
var filePath = path.join(__dirname + `/tracker-object.js`);
fs.writeFileSync(filePath, string, 'utf8');

var keys = Object.keys(tracker);
var length = keys.length;
var correct = 0;
for (let key in tracker) {
	if (tracker[key]) {
		correct++;
	}
}
var percentage = Math.floor(correct / length * 100);
console.log('------------------------------------');
console.log(
	'Total number of problems: ' +
		length +
		'.' +
		' Total right: ' +
		correct +
		'.' +
		'    |      Current score = ' +
		percentage +
		'%       ' +
		(
			percentage > 79 ? 'You are a powerful young Jedi' :
			'You are not a hacker yet')
);
console.log('------------------------------------');
