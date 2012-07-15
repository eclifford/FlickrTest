// Routes.js
// Application Router
// Eric Clifford
//
(function() {
  define([
    'jquery', 
    'underscore', 
    'backbone',
    'photosView',
    'photosCollection']
  , function($, _, Backbone, PhotosView, PhotosCollection) {
    var Router;
    return Router = Backbone.Router.extend({
      // Constructor
      //
      initialize: function() {
        photosCollection = new PhotosCollection();
        this.photosView = new PhotosView({
          el: 'div#gallery',
          collection: photosCollection
        });
        photosCollection.fetch();
      },

      // Routes table
      //
      routes: {
        "": "index",
        "photo/:id": "photo"
      },

      // Base Index route called upon app startup
      //
      index: function() {

      },

      // Photo deep link route
      // 
      // @todo - NOTE THIS IS NOT FULLY IMPLEMENTED
      //
      photo: function(id) {
        console.log('photoRouteHit', id);
        this.photosView.select(id);
      }
    })
  })
})();