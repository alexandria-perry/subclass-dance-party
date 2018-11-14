var makeUnicornDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
 
  this.timeBetweenSteps = timeBetweenSteps;

  this.$node.addClass('unicorn-dancer');
  this.$node.html('<img src="https://media.giphy.com/media/OT75fxGjnLsaHRoEJ0/giphy.gif" />');

};

makeUnicornDancer.prototype = Object.create(makeDancer.prototype);
makeUnicornDancer.prototype.constructor = makeUnicornDancer;

// we plan to overwrite the step function below, but we still want the superclass step behavior to work,
// so we must keep a copy of the old version of this function
// makeUnicornDancer.prototype.oldStep = makeDancer.prototype.step;

// makeUnicornDancer.prototype.step = function() {
//   // call the old version of step at the beginning of any call to this new version of step
//   this.oldStep();
//   // toggle() is a jQuery method to show/hide the <span> tag.
//   // See http://api.jquery.com/category/effects/ for this and
//   // other effects you can use on a jQuery-wrapped html tag.
//   this.$node.toggle();
// };

