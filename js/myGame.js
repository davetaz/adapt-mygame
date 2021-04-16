define([
  'core/js/adapt',
  './myGameView',
  './myGameModel',
], function(Adapt, MyGameView, MyGameModel) {

  return Adapt.register('mygame', {
    view: MyGameView,
    model: MyGameModel
  });

});