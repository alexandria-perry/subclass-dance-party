$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // var dancerMakerFunctionName = "makeBlinkyDancer";

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // var dancerMakerFunction = window["makeBlinkyDancer"]

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
    // each dancer is an instance of make[type]Dancer
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
  });

  $('.line-up').on('click', function(event) {
    // grab all dancers and line them up on left side of screen

    $('.dancer').css({
    'animation': 'line-up 1s',
    });
  })


});