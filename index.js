(function(exports) {
    exports.App = new NoteController(new NoteList());
})(this);

noteList = new NoteList();
noteController = new NoteController(noteList);
noteController.addNote('this is a note!');
noteController.addNote('so is this!');
noteController.addNote('how thrilling!');

function changeContent () {
    noteController.render();
}

window.onload = changeContent;
