(function (exports) {

  function NoteController(noteList) {
    this.noteList = noteList;

  }

  NoteController.prototype.addNote = function(text) {

    this.noteList.createNote(text);

  };

  NoteController.prototype.listNotes = function() {

    var display = new NoteListView(this.noteList);

      return display.viewNotes();
  };

  NoteController.prototype.renderAll = function() {

    var element = document.getElementById('app');
    element.innerHTML = this.listNotes();

  };

  NoteController.prototype.listNote = function(index) {
    var display = new SingleNoteView(this.noteList.showNotes()[index]);
    return display.displayNote()
  };


  NoteController.prototype.renderSingle = function(index) {
    var element = document.getElementById('note');
    element.innerHTML = this.listNote(index);
  };

  exports.NoteController = NoteController;

})(this);


// function printElement() {
//   var element = document.getElementById('app');
//   console.log(element);
// }
//
// function changeText(id) {
//   var element = document.getElementById(id);
//   element.innerHTML = "Howdy!";
// }
