// Config.js
// URI aliases for RequireJS
// Eric Clifford
//
(function() {
  require.config({
    baseUrl: "/",
    paths: {
      // Vendor 
      "jquery"            : "public/scripts/vendor/jquery",
      "underscore"        : "public/scripts/vendor/underscore",
      "backbone"          : "public/scripts/vendor/backbone",

      // RequireJS Plugins
      "text"              : "public/scripts/vendor/text",

      // App
      "router"            : "public/scripts/routes",
      "photosCollection"  : "public/scripts/models/photosCollection",
      "app"               : "public/scripts/app",
      "photosView"        : "public/scripts/views/photosView",
      "photoview"         : "public/scripts/views/photoView",
      "photo"             : "public/scripts/models/photoModel"
    },
    waitSeconds: 15
  });
})();
