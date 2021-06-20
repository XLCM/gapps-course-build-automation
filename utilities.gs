// checks for line or cell having content
function lineNotEmpty(temp) {
  if (temp.length > 0) {
    return true;
  } else {
    return false;
  }
}

// checks for line or cell having additional subcells
function lineHasChildren(temp) {
  if (temp.getNumChildren() > 0) {
    return true;
  } else {
    return false;
  }
}

// checks line or cell content for text
function isDiscussion(temp) {
  if (temp.findText("Discussion")) {
    return true;
  } else {
    return false;
  }
}

// formats line or cell based on what 'type' it is
function formatter (line) {
  switch (line) {
    case line.isBold():
      switch (line) {
        case line.findText("Discussion"):
          print(discussion(line.getText()));
          break;
        case line.findText("Assignment"):
          print(assignment(line.getText()));
          break;
        case line.findText("Quiz"):
          print(quiz(line.getText()));
          break;
        case line.findText("Video"):
          print(video(line.getText()));
          print(vidDownloads);
          break;
        default:
          print(paragraph_bold(line.getText()));
          break;
      }
      break;
    case line.isUnderline():
      print(paragraph_italic(line.getText()));
      break;
    default:
      print(paragraph(line.getText()));
      break;
  }
}
