var assert = {

  toEqual: function(actual, expected) {
    if(actual !== expected) {
      throw new Error("Error: expected " + expected + ", got " + actual);
    } else
      console.log("It passed! You guys are awesome!");
  }
};

var check = {

  toInclude: function(container, contained) {
    if(!Array.isArray(container)) {
      throw new Error(container + ' is not an array.  Oops.');
    }
    if(container.includes(contained)) {
      console.log("It passed! You guys rock!");
    } else
      throw new Error("Unlucky! " + container + " did not contain " + contained);
  }

};


(function(exports) {

  function testNoteHasText() {

    var note = new Note(0, "Hello!");
    assert.toEqual(note.showText(), "Hello!");
  }

  function testCreateNote() {

    var noteList = new NoteList();
    noteList.createNote("Howdy!");
    assert.toEqual(noteList._notes.length, 1);
  }

  function testShowNotes() {

    var noteList = new NoteList();

    noteList.createNote("Evening");
    noteList.createNote("Yo");

    assert.toEqual(noteList.showNotes().length, 2);
  }

  function testViewNotes(){

    var noteList = new NoteList();
    noteList.createNote("Hey Sean");
    noteList.createNote("Hey Alex");
    var noteListView = new NoteListView(noteList);

    assert.toEqual(noteListView.viewNotes(), "<ul><li><div><a href='#0'>Hey Sean</a></div></li><li><div><a href='#1'>Hey Alex</a></div></li></ul>");
  }

  function testNewNoteController(){
    function NoteListDouble(){}

    var noteListDouble = new NoteListDouble();
    var noteController = new NoteController(noteListDouble);

    assert.toEqual(noteController.noteList, noteListDouble);
  }

  function testRender(){

    function NoteDouble(){}
    function NoteListDouble(){}
    NoteDouble.prototype = {
      showText: function() {
        return "Hello";
      }
    };
    var noteDouble = new NoteDouble();
    NoteListDouble.prototype = {
      showNotes: function() {
        return [noteDouble];
      }
    };
    var noteListDouble = new NoteListDouble();
    var noteController = new NoteController(noteListDouble);
    noteController.renderAll();
    assert.toEqual(document.getElementById('app').innerHTML, '<ul><li><div><a href="#0">Hello</a></div></li></ul>');
  }

  function testSingleNoteView() {

    function NoteDouble(){}
    NoteDouble.prototype = {
      showText: function() {
        return "Hello";
      }
    };
    var noteDouble = new NoteDouble();
    var singleNoteView = new SingleNoteView(noteDouble);
    assert.toEqual(singleNoteView.displayNote(), "<div>Hello</div>" );

  }

  function testNoteListViewLength(){
    function NoteDouble() {}
    NoteDouble.prototype = {
      showText: function() {
        return "This is a very long lengthy sentence I think, well I hope.";
      }
    };
    var noteDouble = new NoteDouble();

    function NoteListDouble() {}
    NoteListDouble.prototype = {
      showNotes: function() {
        return [noteDouble];
      }
    };

    var noteListDouble = new NoteListDouble();
    var noteListView = new NoteListView(noteListDouble);

    assert.toEqual(noteListView.viewNotes(), "<ul><li><div><a href='#0'>This is a very long </a></div></li></ul>");
  }

  function testNoteId() {

    var noteList = new NoteList();
    noteList.createNote('tralala');
    noteList.createNote('blablabla');
    assert.toEqual(noteList.showNotes()[1].showId(), 1);

  }

  function testLoadSingleNote() {
    function NoteDouble(){}
    function NoteListDouble(){}
    NoteDouble.prototype = {
      showText: function() {
        return "This is a very long lengthy sentence I think, well I hope.";
      }
    };
    var noteDouble = new NoteDouble();
    NoteListDouble.prototype = {
      showNotes: function() {
        return [noteDouble, noteDouble];
      }
    };
    var noteListDouble = new NoteListDouble();
    noteController = new NoteController(noteListDouble);
    noteController.renderSingle(0);
    assert.toEqual(document.getElementById('note').innerHTML, "<div>This is a very long lengthy sentence I think, well I hope.</div>");
  }


  testLoadSingleNote();
  testSingleNoteView();
  testNoteHasText();
  testCreateNote();
  testShowNotes();
  testViewNotes();
  testNewNoteController();
  testRender();
  testNoteListViewLength();
  testNoteId();

})(this);
