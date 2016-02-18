$(document).ready(function() {

  $("body").add("<input type='text' placeholder='Enter a word'></input>").add("<button>Click to Add</button>").prependTo("body");

  $("input").css("display", "block").css("margin-left", "auto").css("margin-right", "auto");
  $("button").css("display", "block").css("margin-left", "auto").css("margin-right", "auto");

  $("button").click(function() {
    $("script").first().before("<div>" + $("input").val() + "</div>");
    $("div").last().append("<input type='color' class='bg-color'>").last().append("<input type='color' class='text-color'>");
    $("div").css("display", "inline-block").css("background-color", "blue").css("width", "20%").css("height", "200px").css("margin", "2%");
    
    $("div").click(function() {
      $("div").remove();
    });

    $(".bg-color").click(function() {
      alert("not closing");
    });
  });

});