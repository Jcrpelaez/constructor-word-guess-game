let letter = require("./letters.js");

function Word(answer) {
  this.objArray = [];

  for (var i = 0; i < answer.length; i++) {
    let letter = new Letter(answer[i]);
  }

  this.log = function() {
    let answerLog = "";
    for (var i = 0; i < this.objArray.length; i++) {
      answerLog += this.objArray[i] + "";
    }
  };
}
