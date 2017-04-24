(function(exports) {

  function Note(text) {
    this._text = text;
  }

  Note.prototype.showText = function() {
      return this._text;
  };

  exports.Note = Note;

})(this);
