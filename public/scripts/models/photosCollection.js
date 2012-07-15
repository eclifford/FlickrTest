// PhotosCollection.js
// Collection for Flickr getPhotos()
// Eric Clifford
//
(function() {
  define(['jquery', 'underscore', 'backbone', 'photo'], function($, _, Backbone, Photo) {
    var API_KEY = 'bc7ea6843c3aa35757354e5edeea239e';
    var PHOTO_SET = '72157619882835617';
    var Photos;
    return Photos = Backbone.Collection.extend({
      model: Photo,
      url: 'http://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key='+API_KEY+'&photoset_id='+PHOTO_SET+'&format=json&nojsoncallback=1',
    
      // Parse the response build the photo models
      //
      // @params 
      //  response [object] - The JSON returned from Flickr getPhotos
      //
      // @todo
      //  - better handle error response codes
      //
      parse: function(response) {
        // Verify we have a valid response
        if(response.stat === 'ok') {
          // Iterate through all photo objects
          return _.map(response.photoset.photo, function(photo) {
            // Build a new Photo model by mapping photo object data and owner information
            return new Photo({
              id: photo.id,
              owner: response.photoset.ownername,
              title: photo.title,
              url: 'http://farm'+photo.farm+'.staticflickr.com/'+photo.server+'/'+photo.id+'_'+photo.secret+'.jpg'
            });
          });       
        }
        // Houston we have a problem
        else {
          throw new Error('Unable to parse collection');
        }
      }
    });
  })
})();