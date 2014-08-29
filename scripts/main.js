(function (window, GoogleMap) {

    'use strict';

    // DOM canvas for the map
    var element = document.getElementById('map_canvas');
    // Actual map object
    var map = GoogleMap.create(element, GoogleMap.MAP_OPTIONS);

    // Create markers
    var marker1 = map.addMarker({
        id: 1,
        lat: 37.791350,
        lng: -122.435883,
        icon: 'markers/fire.png', // http://mapicons.nicolasmollet.com/
        draggable: true,
        content: '<div style="font-weight: bold;">I like food</div>'
    });
    var marker2 = map.addMarker({
        id: 2,
        lat: 37.781350,
        lng: -122.485883,
        icon: 'markers/blast.png', // http://mapicons.nicolasmollet.com/
        draggable: true,
        content: '<div style="font-variant: small-caps;">I like nothing</div>'
    });

    // Use collection related functions
    var found = map.findMarkerBy(function (marker) {
        return marker.id === 2;
    });
    console.log(found);
    map.removeMarkerBy(function (marker) {
        return marker.id === 2;
    });
    
}(window, window.GoogleMap));
