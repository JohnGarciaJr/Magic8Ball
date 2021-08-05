
/***** START PROVIDED CODE ******/

function makeAnswerAppear(answerText) {
  // Adds "hidden" CSS class to the '8'.
  document.getElementById("eight").classList.add("hidden");

  // Find the answer element, change the text, and remove the CSS "hidden" class.
  document.getElementById("answer-text").innerText = answerText;

  document.getElementById("answer-text").classList.add("hidden");
  document.getElementById("triangle").classList.add("hidden");

  // Allow 1/1000th of a second to pass in order for the above changes to take effect.  Then remove the elements
  setTimeout(() => {
    document.getElementById("answer-text").classList.remove("hidden");
    document.getElementById("triangle").classList.remove("hidden");
  }, 1);
}

/***** END PROVIDED CODE ******/