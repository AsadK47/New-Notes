var render = new Render ();

var noteList = new NoteList ();

window.onload = function () {
  document.getElementById('layout').innerHTML = render.base();
  document.getElementById('submit').addEventListener('click', function() {
    submitNote();
  })
}

function submitNote () {
  var text = document.getElementById('textarea').value
  noteList.createNote(text)
  document.getElementById('notes').innerHTML = render.renderNote()
  document.getElementById('textarea').value = ""
}
