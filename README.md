
# Password Hack
Inspired by the one in the Berlin Spy Museum - https://www.deutsches-spionagemuseum.de/.
## Critical arguments
- The time displayed is not the **time it takes to actually hack your _account_**.
	- Different hacking scenarios have different limitations: computer login, facebook account, ...
	- How can password be fed in? How many password attempts can we perform before triggering safety guards?
- The time displayed is an estimate it takes to **brute force** your password.
	- Should give context: there's easier/others ways to get your password: **Key loggers**, ...
	- Question: how can **passwords** be **stolen from databases**?
		- Prominent cases! Risk of cheap websites & backends, wordpress security vulnerabilities, ... when you use your password with your email elsewhere
	- Give tips about **internet security & account safety**: how can you improve your internet security!
		- don't use same password with same email
		- have an email for cheap accounts and one for more important accounts with good passwords
		- ...
	- **Actual current threats?!**
		- Explain: **how does a hacker work**?!
		- **Statistics** about **stolen accounts**?!
- Other thoughts
	- Hacker wouldn't know about the **consistency of your password**
	- Different algorithms, **take word dictionaries**

## Todos:
- Features
	- show scrambling text while doing it so it looks like hacking
- Options
	- Options for includeLettersUpper, includeNumbers, ... (CLI inputs?)
- Algorithm: how to combine all characters with previous characters?
	- recursion?
	- save already checked in array?
	- password check on every new set or do later with array.find
	- include database for words?
- Character Generation:
	- better way to generate them?
	- include unicode?
- Input
	- Obfuscate password on input - https://stackoverflow.com/questions/24037545/how-to-hide-password-in-the-nodejs-console
	- CLI input password
