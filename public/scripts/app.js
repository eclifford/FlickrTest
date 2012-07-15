(function() {
  define([
    'jquery', 
    'underscore', 
    'backbone', 
    'router'
  ], function($, _, Backbone, Router) {
    var router = new Router();
    Backbone.history.start();
  })
})();