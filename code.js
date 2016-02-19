// jQuery script which adds a text input and a button to add "div cards" to the DOM.
//  The "div cards" contain the text from the input and also get two color inputs: one which changes the 
//  color of the text and the other changes the background color.  A button is also added which deletes 
//  the "div card" and all its children.  Script is written without any static html form elements, no css file
//  and no "classes" or "ids".

$(document).ready(function() {

  // This makes a text input, styles the input and adds to the BODY as the first element in the body
  $( "<input/>", {
    "type": "text",
    "placeholder": "Enter a word"
  }).css({
    display: "block",
    "margin-left": "auto",
    "margin-right": "auto"
    }).prependTo( "body" );

  // This makes a button styles the button and adds to BODY as the child directly before the script
  $( "<button/>", {
    text: "Change Color",
    click: function() {
      addDiv();
      addDivText();
      addFgColorInput();
      addBgColorInput();
      addDeleteButton();
    }
  }).css({
    display: "block",
    "margin-left": "auto",
    "margin-right": "auto"
  }).insertBefore($("script").first());

  // This function adds a div and styles it to the body.  
  function addDiv() {
    $( "<div/>").css({
      display: "inline-block",
      "text-align": "center",
      "width": "20%",
      "background-color": "slategray",
      "height": "200px",
      "margin": "2%"
    }).insertBefore($("script").first());
  }

  // This adds text to each div card from the text input on the DOM
  function addDivText() {
    $("<p/>", {
      text: $('input').val()
    }).css({
      display: "inline-block",
      "font-size": "1.5rem",
      "width": "50%",
      "margin": "3%"
    }).appendTo($("div").last());
  }

  // This function adds a color input which, when added to an element, will change the color of that element
  function addFgColorInput() {
    $("<input/>", {
      "type": "color",
      change: function() {
        $(this).parent().css("color", $(this).val());
      }
    }).css({
      display: "block",
      "width": "35%",
      "margin-left": "auto",
      "margin-right": "auto"
    }).add("<label>FgColor</label>").appendTo($("div").last());
  }

  // This function adds a color input which, when added to an element, will change the background color of that element
  function addBgColorInput() {
    $("<input/>", {
      "type": "color",
      change: function() {
        $(this).parent().css("background-color", $(this).val());
      }
    }).css({
      display: "block",
      "width": "35%",
      "margin-left": "auto",
      "margin-right": "auto"
    }).add("<label>BgColor</label>").appendTo($("div").last());
  }

  // This function adds a button, when added to an element, will delete that element and all its children
  function addDeleteButton() {
    $("<button/>", {
      text: "Delete Div",
      click: function() {
        $(this).parent().remove();
      }
    }).css({
      display: "block",
      "width": "35%",
      "margin-left": "auto",
      "margin-right": "auto"
    }).appendTo($("div").last());
  }
});