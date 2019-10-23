$("document").ready(function() {

    $("#button").click(function() {
        var userInput = $(".input").val();
        var pigLatinWord = pigLatinizer(userInput);
        $(".output").text(pigLatinWord)
    });

});

function pigLatinizer(userInput) {
  var vowels =["a","e","i","o","u"]
  var firstLetter =userInput[0];
  if (vowels.includes(firstLetter)) {
    return userInput + "ay"
  } else {
      userInput.slice(1)+firstLetter + "ay"
  }


}
