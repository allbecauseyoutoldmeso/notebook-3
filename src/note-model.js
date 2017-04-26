(function(exports) {

  function Note(id, text) {
    this._text = text;
    this._id = id;
  }

  Note.prototype.showText = function() {
      return this._text;
  };

  Note.prototype.showId = function() {
    return this._id;
  };

  exports.Note = Note;

})(this);
