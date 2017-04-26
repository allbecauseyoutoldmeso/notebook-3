(function(exports) {

  function SingleNoteView(note) {
    this._note = note;
  }

  SingleNoteView.prototype.displayNote = function() {
    return "<div>" + this._note.showText() + "</div>";
  };

  exports.SingleNoteView = SingleNoteView;
})(this);
