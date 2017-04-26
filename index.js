// (function(exports) {
//     exports.App = new NoteController(new NoteList());
// })(this);
//
noteList = new NoteList();
noteController = new NoteController(noteList);
noteController.addNote('this is a note!');
noteController.addNote('so is this!');
noteController.addNote('how thrilling!');
noteController.addNote('this is a very very very very long note!');
//
function changeContent () {
  noteController.renderAll();
  noteController.renderSingle(0)
}

window.onload = changeContent;



makeUrlChange();

function makeUrlChange() {
  window.addEventListener('hashchange', showCurrentNote);
}

function showCurrentNote() {
  noteController.renderSingle(getNoteFromUrl(window.location));
}
function getNoteFromUrl(location) {
  return location.hash.split('#')[1];
}
