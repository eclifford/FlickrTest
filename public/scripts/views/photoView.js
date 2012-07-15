// PhotoView.js
// View for an individual photo element
// Eric Clifford
//
(function() {
  define([
    'jquery', 
    'underscore', 
    'backbone', 
    'text!public/templates/photoTemplate.html'
  ], function($, _, backbone, PhotoTemplate) {
    var PhotoView;
    return PhotoView = Backbone.View.extend({
      tagName: 'li',

      // Constructor
      //
      initialize: function() {
        // Store the photoID on the LI element so we can access it later
        this.$el.attr('data-photo-id', this.model.get('id'));
      },

      // Render this PhotoItem
      //
      render: function() {
        // Bind the underscore template & data
        $(this.el).html(_.template(PhotoTemplate, this.model.toJSON()));

        // Return this for chainability
        return this;
      }
    })  
  })
})();
