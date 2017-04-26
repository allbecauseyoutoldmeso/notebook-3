(function(exports) {

function NoteList() {
  this._notes = [];
  this._noteCount = 0;
}

  NoteList.prototype.createNote = function(text) {
    var note = new Note(this._noteCount, text);
    this._notes.push(note);
    this._noteCount ++;
  };

  NoteList.prototype.showNotes = function() {

    return this._notes;
  };

  exports.NoteList = NoteList;

})(this);
