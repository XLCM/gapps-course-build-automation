function onlineCoursework(moduleBlueprint, moduleContainer) {

  // List Tables
  var allTables = moduleBlueprint.getTables();

  // Select first table as 'overview'
  var overviewTable = allTables[0];
  var onlineCoursework = allTables[1];

  // Wipe container document
  function wipe() {
    moduleContainer.clear()
  };

  // Print to containerdoc
  function print(param) {
    moduleContainer.insertParagraph(0, param)
  };

  // Log for test
  function log(param) {
    Logger.log(param)
  };

  // --------  Table Builder --------

  wipe();

  function IGtableBuilder(table) {
    // Loop for rows in table
    print(table_close);
    print(tableBody_close);
    for (var a = table.getNumChildren() - 1; a >= 1; a--) {
      var row = table.getChild(a);
      print(tr_close + "\n");
      // Print order placeholder
      var cell = row.getChild(0);
      print(td_close + "\n");
      // Loop for lines in Activity Cell
      for (var b = cell.getNumChildren() - 1; b >= 0; b--) {
        var line = cell.getChild(b);
        if (lineHasChildren(line)) {
          if (line.isBold()) {
            if (line.findText("Discussion")) {
              print(discussion(line.getText()));
            } else if (line.findText("Assignment")) {
              print(assignment(line.getText()));
            } else if (line.findText("Quiz")) {
              print(quiz(line.getText()));
            } else if (line.findText("Video")) {
              print(video(line.getText()));
              print(vidDownloads);
            } else if (line.isUnderline()) {
              print(paragraph_italic(line.getText()));
            } else {
              print(paragraph_bold(line.getText()));
            }
          } else {
            print(paragraph(line.getText()));
          }
        } // end line > 0 check
      } // end line loop
      print(td_padded);
      print(td_centered + "#" + td_close);
      print(tr_open);
    } // end row loop
    print(tableBody_open);
    print(tableHead);
    print(tableClass);
  } // end tableBuilder

  function buildOverviewTable() {

    // Print Module Learning Objectives List
    print(close_ol + lineBreak);
    var mlo_table = overviewTable.getCell(8, 0);
    var mlo_number = mlo_table.getNumChildren() - 1;
    for (var i = mlo_number; i >= 0; i--) {
      var temp = mlo_table.getChild(i).getText();
      if (lineNotEmpty(temp)) {
        print(line(temp));
      }
    }
    print(ol_list);
    print(ableTo);

    // Print Big Ideas & Essential Questions
    print(close_ol + lineBreak);
    var bigIdeasTable = overviewTable.getCell(6, 0);
    var bigIdeasTableNumber = bigIdeasTable.getNumChildren() - 1;
    for (var i = bigIdeasTableNumber; i >= 0; i--) {
      var temp = bigIdeasTable.getChild(i).getText();
      if (lineNotEmpty(temp)) {
        print(line(temp));
      }
    }
    print(ol_list);
    print(lineBreak + essentialQuestions);

    // Print Module Overview
    var modOverviewTable = overviewTable.getCell(4, 0);
    var modOverviewTableNumber = modOverviewTable.getNumChildren() - 1;
    for (var i = modOverviewTableNumber; i >= 0; i--) {
      var temp = modOverviewTable.getChild(i).getText();
      if (lineNotEmpty(temp)) {
        print(paragraph(temp));
      }
    }
    print(moduleOverview);
  }

  IGtableBuilder(onlineCoursework);
  print(instructionalGuide);
  print(banner);
  buildOverviewTable();

}
