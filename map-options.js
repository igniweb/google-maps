(function (window, google, googleMap) {

    'use strict';

    // Map options
    googleMap.MAP_OPTIONS = {
        zoom: 10,
        center: {
            lat: 37.791350,
            lng: -122.435883
        },
        //maxZoom: 11, // scrollwheel must be true
        //minZoom: 9, // scrollwheel must be true
        mapTypeId: google.maps.MapTypeId.SATELLITE, // HYBRID, ROADMAP
        draggable: false,
        scrollwheel: false,
        disableDefaultUI: true
    };

}(window, window.google, window.googleMap));
