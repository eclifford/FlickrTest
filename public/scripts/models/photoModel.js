// PhotoModel.js
// Model for Flickr photo data
// Eric Clifford
//
(function() {
  define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
    var Photo;
    return Photo = Backbone.Model.extend({
      defaults: {
        id: '',
        title: '',
        owner: '',
        url: ''
      }
    });
  })
})();