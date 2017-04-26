(function(exports) {
  function NoteListView(NoteList) {
    this._noteList = NoteList;
  }

  NoteListView.prototype.viewNotes = function () {
    var notes = this._noteList.showNotes();
    var noteText = [];
    for(var i = 0; i < notes.length; i++) {
      noteText.push("<a href='#" + i + "'>" + notes[i].showText().substring(0,20));
    }
    return "<ul><li><div>" + noteText.join("</a></div></li><li><div>") + "</a></div></li></ul>";
  };

  exports.NoteListView = NoteListView;

})(this);


// string = '<ul>'
// this._noteList.forEach(function(note) {
//   string = string +  "<li><div><a href='#" + note.getId() + "'>" + note.showText().substring(0,20) + "</a></div></li></ul>"
// })
// return string + '</ul>'
