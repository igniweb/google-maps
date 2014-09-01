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
        mapTypeId: google.maps.MapTypeId.ROADMAP, // HYBRID, ROADMAP, SATELLITE
        draggable: true,
        scrollwheel: true,
        disableDefaultUI: false,
        zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_BOTTOM,
            style: google.maps.ZoomControlStyle.DEFAULT
        },
        panControlOptions: {
            position: google.maps.ControlPosition.LEFT_BOTTOM
        },
        //cluster: {
        //    options: {
        //        styles: [{
        //            url: 'clusters/m2.png',
        //            width: 56,
        //            height: 55,
        //            textColor: '#fff',
        //            textSize: 13
        //        }, {
        //            url: 'clusters/m1.png',
        //            width: 53,
        //            height: 52
        //        }]
        //    }
        //},
        geocoder: true
    };

}(window.google, window.GoogleMap));
