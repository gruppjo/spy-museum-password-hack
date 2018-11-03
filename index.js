
const readline = require('readline');

const PASSWORD_MAX_LENGTH = 7;

let pws = [];

const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
const lettersUpper =
	letters
	.map((letter) => {
		return letter.toUpperCase();
	});
const numbers = '1234567890'.split('');
const specialChars = '§=±!@#$%^&*()_+[];\\\`,./{}:"|~<>?'.split('');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What is your password?`, (userPassword) => {
	console.log(`This is your password: ${userPassword}`);

	let hackedPassword;

	console.time('pw');

	for (let l = 0; l < letters.length; l++) {
		const letter = letters[l];
		if (userPassword === letter) {
			hackedPassword = letter;
			break;
		}
	}

	console.timeEnd('pw');
	if (hackedPassword) {
		console.log(`hacked your password ${hackedPassword}`);
	}
	else {
		console.log(`did not hack password`);
	}

  rl.close();
});

