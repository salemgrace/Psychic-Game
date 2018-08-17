  // Array that lists out all of the options (alphabet)
//   var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}
var rString = randomString(26, 'abcdefghijklmnopqrstuvwxyz');


  document.onkeyup = function() {

    var userGuess = event.key;
    // Only run the following code block if the user presses the correct letter.
    if (userGuess === rString) { 
        console.log("hurray");
    }
    else {
        console.log("sorry");
    }
  };