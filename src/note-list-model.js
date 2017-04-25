(function(exports) {

function NoteList() {

  this._notes = [];
}

  NoteList.prototype.createNote = function(text) {
      var note = new Note(text);

      this._notes.push(note);
  };

  NoteList.prototype.showNotes = function() {

    return this._notes;
  };

  exports.NoteList = NoteList;

})(this);
