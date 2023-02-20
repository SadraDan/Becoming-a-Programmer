let name /* true false number string {} [] */

/* 
Math.random() generates a random number between 0 and 1

*/


/* 
  Exercise 1 (Easy)

  Create a function that randomly generates your name.
  Final results ['S', 'A', 'D', 'R', 'A']

  Calculate the number of iterations. How many iterations does it take each time?

  Hint: 
  Use while loops

  Exercise 2

  Create a function that takes any name and tries to randomly generate the name. Calculate how many iterations it takes.
  Try bigger names and short names and compare them.
*/

const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

function generateRandomIntegerUpto26() {
  return Math.floor(Math.random() * 25)
}

function generateRandomLetter() {
  const letterIndex = generateRandomIntegerUpto26(); 
  return alphabet[letterIndex];
}

function generateFiveRandomLetters() {
  return [
    generateRandomLetter(), 
    generateRandomLetter(),
    generateRandomLetter(), 
    generateRandomLetter(),
    generateRandomLetter(),
  ]
}

console.log(generateFiveRandomLetters())