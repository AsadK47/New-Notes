function NoteList () {
  this.list = []
}

NoteList.prototype.createNote = function (text) {
  var note = new Note (text);
  this.list.push(note)
};

function Note (text) {
  this.text = text
}
