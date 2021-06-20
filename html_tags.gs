// Headers
var moduleOverview = "<h2>Overview:</h2>";
var essentialQuestions = "<p><strong>Questions we'll consider:</strong></p>";
var ableTo = "<p><strong>After completing this Module, students will be able to:</strong></p>";
var instructionalGuide = "<h2>Instructional Guide:</h2>" + "\n";
var beforeImmersion = "<h3>Prior to Immersion Session on DAY, DATE</h3>";
var afterImmersion = "<h3>After Immersion Session:</h3>";
var immersion = "<h3>Immersion Session X of X: DAY, MONTH, DATE, YEAR from TIME am/pm to TIME am/pm</h3>";
var beforeFosterLive = "<h3>Prior to Foster Live Session on DAY, DATE</h3>";
var fosterLive = "<h3>Foster Live: DAY, MONTH, DATE, YEAR @ TIME PM PST</h3>";
var afterFosterLive = "<h3>After Foster Live Session:</h3>";

// Typography
function h1(temp) { return "<h1>" + temp + "</h1>" };
function paragraph(temp) { return "<p>" + temp + "</p>" };
function paragraph_italic(temp) { return "<p><em>" + temp + "</em></p>"; };
function paragraph_bold(temp) { return "<p><strong>" + temp + "</strong></p>"; };
function discussion(temp) { return '<p><strong><a class="icon-discussion icon-Solid" href="#">' + temp + '</a></strong></p>' };
function assignment(temp) { return '<p><strong><a class="icon-assignment icon-Solid" href="#">' + temp + '</a></strong></p>' };
function quiz(temp) { return '<p><strong><a class="icon-quiz icon-Solid" href="#">'+ temp + '</a></strong></p>' };
function video(temp) { return '<p><strong><a class="icon-video icon-Solid" href="#">' + temp + '</a></strong></p>' };

// Lists
// OL
var ol_list = "<ol style='padding-left: 30px;'>";
var close_ol = "</ol>";
// UL
var ul_list = "<ol style='padding-left: 30px;'>";
var close_ul = "</ol>";
// LI
function line(temp) { return "<li>" + temp + "</li>" };

// Table
var tableClass = '<table class="table table-bordered">';
var tableHead = "<thead>\n<tr style='background-color: #d9d9d9;'>\n<th style='text-align: center; width: 10%;'>Order:</th>\n<th style='width: 90%;'>Activity:</th>\n</tr>\n</thead>" + "\n";
var tableBody_open = "<tbody>" + "\n";
var tr_open = "<tr>";
var tr_close = "</tr>";
var td_open = "<td>";
var td_centered = "<td style='text-align: center;'>";
var td_activity = '<td style="padding-right: 20px; padding-left: 20px;">';
var td_padded = '<td style="padding-left: 20px; padding-right: 20px;">';
var td_PurpleTopic = "<td style='background-color: #4b2e83;' colspan='2'>\n</td>";
var td_close = "</td>";
var tableBody_close = "</tbody>";
var table_close = "</table>";

// Misc
var lineBreak = "\n";
var vidDownloads = '<p class="align-right" style="padding-top: 10px;">Downloads: <a class="icon-video icon-Solid" href="#"> Video</a>  |  <a class="icon-audio icon-Solid" href="#"> Audio</a>  |  <a class="icon-document icon-Solid" title="#" href="#"> Transcript</a></p>';
var banner = '<p><img src="https://canvas.uw.edu/courses/1308728/files/53237481/download" alt="section break" data-api-endpoint="https://canvas.uw.edu/api/v1/courses/1308728/files/53237481" data-api-returntype="File" /></p>' + lineBreak;
