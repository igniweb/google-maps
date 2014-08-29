(function (google, GoogleMap) {

    'use strict';

    // Map options
    GoogleMap.MAP_OPTIONS = {
        zoom: 10,
        center: {
            lat: 37.791350,
            lng: -122.435883
        },
        //maxZoom: 11, // scrollwheel must be true
        //minZoom: 9, // scrollwheel must be true
        mapTypeId: google.maps.MapTypeId.SATELLITE, // HYBRID, ROADMAP
        draggable: true,
        scrollwheel: true,
        disableDefaultUI: true
    };

}(window.google, window.GoogleMap));
