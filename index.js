/**
 * Todos:
 * 	- Features
 * 		- show scrambling text while doing it so it looks like hacking
 * 	- Options
 * 		- Options for includeLettersUpper, includeNumbers, ... (CLI inputs?)
 * 	- Algorithm: how to combine all characters with previous characters?
 * 		- recursion?
 * 		- save already checked in array?
 * 		- password check on every new set or do later with array.find
 *	- Character Generation:
 * 		- better way to generate them?
 * 		- include unicode?
 * 	- Input
 * 		- Obfuscate password on input - https://stackoverflow.com/questions/24037545/how-to-hide-password-in-the-nodejs-console
 * 		- CLI input password
 */


/**
 * DEPENDENCIES
 */
// TODO: maybe use chalk for prettier input / output
const readline = require('readline'); // https://nodejs.org/docs/latest-v10.x/api/readline.html


/**
 * CONSTS
 */
const PASSWORD_MAX_LENGTH = 7;

let pws = [];

// TODO: CLI inputs for includeLettersUpper, includeNumbers, ...
// TODO: allow to pass in password directly
const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
const lettersUpper =
	letters
	.map((letter) => {
		return letter.toUpperCase();
	});
const numbers = '1234567890'.split('');
const specialChars = '§=±!@#$%^&*()_+[];\\\`,./{}:"|~<>?'.split('');


/**
 * INPUT
 */
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What is your password?`, (userPassword) => {
	console.log(`This is your password: ${userPassword}`);

	/**
	 * ALGORITHM
	 */
	let hackedPassword;

	console.time('pw');

	for (let l = 0; l < letters.length; l++) {
		const letter = letters[l];
		if (userPassword === letter) {
			hackedPassword = letter;
			break;
		}
	}

	/**
	 * OUTPUT
	 */

	console.timeEnd('pw');
	// TODO: 	possible to get time without printing it to the console directly?
	//				this way we could present it more

	if (hackedPassword) {
		console.log(`hacked your password ${hackedPassword}`);
	}
	else {
		console.log(`did not hack password`);
	}

  rl.close();
});
