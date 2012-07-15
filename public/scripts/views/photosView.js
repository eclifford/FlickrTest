// PhotosView.js
// Collection View for all photos
// Eric Clifford
//
(function() {
  define([
    'jquery', 
    'underscore',
    'backbone', 
    'photoview', 
    'text!public/templates/photosTemplate.html'
  ], function($, _, Backbone, PhotoView, PhotosTemplate) {
    var PhotosView;
    return PhotosView = Backbone.View.extend({
      index: 1, // The current selected index

      // Constructor
      //
      initialize: function() {
        _.bindAll(this, 'render');
        this.collection.bind('reset', this.render);
      },

      // Listen for the following DOM events
      //
      events: {
        "click a.btn-next": "onNext",
        "click a.btn-prev": "onPrev"
      },

      // Select the previous image in the UL and notify router of state change
      // 
      // @todo - disable prev button at index 1
      //
      onPrev: function() {
        var that = this;
        // Stay within the bounds of the UL
        if(that.index > 1) {
          that.index--; 
          var photoId = $('#gallery ul li:nth-child(' + that.index + ')').attr('data-photo-id');
          Backbone.history.navigate("photo/" + photoId, {silent: true, trigger: true});
        } 
        return false;  
      },

      // Select the next image in the UL and notify router of state change
      //
      // @todo - disable next button at last index
      //
      onNext: function() {
        var that = this;
        // Stay within the bounds of the UL
        if(that.index < that.collection.length) {
          that.index++;
          var photoId = $('#gallery ul li:nth-child(' + that.index + ')').attr('data-photo-id');
          Backbone.history.navigate("photo/" + photoId, {silent: true, trigger: true});      
        }
        return false;
      },

      // Select image by flickr id and set it active
      //
      // @params
      //  id [String] - The flickr id to locate and make active
      // 
      select: function(id) {
        var galleryItemsEl = $('#gallery ul li');
        galleryItemsEl.removeClass('active');
        galleryItemsEl.filter('[data-photo-id="'+id+'"]').addClass('active');  
      },

      // Select image by UL index and set it active
      //
      // @params
      //   index [Number] - the index to make active
      //
      selectByIndex: function(index) {
        this.index = index;
        var galleryItemsEl = $('#gallery ul li');
        galleryItemsEl.removeClass('active');
        $(galleryItemsEl.get(index)).addClass('active');  
      },

      // Render the collection
      //
      render: function() {
        $(this.el).append(_.template(PhotosTemplate, null));
        var that = this;
        _.each(this.collection.models, function(item) {
          that.renderItem(item);
        });
        this.selectByIndex(0);
      },

      // Render an individual item
      //
      // @params
      //   item [object] - the model data
      // 
      renderItem: function(item) {
        var photoView = new PhotoView({model: item});
        $('ul', this.el).append(photoView.render().el);
      }
    })  
  })
})();