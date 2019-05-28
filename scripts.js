$(document).ready(function() {
  var textArea = document.getElementById("cm");
  var editor = CodeMirror.fromTextArea(textArea, {
    lineNumbers: true,
    indentWithTabs: true,
    matchBrackets: true,
    matchTags: true,
  	autoCloseBrackets: true,
    autoCloseTags: true,
    styleActiveLine: true,
    theme: "default",
    mode: "text"
  });
  $('#theme-choice').change(function() {
    editor.setOption("theme", $(this).val());
  });
  $('#language-choice').change(function() {
    editor.setOption("mode", "text/" + $(this).val());
  });
});
