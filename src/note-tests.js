var assert = {

  toEqual: function(actual, expected) {
    if(actual !== expected) {
      throw new Error("Error: expected " + expected + ", got " + actual);
    } else
      console.log("It passed! You guys are awesome!");
  }

};

(function(exports) {

function testNoteHasText() {

  var note = new Note("Hello!");
  assert.toEqual(note.showText(), "Hello!");
}

exports.testNoteHasText = testNoteHasText;

})(this);
