function Render () {

}

Render.prototype.base = function () {

  return[
    "<h2>Ultra Notes</h2>",
    "<textarea name='textarea' rows='8' cols='60' id='textarea'></textarea>",
    "<br style='line-height:1'></br>",
    "<button type='submit' name='Submit' id='submit'>Submit</button>",
    "<div id='notes'></div>"
  ].join("")

};

Render.prototype.renderNote = function () {

  var output = ""

  for (var i = 0; i < noteList.list.length; i++) {
    output += "<a href='#'>" + noteList.list[i].text.substr(0,20) + "</a>" + "<br>"
  }

  console.log(output)

  return output

};
