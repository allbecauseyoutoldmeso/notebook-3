(function(exports) {
  function NoteListView(NoteList) {
    this._noteList = NoteList;
  }

  NoteListView.prototype.viewNotes = function () {
    var notes = this._noteList.showNotes();
    var noteText = [];
    for(var i = 0; i < notes.length; i++) {
      noteText.push(notes[i].showText().substring(0,20));
    }
    return "<ul><li><div>" + noteText.join("</div></li><li><div>") + "</div></li></ul>";
  };

  exports.NoteListView = NoteListView;

})(this);
