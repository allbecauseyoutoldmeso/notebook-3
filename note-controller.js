A(function (exports) {

  function NoteController(noteList) {
    this.noteList = noteList;

  }

  NoteController.prototype.addNote = function(text) {

    this.noteList.createNote(text);

  };

  NoteController.prototype.listNotes = function() {

    var display = new NoteListView(this.noteList)

      return display.viewNotes();
  }

  NoteController.prototype.render = function() {

    var element = document.getElementById('app');
    element.innerHTML = this.listNotes();

  }

  exports.NoteController = NoteController;

})(this);


function printElement() {
  var element = document.getElementById('app');
  console.log(element);
}

function changeText(id) {
  var element = document.getElementById(id);
  element.innerHTML = "Howdy!";
}
