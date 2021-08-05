
/* 
   Welcome to the Magic 8-ball Project.  Complete the 
   tasks outlined by the comments in this file.

   The following functions are available to you 
   (you can just call them):

   // This will hide the '8' (if shown) and 
   // show the triangle (if hidden).  It will
   // set the text on the triangle to the
   // string 'answerText'.
   function makeAnswerAppear(answerText)
*/

/* Returns a random integer in the range 'min' through 'max' inclusive. 

   This can be taken directly from MDN documentation: 
     https://tinyurl.com/3jkxa8h3

*/
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); 
  //The maximum is inclusive and the minimum is inclusive
}

/* Write a function that handles the magic 8-ball being clicked. Here are the steps:

   - Create an array containing at least 5 possible answers as strings.
   - Generate a random array index by calling 
       getRandomIntInclusive function.
   - Call 'makeAnswerAppear' using the random
       answer you selected.
   - (Level-up) Prevent your code from selecting the 
       same answer multiple times in a row 
       (loops could be required).
*/

let lastAnswer = [];

document.getElementById("eight-ball").addEventListener("click", answerQuestion);

function answerQuestion() {
  var answerText = ["Not sure.", "Maybe, we'll see.", "All signs point to NO.", "Ask again later.", "Doubtful!", "Wrong question.", "It is certain.", "....", "01011001 01100101 01110011", "YES!", "Thumbs up!"];
  var randomIndex = getRandomIntInclusive(0,10);
  // LEVEL-UP: If/Else to prevent repeat answers
  if (lastAnswer[0] !== answerText[randomIndex]) {
    makeAnswerAppear(answerText[randomIndex]);
  }
  else {
    randomIndex++;
    makeAnswerAppear(answerText[randomIndex]);
  }
  lastAnswer.shift()
  lastAnswer.push(answerText[randomIndex])
}