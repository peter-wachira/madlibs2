$(document).ready(function() {
    $("#blanks form").submit(function(event) {
      var blanks = ["noun1", "noun2", "adjective1", "name1", "adjective2", "verb1","bodypart1","verb2"];

      blanks.forEach(function(blank) {
        var userInput = $("input#" + blank).val();
        $("." + blank).text(userInput);
      });

      $("#story").show();

      event.preventDefault();
    });
  });

  ;
